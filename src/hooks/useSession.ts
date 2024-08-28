import { useCallback } from "react";
import Cookies from "js-cookie";

const useSession = () => {
  // Get the entire session
  const getSession = (): { [key: string]: any } => {
    const sessionCookie = Cookies.get("session");
    return sessionCookie ? JSON.parse(sessionCookie) : {};
  };

  // Set a session value
  const setSessionValue = (key: string, value: any) => {
    const sessionData = getSession();
    sessionData[key] = value;
    Cookies.set("session", JSON.stringify(sessionData), { expires: 7 });
  };

  // Get a specific session value by key
  const getSessionValue = (key: string): any => {
    const sessionData = getSession();
    return sessionData[key];
  };

  // Remove a specific session value by key
  const removeSessionValue = (key: string) => {
    const sessionData = getSession();
    delete sessionData[key];
    Cookies.set("session", JSON.stringify(sessionData), { expires: 7 });
  };

  // Clear the entire session
  const clearSession = () => {
    Cookies.remove("session");
  };

  return {
    setSessionValue,
    getSessionValue,
    removeSessionValue,
    clearSession,
    getSession,
  };
};

export default useSession;
