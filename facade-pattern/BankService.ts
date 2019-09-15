import { IAccount } from "./IAccount";
import { AccountType } from "./enum";
import { Saving } from "./Saving";
import { Investment } from "./Investment";

export class BankService {
  private accounts: {} = {};

  createAccount(type: AccountType, amount: number) {
    let account: IAccount;

    if (type === AccountType.SAVING) {
      account = new Saving(amount);
    }

    if (type === AccountType.INVESTMENT) {
      account = new Investment(amount);
    }

    if (!account) {
      throw new Error("Account Could not be created");
    }

    const accountNumber: string = account.getAccountNumber();
    this.accounts[accountNumber] = account;
    return accountNumber;
  }

  transferMoney(to: string, from: string, amount: number) {
    const toAccount: IAccount = this.accounts[to];
    const fromAccount: IAccount = this.accounts[from];

    fromAccount.transfer(toAccount, amount);
  }

  getAmount(accountNumber: string) {
    return this.accounts[accountNumber].getAmount();
  }
}
