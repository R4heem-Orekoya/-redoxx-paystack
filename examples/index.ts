import { Paystack } from "../src";

const paystack = new Paystack({
   apiKey: process.env.PAYSTACK_API_KEY as string
})

try {
   //@ts-ignore
   const res = await paystack.transaction.timeLine({
   })

   console.dir(res, { depth: null });
} catch (error) {
   if (error instanceof Error) {
      console.dir(error, { depth: null });
   }
}