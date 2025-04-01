
import HttpClient from "../http-client";
import ApiEndpoints from "./test-api-endpoints";
import { BaseRes } from "@/model/base/base-res";
import { ListOfAllObjects } from "@/model/Test/list-of-all-objects-res";
import { SingleObject } from "@/model/Test/single-object-res";


export default class TestService {
  host: string | undefined;
  httpClient: HttpClient;
  baseUrl: string;

  constructor() {
    this.httpClient = new HttpClient();
    this.baseUrl = process.env.NEXT_PUBLIC_TEST_API?.toString() || '';
  }
  async list(): Promise<ListOfAllObjects[]> {
    let path = this.baseUrl + ApiEndpoints.objects;
    return this.httpClient.getRequest(path).then((res) => {
      return res as ListOfAllObjects[];
    })
  }
  async detail(no: string): Promise<SingleObject> {
    let path = this.baseUrl + ApiEndpoints.objectDetail.replace(':id',no);
    return this.httpClient.getRequest(path).then((res) => {
      return res as SingleObject;
    })
  }

  // async delete(id: string): Promise<BaseRes> {
  //   let path = ApiEndpoints.amDashboard
  //   return this.httpClient.deleteRequest(path).then((res) => {
  //     return res as BaseRes;
  //   })
  // }

}
