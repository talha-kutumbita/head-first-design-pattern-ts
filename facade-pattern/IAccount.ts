export interface IAccount {
  deposit(amount: number);
  withdraw(amount: number);
  transfer(toAccount:IAccount, amount: number);
  getAccountNumber(): string;
}
