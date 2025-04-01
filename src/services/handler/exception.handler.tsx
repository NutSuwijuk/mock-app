import { BaseRes } from "../../model/base/base-res";

export default class ExceptionHandler {
  constructor(status: number, message?: string) {
    if (status === 401) {
      return BaseRes.failure(401, "Sessionexpire");
    }
    if (status === 404) {
      return BaseRes.failure(404, "Not found");
    }
    if (status === 413) {
      return BaseRes.failure(413, "Content too large");
    }
    if (status === 500) {
      return BaseRes.failure(500, "Internal server error.");
    }
    if (status === 504) {
      return BaseRes.failure(504, "Gateway timeout.");
    }
  }
}
