import { createCustomer, deactivateCustomerAuth, fetchCustomer, listCustomers, setCustomerRiskAction, updateCustomer, verifyCustomer } from "./modules/customer";
import {
   chargeAuth,
   exportTransaction,
   getTransaction,
   initializeTransaction,
   listTransactions,
   transactionPartialDebit,
   transactionTimeline,
   transactionTotal,
   verifyTransaction
} from "./modules/transaction";
import type {
   CREATECUSTOMERDATA,
   CREATECUSTOMERRESPONSE,
   DEACTIVATECUSTOMERAUTHDATA,
   DEACTIVATECUSTOMERAUTHRESPONSE,
   FETCHCUSTOMERRESPONSE,
   LISTCUSTOMERDATA,
   LISTCUSTOMERRESPONSE,
   SETCUSTOMERRISKACTIONDATA,
   SETCUSTOMERRISKACTIONRESPONSE,
   UPDATECUSTOMERDATA,
   UPDATECUSTOMERRESPONSE,
   VERIFYCUSTOMERDATA,
   VERIFYCUSTOMERRESPONSE
} from "./types/customer";
import {
   type TRANSACTIONCHARGERESPONSE,
   type TRANSACTIONCHARGEAUTH,
   type TRANSACTIONINITDATA,
   type TRANSACTIONINITRESPONSE,
   type TRANSACTIONLISTFILTER,
   type TRANSACTIONLISTRESPONSE,
   type TRANSACTIONRESPONSE,
   type TRANSACTIONVERIFICATIONRESPONSE,
   type TRANSACTIONTIMELINERESPONSE,
   type TRANSACTIONTOTAL,
   type TRANSACTIONTOTALSRESPONSE,
   type TRANSACTIONEXPORT,
   type TRANSACTIONEXPORTRESPONSE,
   type TRANSACTIONPARTIALDEBIT,
   type TRANSACTIONPARTIALDEBITRESPONSE
} from "./types/transaction";
import type { TimelineOptionsWithId, TimelineOptionsWithReference } from "./types/utils";

export class Paystack {
   private apiKey: string

   constructor({ apiKey }: { apiKey: string }) {
      if (!apiKey) {
         throw new Error("Paystack API key not found!")
      }

      this.apiKey = apiKey
   }

   transaction = {
      initialize: (data: TRANSACTIONINITDATA) => initializeTransaction<TRANSACTIONINITRESPONSE | null>({ apiKey: this.apiKey, data }),
      verify: (reference: string) => verifyTransaction<TRANSACTIONVERIFICATIONRESPONSE | null>({ apiKey: this.apiKey, reference }),
      list: (filter?: TRANSACTIONLISTFILTER) => listTransactions<TRANSACTIONLISTRESPONSE | null>({ apiKey: this.apiKey, filter }),
      get: ({ transactionId }: { transactionId: number }) => getTransaction<TRANSACTIONRESPONSE | null>({ apiKey: this.apiKey, transactionId }),
      chargeAuth: (data: TRANSACTIONCHARGEAUTH) => chargeAuth<TRANSACTIONCHARGERESPONSE | null>({ apiKey: this.apiKey, data }),
      timeLine: (options: TimelineOptionsWithReference | TimelineOptionsWithId) => {
         if (options.id) {
            return transactionTimeline<TRANSACTIONTIMELINERESPONSE | null>({
               apiKey: this.apiKey,
               id: options.id,
            })
         } else if (options.reference) {
            return transactionTimeline<TRANSACTIONTIMELINERESPONSE | null>({
               apiKey: this.apiKey,
               reference: options.reference,
            })
         } else {
            return Promise.reject(
               new Error(
                  "Invalid options: Either 'id' or 'reference' must be provided."
               )
            );
         }
      },
      total: (data?: TRANSACTIONTOTAL) => transactionTotal<TRANSACTIONTOTALSRESPONSE | null>({ apiKey: this.apiKey, data }),
      export: (data?: TRANSACTIONEXPORT) => exportTransaction<TRANSACTIONEXPORTRESPONSE | null>({ apiKey: this.apiKey, data }),
      partialDebit: (data: TRANSACTIONPARTIALDEBIT) => transactionPartialDebit<TRANSACTIONPARTIALDEBITRESPONSE | null>({ apiKey: this.apiKey, data })
   }

   customer = {
      create: (data: CREATECUSTOMERDATA) => createCustomer<CREATECUSTOMERRESPONSE | null>({ apiKey: this.apiKey, data }),
      list: (data?: LISTCUSTOMERDATA) => listCustomers<LISTCUSTOMERRESPONSE | null>({ apiKey: this.apiKey, data }),
      get: ({ customerCode }: { customerCode: string }) => fetchCustomer<FETCHCUSTOMERRESPONSE | null>({ apiKey: this.apiKey, customerCode }),
      update: ({ customerCode, data }: { customerCode: string, data: UPDATECUSTOMERDATA }) => updateCustomer<UPDATECUSTOMERRESPONSE | null>({ apiKey: this.apiKey, customerCode, data }),
      verify: ({ customerCode, data }: { customerCode: string; data: VERIFYCUSTOMERDATA }) => verifyCustomer<VERIFYCUSTOMERRESPONSE | null>({ apiKey: this.apiKey, customerCode, data }),
      setRiskAction: (data: SETCUSTOMERRISKACTIONDATA) => setCustomerRiskAction<SETCUSTOMERRISKACTIONRESPONSE | null>({ apiKey: this.apiKey, data }),
      deactivateAuth: (data: DEACTIVATECUSTOMERAUTHDATA) => deactivateCustomerAuth<DEACTIVATECUSTOMERAUTHRESPONSE | null>({ apiKey: this.apiKey, data })
   }
}