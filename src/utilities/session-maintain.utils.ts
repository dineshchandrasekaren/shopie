import { nanoid } from "@reduxjs/toolkit";

class SessionMaintain {
  private static readonly COOKIE_NAME = "sessionId";
  private static readonly COOKIE_EXPIRES_DAYS = 1; // Set cookie expiration in days

  // Set or update a session value by key
  public static setSession(key: string, value: any): void {
    let sessionId = this.getSessionId();
    let sessionData = {};

    if (sessionId) {
      // If a session ID exists, get the existing session data
      const cookie = this.getCookie(this.COOKIE_NAME);
      if (cookie) {
        const [, existingData] = cookie.split("|");
        sessionData = existingData ? JSON.parse(existingData) : {};
      }
    } else {
      // Generate a new session ID if it doesn't exist
      sessionId = nanoid();
    }

    // Update the session data with the new key-value pair
    const updatedData = { ...sessionData, [key]: value };
    this.setCookie(
      this.COOKIE_NAME,
      `${sessionId}|${JSON.stringify(updatedData)}`,
      this.COOKIE_EXPIRES_DAYS
    );
  }

  // Delete the session data and cookie
  public static deleteSession(): void {
    this.setCookie(this.COOKIE_NAME, "", -1); // Expire the cookie
  }

  // Get session data from the cookie
  public static getSession(): { [key: string]: any } | null {
    const cookie = this.getCookie(this.COOKIE_NAME);
    if (cookie) {
      const [, sessionData] = cookie.split("|");
      return sessionData ? JSON.parse(sessionData) : null;
    }
    return null;
  }

  // Helper method to set a cookie
  private static setCookie(name: string, value: string, days: number): void {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Helper method to get a cookie value
  private static getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
  }

  // Helper method to get the session ID from the cookie
  private static getSessionId(): string | null {
    const cookie = this.getCookie(this.COOKIE_NAME);
    if (cookie) {
      const [sessionId] = cookie.split("|");
      return sessionId || null;
    }
    return null;
  }
}

export default SessionMaintain;
