import axios, { type AxiosRequestConfig } from "axios";
import type { RequestOpts } from "../types/utils";

const BASE_URL = "https://api.paystack.co";

export async function request<T>({ apiKey, method, path, data }: RequestOpts): Promise<T> {
   const config: AxiosRequestConfig = {
      method,
      url: `${BASE_URL}${path}`,
      headers: {
         Authorization: `Bearer ${apiKey}`,
         "Content-Type": "application/json",
      },
      ...(method === "GET" ? { params: data } : { data }),
   };
   
   try {
      const res = await axios(config);
      return res.data;
   } catch (error) {
      throw error;
   }
}