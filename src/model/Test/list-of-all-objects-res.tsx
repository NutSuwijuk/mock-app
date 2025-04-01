import { BaseRes } from "../base/base-res";

export interface ListOfAllObjectsRes extends BaseRes {
  data: ListOfAllObjects[];
}
export interface ListOfAllObjects {
  id: string;
  name: string;
  data: Data;
}

export interface Data {
  color: string;
  capacity: string
}