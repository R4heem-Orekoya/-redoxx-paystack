export class Paystack {
   private apiKey: string
   
   constructor({ apiKey }: { apiKey: string }) {
      if(apiKey) {
         throw new Error("Paystack API key not found!")
      }
      
      this.apiKey = apiKey
   }
}