import { FROMID } from "./auth.enums";

export default class Auth {
  public fromId: FROMID = FROMID.WEB;
  public isLoggedIn: boolean = false;
  public version: string = "v1.0";
  public userId: string = "";
  public gradeLevel: number = 1;

  public isAdmin() {
    return this.fromId === FROMID.ADMIN;
  }
}
