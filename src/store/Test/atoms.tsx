import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist({
    key: "page_data", // this key is using to store data in local storage
    storage: sessionStorage
});
export const TestStore = atom({
    key: "test",
    default: {},
    effects_UNSTABLE: [persistAtom],
  });