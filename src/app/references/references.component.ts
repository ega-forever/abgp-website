import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.sass']
})
export class ReferencesComponent implements OnInit {

  public references: { title: string, url: string }[] = [
    {
      title: 'Egor Zuev. Mokka: BFT consensus ',
      url: 'https://arxiv.org/ftp/arxiv/papers/1901/1901.08435.pdf'
    },
    {
      title: 'Diego Ongaro and John Ousterhout. In Search of an Understandable Consensus Algorithm ',
      url: 'https://raft.github.io/raft.pdf'
    },
    {
      title: 'Colin J. Fidge. Timestamps in Message-Passing Systems That Preserve the Partial Ordering',
      url: 'http://fileadmin.cs.lth.se/cs/Personal/Amr_Ergawy/dist-algos-papers/4.pdf'
    },
    {
      title: 'Denis Rystsov. CASPaxos: Replicated State Machines without logs',
      url: 'https://arxiv.org/pdf/1802.07000.pdf'
    },
    {
      title: 'Robbert van Renesse, Dan Dumitriu, Valient Gough, Chris Thomas. Efficient Reconciliation and\n' +
        'Flow Control for Anti-Entropy Protocols',
      url: 'http://www.cs.cornell.edu/home/rvr/papers/flowgossip.pdf'
    },
    {
      title: 'Daniel R. L. Brown. Recommended Elliptic Curve Domain Parameters',
      url: 'http://www.secg.org/sec2-v2.pdf '
    },
    {
      title: 'Nicolas T. Courtois, Pinar Emirdag, Filippo Valsorda. Private Key Recovery Combination Attacks:\n' +
        'On Extreme Fragility of Popular Bitcoin Key Management, Wallet and Cold Storage Solutions in\n' +
        'the presence of Poor RNG Events',
      url: 'https://eprint.iacr.org/2014/848.pdf'
    },
    {
      title: 'Diego Ongaro. CONSENSUS: BRIDGING THEORY AND PRACTICE.',
      url: 'https://ramcloud.stanford.edu/~ongaro/thesis.pdf'
    },
    {
      title: 'Introduction to Schnorr Signatures',
      url: 'https://tlu.tarilabs.com/cryptography/digital_signatures/introduction_schnorr_signatures.html#replay-attacks'
    },
    {
      title: 'Key Aggregation for Schnorr Signatures',
      url: 'https://blockstream.com/2018/01/23/en-musig-key-aggregation-schnorr-signatures/'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
