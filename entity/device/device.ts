export enum OS {
  iOS = "iOS",
  aOS = "aOS",
  WEB = "web",
}
export default class Device {
  public os: OS = OS.WEB;
  public version?: string;

  public isApp() {
    return this.os !== "web";
  }
}
