import { ListOfAllObjects } from "@/model/Test/list-of-all-objects-res";
import HttpClient from "../http-client";
import ApiEndpoints from "../Test/test-api-endpoints";
import { SingleObject } from "@/model/Test/single-object-res";
import { TestApiModel } from "@/model/TestAPI/testApiModelRes";
import { TestApiDetailModel } from "@/model/TestAPI/testApiDetailModelRes";
import NutApiEndpoints from "./TestAPI-endpoints";

export default class TestAPI {
    host: string | undefined; //กำหนด type
    httpClient : HttpClient;
    baseUrl : string;

    constructor() {
        this.httpClient = new HttpClient();
        this.baseUrl  = process.env.NEXT_PUBLIC_TEST_API2?.toString() || '';
    }
    async list(): Promise<TestApiModel[]> {
        let path = this.baseUrl;
        return this.httpClient.getRequest(path).then((res) => {
            return res as TestApiModel[];
        })
    }
    async listDetail(no: string): Promise<TestApiDetailModel> {
        let path = this.baseUrl + NutApiEndpoints.userId.replace(':id',no.toString());
        return this.httpClient.getRequest(path).then((res) => {
            return res as TestApiDetailModel;
        })
    }
    // async detailAPI(): Promise<testApiModel[]> {
    //     let path = this.baseUrl;
    //     return this.
    // }
}