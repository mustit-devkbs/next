import axios from "axios";
import { singleton } from "tsyringe";

@singleton()
export default class AxiosClient {
  public client = axios.create({
    timeout: 5000,
  });
}
