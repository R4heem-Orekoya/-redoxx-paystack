import type { CREATECUSTOMERDATA, DEACTIVATECUSTOMERAUTHDATA, LISTCUSTOMERDATA, SETCUSTOMERRISKACTIONDATA, UPDATECUSTOMERDATA, VERIFYCUSTOMERDATA } from "../types/customer";
import { request } from "../utils/request";

export async function createCustomer<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data: CREATECUSTOMERDATA
}) {
   return request<T>({
      apiKey,
      method: "POST",
      path: "/customer",
      data
   })
}

export async function listCustomers<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data?: LISTCUSTOMERDATA
}) {
   return request<T>({
      apiKey,
      method: "GET",
      path: "/customer",
      data
   })
}

export async function fetchCustomer<T>({
   apiKey,
   customerCode
}: {
   apiKey: string;
   customerCode: string
}) {
   return request<T>({
      apiKey,
      method: "GET",
      path: `/customer/${customerCode}`,
   })
}

export async function updateCustomer<T>({
   apiKey,
   customerCode,
   data
}: {
   apiKey: string;
   customerCode: string;
   data: UPDATECUSTOMERDATA;
}) {
   return request<T>({
      apiKey,
      method: "PUT",
      path: `/customer/${customerCode}`,
      data
   })
}

export async function verifyCustomer<T>({
   apiKey,
   customerCode,
   data
}: {
   apiKey: string;
   customerCode: string;
   data: VERIFYCUSTOMERDATA
}) {
   return request<T>({
      apiKey,
      method: "POST",
      path: `/customer/${customerCode}/identification`,
      data
   })
}

export async function setCustomerRiskAction<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data: SETCUSTOMERRISKACTIONDATA
}) {
   return request<T>({
      apiKey,
      method: "POST",
      path: `/customer/set_risk_action`,
      data
   })
}

export async function deactivateCustomerAuth<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data: DEACTIVATECUSTOMERAUTHDATA
}) {
   return request<T>({
      apiKey,
      method: "POST",
      path: `/customer/authorization/deactivate`,
      data
   })
}