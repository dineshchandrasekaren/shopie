import { RootState } from "../redux/index";
export interface IShopDetails {
  logo: FormDataEntryValue | null;
  slug: string;
  about: string;
  name: string;
}

export type IUserState = RootState["userReducer"];
