import { Paystack } from "../src";

const paystack = new Paystack({
   apiKey: process.env.PAYSTACK_API_KEY as string
})

try {
   const res = await paystack.transaction.partialDebit({
      amount: 3000,
      authorization_code: "AUTH_n4m8jgkqd3",
      currency: "NGN",
      email: "customer@email.com"
   })
   console.dir(res, { depth: null });
} catch (error) {
   if(error instanceof Error) {
      console.dir(error, { depth: null });
   }
}