import type { Customer } from "./customer"

export interface TRANSACTIONINITDATA {
   amount: number;
   email: string;
   currency?: Currency;
   reference?: string;
   callback_url?: string;
   plan?: string;
   invoice_limit?: number;
   metadata?: Record<string, any>,
   channels?: Channels;
   split_code?: string;
   subaccount?: string;
   transaction_charge?: number;
   bearer?: string;
};

export interface TRANSACTIONLISTFILTER {
   perPage: number;
   page: number;
   customer?: number;
   terminalid?: string;
   status?: "success" | "failed" | "abandoned";
   from?: string;
   to?: string;
   amount?: number
};

export interface TRANSACTIONCHARGEAUTH {
   amount: number;
   email: string;
   authorization_code: string;
   reference?: string;
   currency?: Currency;
   metadata?: Record<string, any>;
   channels?: Channels;
   subaccount?: string;
   transaction_charge?: number;
   bearer?: string;
   queue?: true
};

export interface TRANSACTIONTOTAL {
   perPage: number;
   page: number;
   from?: number;
   to?: number;
};

export interface TRANSACTIONEXPORT {
   perPage: number;
   page: number;
   from?: number;
   to?: number;
   customer?: number;
   status?: string;
   currency?: Currency;
   amount?: number;
   settled?: boolean;
   settlement?: number;
   payment_page?: number;
};

export interface TRANSACTIONPARTIALDEBIT {
   authorization_code: string;
   currency: Currency;
   amount: number;
   email: string;
   reference?: string;
   at_least?: string;
}

export interface TRANSACTIONINITRESPONSE {
   status: boolean;
   message: string;
   data: {
      authorization_url: string,
      access_code: string,
      reference: string
   }
};

export interface TRANSACTIONVERIFICATIONRESPONSE {
   status: boolean;
   message: string;
   data: Transaction;
};

export interface TRANSACTIONLISTRESPONSE {
   status: boolean;
   message: string;
   data: Transaction[];
   meta: {
      total: number,
      total_volume: number,
      skipped: number,
      perPage: number,
      page: number,
      pageCount: number
   };
};

export interface TRANSACTIONRESPONSE {
   status: boolean;
   message: string;
   data: Transaction;
}

export interface TRANSACTIONCHARGERESPONSE {
   status: boolean;
   message: string;
   data: {
      id: number;
      amount: number;
      currency: string;
      transaction_date: string;
      status: string;
      reference: string;
      domain: string;
      metadata: any;
      gateway_response: string;
      message: string | null;
      channel: string;
      ip_address: string | null;
      log: TransactionLog | null;
      fees: number;
      authorization: Authorization;
      customer: Customer;
      plan: any;
   }
}

export interface TRANSACTIONTIMELINERESPONSE {
   status: boolean;
   message: string;
   data: {
      start_time: number;
      time_spent: number;
      attempts: number;
      errors: number;
      success: boolean;
      mobile: boolean;
      input: number;
      history: Array<{
         type: "action" | "error" | "auth" | "success";
         message: string;
         time: number;
      }>;
   };
};

export interface TRANSACTIONTOTALSRESPONSE {
   status: boolean;
   message: string;
   data: {
      total_transactions: number;
      total_volume: number;
      total_volume_by_currency: Array<{
         currency: string;
         amount: number;
      }>;
      pending_transfers: number;
      pending_transfers_by_currency: Array<{
         currency: string;
         amount: number;
      }>;
   };
};

export type TRANSACTIONEXPORTRESPONSE = {
   status: boolean;
   message: string;
   data: {
      path: string;
      expiresAt: string;
   };
};

export type TRANSACTIONPARTIALDEBITRESPONSE = {
   status: boolean;
   message: string;
   data: {
      amount: number;
      currency: string;
      transaction_date: string;
      status: string;
      reference: string;
      domain: string;
      metadata: string | Record<string, any>;
      gateway_response: string;
      message: string | null;
      channel: string;
      ip_address: string | null;
      log: TransactionLog | null; 
      fees: number;
      authorization: {
         authorization_code: string;
         bin: string;
         last4: string;
         exp_month: string;
         exp_year: string;
         channel: string;
         card_type: string;
         bank: string;
         country_code: string;
         brand: string;
         reusable: boolean;
         signature: string;
         account_name: string | null;
      };
      customer: {
         id: number;
         first_name: string | null;
         last_name: string | null;
         email: string;
         customer_code: string;
         phone: string | null;
         metadata: {
            custom_fields?: {
               display_name: string;
               variable_name: string;
               value: string;
            }[];
         } | null;
         risk_action: string;
         international_format_phone: string | null;
      };
      plan: number | null;
      requested_amount: number;
      id: number;
   };
};

export interface Transaction {
   id: number;
   domain: string;
   status: string;
   reference: string;
   receipt_number?: string | null;
   amount: number;
   message: string | null;
   gateway_response: string;
   paid_at: string | null;
   created_at: string;
   channel: Channels[number];
   currency: string;
   ip_address: string;
   metadata: Record<string, any> | string | null;
   log: TransactionLog | null;
   fees: number | null;
   fees_split: Record<string, any> | null;
   customer: Customer;
   authorization: Authorization;
   plan: Record<string, any> | null;
   split: Record<string, any> | null;
   subaccount: Record<string, any> | null;
   order_id: string | null;
   paidAt: string | null;
   createdAt: string;
   requested_amount: number;
   source: {
      source: string;
      type: string;
      identifier: string | null;
      entry_point: string;
   } | null;
   connect: Record<string, any> | null;
   pos_transaction_data: Record<string, any> | null;
   fees_breakdown?: any;
   transaction_date?: string;
   plan_object?: Record<string, any>;
};

export interface TransactionLog {
   start_time: number;
   time_spent: number;
   attempts: number;
   errors: number;
   success: boolean;
   mobile: boolean;
   input: unknown[];
   history: {
      type: string;
      message: string;
      time: number;
   }[];
}

export interface Authorization {
   authorization_code: string | null;
   bin: string | null;
   last4: string | null;
   exp_month: string | null;
   exp_year: string | null;
   channel: string | null;
   card_type: string | null;
   bank: string | null;
   country_code: string | null;
   brand: string | null;
   reusable: boolean;
   signature: string | null;
   account_name: string | null;
}

export type Channels = ["card", "bank", "apple_pay", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
export type Currency = "NGN" | "USD" | "GHS" | "ZAR" | "KES"