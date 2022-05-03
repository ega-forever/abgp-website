export class SettingsModel {

  constructor(
    public count: number,
    public gossipInterval: { min: number, max: number }
  ) {
  }

}
