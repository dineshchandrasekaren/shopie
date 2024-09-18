const env = import.meta.env;
const envConfig = {
  serverUrl: env.VITE_SERVER_URL || "",
};

export default envConfig;
