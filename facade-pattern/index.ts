import { BankService } from "./BankService";
import { AccountType } from "./enum";
import { IAccount } from "./IAccount";

let myBankService = new BankService();
let mySavings:string = myBankService.createAccount(AccountType.SAVING, 1000);
let myInvestment:string = myBankService.createAccount(AccountType.INVESTMENT, 2000);

myBankService.transferMoney(mySavings, myInvestment, 500);

console.log(myBankService.getAmount(mySavings));