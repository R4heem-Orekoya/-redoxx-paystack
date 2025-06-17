import type { Authorization, Transaction } from "./transaction";
import type { AtLeastOne } from "./utils";

export interface CREATECUSTOMERDATA {
   email: string;
   first_name: string;
   last_name: string;
   phone?: string;
   metadata?: Record<string, unknown>
};

export interface LISTCUSTOMERDATA {
   perPage: number;
   page: number;
   from?: string;
   to?: string;
};

export type UPDATECUSTOMERDATA = AtLeastOne<{
   first_name: string;
   last_name: string;
   phone: string;
   metadata: Record<string, unknown>
}>

export type VERIFYCUSTOMERDATA = BankAccountIdentification;

export interface SETCUSTOMERRISKACTIONDATA {
   /** 
    * Paystack Customer Code
    */
   customer: string;
   risk_action: Risk_Actions[number]
}

export interface DEACTIVATECUSTOMERAUTHDATA {
   authorization_code: string;
}

export interface CREATECUSTOMERRESPONSE {
   status: boolean;
   message: string;
   data: {
      transactions: Transaction[];
      subscriptions: any[];
      authorizations: Authorization[];
      email: string;
      first_name: string;
      last_name: string;
      phone: string;
      integration: number;
      domain: string;
      metadata: Record<string, unknown>;
      customer_code: string;
      risk_action: string;
      id: number;
      createdAt: string;
      updatedAt: string;
      identified: boolean;
      identifications: unknown;
   };
};

export interface LISTCUSTOMERRESPONSE {
   status: boolean,
   message: string,
   data: Customer[],
   meta: {
      total: number,
      skipped: number,
      perPage: number,
      page: number,
      pageCount: number
   }
}

export interface FETCHCUSTOMERRESPONSE {
   status: boolean;
   message: string;
   data: Customer & {
      transactions: Transaction[];
      subscriptions: any[];
      authorizations: Authorization[];
      created_at: string;
      updated_at: string;
      identified: boolean;
      identifications: Array<unknown> | null;
      total_transactions: number;
      total_transaction_value: any[];
      dedicated_account: null | Record<string, any>;
      dedicated_accounts: any[];
   }
}

export interface UPDATECUSTOMERRESPONSE {
   status: boolean;
   message: string;
   data: Customer & {
      domain: string;
      identified: boolean;
      identifications: Array<unknown> | null;
   }
}

export interface VERIFYCUSTOMERRESPONSE {
   status: boolean;
   message: string;
}

export interface SETCUSTOMERRISKACTIONRESPONSE {
   status: boolean;
   message: string;
   data: Customer;
}

export interface DEACTIVATECUSTOMERAUTHRESPONSE {
   status: boolean;
   message: string;
}

export interface Customer {
   id: number;
   integration: number | undefined;
   first_name: string | null;
   last_name: string | null;
   email: string;
   customer_code: string;
   phone: string | null;
   metadata: Record<string, unknown> | null;
   risk_action: Risk_Actions[number];
   international_format_phone?: string | null;
   createdAt: string | undefined;
   updatedAt: string | undefined;
}

interface BaseCustomerIdentification {
   /** Customer's first name */
   first_name: string;

   /** Customer's last name */
   last_name: string;
   
   middle_name?: string;

   /** Customer's identification number (e.g. BVN or national ID) */
   value: string;

   /** 2-letter ISO country code of the identification issuer (e.g. "NG" for Nigeria) */
   country: string;

   /** Customer's Bank Verification Number */
   bvn: string;
}

interface BankAccountIdentification extends BaseCustomerIdentification {
   type: "bank_account";

   /**
    * Bank code of the customer's bank.
    * You can get this from Paystack's "List Banks" endpoint.
   */
   bank_code: string;

   /**
    * Customer's bank account number.
   */
   account_number: string;
}

type Risk_Actions = ["default", "allow", "deny"]