import {Route} from "./Route";

export class Routes {

  private list: Route[];

  constructor(list: Route[]) {
    this.list = list;
  }

  public getList() {
    return this.list;
  }
}