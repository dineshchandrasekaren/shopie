import { useEffect } from "react";

const PageLoading = () => {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("mode") || "cupcake"
    );
  }, []);

  return (
    <div
      className="flex justify-center bg-base-100 dark:bg-base-100-dark min-h-full item-center overflow-hidden container"
      style={{ height: "calc(100vh - 5.2rem)" }}
    >
      <span className="loading loading-infinity-custom w-28 -z-0"></span>
    </div>
  );
};

export default PageLoading;
