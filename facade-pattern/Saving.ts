import { IAccount } from "./IAccount";

export class Saving implements IAccount {
  private accountNumber: string;

  constructor(private amount: number) {
    this.accountNumber = '1';
  }

  deposit(amount: number) {
    this.amount += amount;
  }

  withdraw(amount: number) {
    this.amount -= amount;
  }

  transfer(toAccount:IAccount, amount: number) {
    toAccount.deposit(amount);
    this.withdraw(amount);
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getAmount(){
    return this.amount;
  }
}
