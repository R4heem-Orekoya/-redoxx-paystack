export type RequestOpts = {
   method: "GET" | "POST" | "PUT" | "DELETE";
   path: string;
   apiKey: string;
   data?: unknown
}

export type AtLeastOne<T> = {
   [K in keyof T]: Pick<T, K>
}[keyof T] & Partial<T>