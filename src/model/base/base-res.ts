export class BaseRes {
  status_code: number | undefined;
  status_message: string = "An error occurred.";

  static failure (code: number, message: string) {
    let res = new BaseRes();
    res.status_code = code;
    res.status_message = message;
    return res;
  }
}
