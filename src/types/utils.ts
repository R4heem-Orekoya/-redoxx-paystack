export type RequestOpts = {
   method: "GET" | "POST" | "PUT" | "DELETE";
   path: string;
   apiKey: string;
   data?: unknown
}

export type TimelineOptionsWithReference = {
   id?: never;
   reference: string;
}

export type TimelineOptionsWithId = {
   id: number;
   reference?: never;
}

export type AtLeastOne<T> = {
   [K in keyof T]: Pick<T, K>
}[keyof T] & Partial<T>