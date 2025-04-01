import { BaseRes } from "../base/base-res";

export interface TestApiModelRes extends BaseRes {
    data: TestApiModel[];
}

export interface TestApiModel {
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
//     "id": 1,
//     "name": "Ramon Ondricka",
//     "company": "Bayer, Bradtke and Hickle",
//     "username": "Lydia_Kassulke87",
//     "email": "Kelvin.Nader@gmail.com",
//     "address": "3408 Mayert Crest",
//     "zip": "87808",
//     "state": "New Mexico",
//     "country": "Cocos (Keeling) Islands",
//     "phone": "644-868-0971",
//     "photo": "https://json-server.dev/ai-profiles/4.png"