import { AuthRole } from "./auth.type";

export interface ICallback {
  next: () => void;
}

export type ITheme = "dark" | "cupcake";

export interface ILayoutType {
  type: AuthRole | "home";
}

export interface ICommonError {
  error: { success: boolean; message: string };
}
