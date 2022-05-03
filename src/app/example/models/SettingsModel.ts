export class SettingsModel {

  constructor(
    public count: number,
    public connectionsCount: number,
    public gossipInterval: { min: number, max: number }
  ) {
  }

}
