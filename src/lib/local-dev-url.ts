/**
 * Default origin for local dev when NEXT_PUBLIC_SITE_URL is unset.
 * Port must match package.json `dev` / `start` / `serve` (see DEV_HOST in package.json).
 * Server binds 0.0.0.0 so both localhost and 127.0.0.1 work in the browser.
 */
export const LOCAL_DEV_PORT = 3847;
export const LOCAL_DEV_ORIGIN = `http://localhost:${LOCAL_DEV_PORT}`;
