import { BaseRes } from "./base-res";

export interface BasePagingRes extends BaseRes {
  paging: PagingRes;
}

export class PagingRes {
  page_no: number = 0;
  per_page: number = 0;
  total_item: number = 0;
  total_page: number = 0;
}
