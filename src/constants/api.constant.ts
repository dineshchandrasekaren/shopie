const settings = {
  auth: {
    signup: "/auth/signup",
    login: "/auth/login",
    forgotPassword: "/auth/forgotPassword",
    logout: "/auth/logout",
    resetPassword: "/auth/password/reset/",
    signupToken: "/auth/validate-token/verify/",
    resetToken: "/auth/validate-token/password/",
  },
  user: {
    saveShopDetails: "/shop/saveShopDetails",
  },
} as const;

export default settings;
