const { env } = import.meta;
const envConfig = {
  serverUrl: env.VITE_SERVER_URL || "",
};

export default envConfig;
