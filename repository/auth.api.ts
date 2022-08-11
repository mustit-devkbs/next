import AxiosClient from "./AxiosClient";
import { singleton } from "tsyringe";

@singleton()
export default class AuthApi {
  private readonly client: AxiosClient;

  public constructor(client: AxiosClient) {
    this.client = client;
  }
}
