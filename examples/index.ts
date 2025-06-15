import { Paystack } from "../src";

const paystack = new Paystack({
   apiKey: process.env.PAYSTACK_API_KEY as string
})