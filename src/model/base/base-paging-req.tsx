export class BasePagingReq {
  sort: Sort = new Sort();
  paging: Paging = new Paging();
}

export class Sort {
  columns: Column[] = [new Column()];
}

export class Column {
  sort_by: string = '_id';
  order_by: 'asc' | 'desc' = 'desc';
}

export class Paging {
  page_no: number = 1;
  per_page: number = 10;
}
