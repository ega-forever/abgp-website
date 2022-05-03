import { Component, OnInit } from '@angular/core';
import { SettingsModel } from './models/SettingsModel';
import { StateModel } from './models/StateModel';
// @ts-ignore
import crypto from 'crypto-browserify';
// @ts-ignore
import _ from 'lodash';
import { RecordModel } from './models/RecordModel';
import { ShowRecordsModel } from './models/ShowRecordsModel';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass'],
  providers: []
})
export class ExampleComponent implements OnInit {

  settings: SettingsModel = new SettingsModel(3, 50, { min: 30, max: 50 });
  record: RecordModel = new RecordModel('test', 'data', '-1');
  workers: Worker[] = [];
  workerStates: StateModel[] = [];
  showRecords: ShowRecordsModel = new ShowRecordsModel('-1', []);

  private keys: Array<{
    privateKey: string,
    publicKey: string
  }> = [];

  ngOnInit() {
  }

  onPlay() {
    this.prepareKeys();
    this.initWorkers();
  }

  onSelectShowRecords() {
    console.log('super', this.showRecords.nodeIndex);
    const worker = this.workers[parseInt(this.showRecords.nodeIndex, 10)];
    worker.postMessage({ type: 'get_records', args: [] });
  }

  onRecord() {
    if (!this.record.key || !this.record.value) {
      return;
    }

    const worker = this.workers[parseInt(this.record.nodeIndex, 10)];
    worker.postMessage({ type: 'add_record', args: [this.record.key, this.record.value] });
    this.record = new RecordModel('', '', '-1');
  }

  private prepareKeys() {
    this.keys = [];
    for (let i = 0; i < this.settings.count; i++) {
      const node = crypto.createECDH('secp256k1');
      node.generateKeys();
      this.keys.push({
        privateKey: node.getPrivateKey().toString('hex'),
        publicKey: node.getPublicKey('hex', 'compressed')
      });
    }
    console.log(this.keys)
  }

  private initWorkers() {

    if (this.workers && this.workers.length)
      for (const worker of this.workers)
        worker.terminate();

    this.workerStates = [];
    this.workers = this.keys.map((key, index) => {

      const worker = new Worker('assets/workers/abgpWorker.js');

      worker.addEventListener('message', (e) => {
        if (e.data.type === 'packet') {
          this.workers[e.data.args[0]].postMessage({ type: 'packet', args: [e.data.args[1]], id: e.data.id });
        }

        if (e.data.type === 'info') {
          this.workerStates[index] = new StateModel(e.data.args[0].stateRoot, e.data.args[0].lastUpdateTimestamp);
        }

        if (e.data.type === 'records') {
          this.showRecords.records = Object.values(e.data.args[0]).map((v: any) => ({
            ...v,
            involvedNodes: v.publicKeys.map((pk: string) =>
              this.keys.findIndex(k => k.publicKey === pk)
            ).map((i: number) => `node#${i + 1}`)
          }));
        }

      }, false);


      worker.postMessage({ type: 'init', args: [index, this.keys, this.settings] });
      this.workerStates.push(new StateModel('0', 0));
      return worker;
    });
  }


}
