import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

/* Using default in-memory storage strategy as API desn't specify
 * cache policies and could be sending wrong headers.
 * With this approach, every time the users refreshes the browser,
 * the cache will be lost and request will happen again when needed.
 */
export const apiCache = setupCache(axios.create());
