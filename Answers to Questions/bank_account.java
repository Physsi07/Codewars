class BankAccount{

   string client_Name;
   int client_ID;
   int balance = 0;

   public BankAccount(int client_ID, string client_Name){
      this.client_ID = client_ID;
      this.client_Name = clientName;
   }

   // FUNCTION THAT DEPOSITS MONEY TO THE ACCOUNT
   public void deposit(int amount) {
      if(amount <= 0 ) return "Invalid entry";
      else {
         balance += amount;
      }
   }

   // FUNCTION THAT WITHDRAW MONEY FROM THE ACCOUTN
   public void withdraw(int amount){
      if(amount > balance) return "You don't have sufficient money in your avvount";
      else{
         balance -= amount;
      }
   }
}
