import { BaseRes } from "../base/base-res";

export interface testApiDetailModelRes extends BaseRes {
    data: TestApiDetailModel;
}

export interface TestApiDetailModel {
    state: string;
    id: number;
    name: string;
    company: string;
    username: string;
    email: string;
    address: string;
    zip: string;
    status: string;
    country: string;
    phone: string;
    photo: string;
}