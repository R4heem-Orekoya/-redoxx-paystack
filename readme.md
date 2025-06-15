# @redoxx/paystack
A developer friendly SDK for Paystack, built with Typescript and Bun.

## Installation

```bash 
pnpm add @redoxx/paystack
```
## Usage
```typescript

import { Paystack } from "@redoxx/paystack"
const paystack = new Paystack({ apiKey: process.env.PAYSTACK_API_KEY as string })

const res = await paystack.transaction.initialize({
   amount: 50000,
   email: "redoxx@example.com"
})

```

## Methods
- transaction.initialize(data)

## Coming Soon
- transaction.verify(ref)
- customer.create(data)
- Webhook signature verification