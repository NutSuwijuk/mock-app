import { BaseRes } from "../base/base-res";

export interface SingleObjectRes extends BaseRes {
  data: SingleObject[];
}
export interface SingleObject {
  id: string;
  name: string;
  data: Data;
}

export interface Data {
  year: string;
  price: string;
  capacity: string;
  color: string;
  "CPU model": string;
  "Hard disk size": string;
}