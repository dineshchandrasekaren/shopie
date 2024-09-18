import { createAction } from "@reduxjs/toolkit";
import { AuthAPIType } from "../../types/auth.type";

namespace AuthActions {
  export const openAuthModal = createAction(
    "auth/openAuthModal",
    (isOpen: boolean) => {
      return {
        payload: {
          isOpen,
        },
      };
    }
  );

  export const updateModalType = createAction(
    "auth/updateModalType",
    (type: AuthAPIType) => {
      return {
        payload: {
          type,
        },
      };
    }
  );
}

export default AuthActions;
