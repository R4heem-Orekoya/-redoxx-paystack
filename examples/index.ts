import { Paystack } from "../src";

const paystack = new Paystack({
   apiKey: process.env.PAYSTACK_API_KEY as string
})

try {
   const res = await paystack.customer.get({
      customerCode: "CUS_x9k9hh7qo9wejcd"
   })

   console.dir(res, { depth: null });
} catch (error) {
   if (error instanceof Error) {
      console.dir(error, { depth: null });
   }
}