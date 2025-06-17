# @redoxx/paystack

A developer-friendly SDK for [Paystack](https://paystack.com/docs/api), built with **TypeScript** and powered by **Bun**.

> ⚠️ Currently in early development – breaking changes may occur.

## Installation

```bash 
pnpm add @redoxx/paystack
# or
bun add @redoxx/paystack
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

## 📦 Available Methods

- Transaction
   - transaction.initialize()
   - transaction.verify()
   - transaction.list()
   - transaction.get()
   - transaction.chargeAuth()
   - transaction.timeLine()
   - transaction.total()
   - transaction.export()
   - transaction.partialDebit()

- Customer
   - customer.create()
   - customer.list()
   - customer.get()
   - customer.update()
   - customer.verify()
   - customer.setRiskAction()
   - customer.deactivateAuth()

## 🧪 Coming Soon

- ✅ Webhook signature verification

- 🛠️ Plans, Subscriptions, Terminals, Products

- 🧾 Payment Pages & Requests (low priority)

- 🔍 Verification, Refunds, Disputes, Charges

- 🔁 Integration & Bulk Charges

## 📝 TODO

- Transaction endpoint still need testing and some return types might not be correct
- Test customer.verify endpoint manually
- Add jsDoc for all endpoints
- Plans endpoints
- Subscription endpoints
- Terminal endpoints
- Products endpoints
- Payment Pages endpoints (low priority)
- Payment Requests endpoints (low priority)
- Miscellaneous endpoints
- Verification endpoints
- Refunds endpoints
- Disputes endpoints
- Charge endpoints (low priority)
- Integration endpoints
- Bulk Charges endpoints

### 🙌 Contributing

This SDK is currently in active development. Contributions, feedback, and issues are welcome!