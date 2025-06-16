import type { TRANSACTIONCHARGEAUTH, TRANSACTIONEXPORT, TRANSACTIONINITDATA, TRANSACTIONLISTFILTER, TRANSACTIONPARTIALDEBIT, TRANSACTIONTOTAL } from "../types/transaction";
import { request } from "../utils/request";

export async function initializeTransaction<T>({
   apiKey,
   data
}: {
   apiKey: string,
   data: TRANSACTIONINITDATA
}
) {
   return request<T>({
      method: "POST",
      apiKey,
      path: "/transaction/initialize",
      data
   });
}

export async function verifyTransaction<T>({
   apiKey,
   reference
}: {
   apiKey: string;
   reference: string;
}) {
   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction/verify/${reference}`,
   })
}

export async function listTransactions<T>({
   apiKey,
   filter
}: {
   apiKey: string
   filter?: TRANSACTIONLISTFILTER
}) {
   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction`,
      data: filter
   })
}

export async function getTransaction<T>({
   apiKey,
   transactionId
}: {
   apiKey: string;
   transactionId: number
}) {
   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction/${transactionId}`,
   })
}

export async function chargeAuth<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data: TRANSACTIONCHARGEAUTH
}) {
   return request<T>({
      method: "POST",
      apiKey,
      path: "/transaction/charge_authorization",
      data
   });
}

export async function transactionTimeline<T>({
   apiKey, id, reference
}: { apiKey: string; id: number; reference?: never }
   | { apiKey: string; reference: string; id?: never }
) {
   const identifier = id ?? reference;

   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction/timeline/${identifier}`,
   });
}

export async function transactionTotal<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data?: TRANSACTIONTOTAL
}) {
   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction/totals`,
      data
   });
}

export async function exportTransaction<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data?: TRANSACTIONEXPORT
}) {
   return request<T>({
      method: "GET",
      apiKey,
      path: `/transaction/export`,
      data
   });
}

export async function transactionPartialDebit<T>({
   apiKey,
   data
}: {
   apiKey: string;
   data: TRANSACTIONPARTIALDEBIT
}) {
   return request<T>({
      method: "POST",
      apiKey,
      path: `/transaction/partial_debit`,
      data
   });
}