export type RequestOpts = {
   method: "GET" | "POST" | "PUT" | "DELETE";
   path: string;
   apiKey: string;
   data?: unknown
}