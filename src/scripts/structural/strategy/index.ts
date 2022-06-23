import Banks from "../../../interfaces/banks";
import Logger from "../../../helpers/logger";

class UnionBank implements Banks {
  public pay(amount: number): void {
    console.log(
      `\nDescription: The amount of ${amount} has been processed by ${this.constructor}\nStatus: Paid`
    );
  }

  public refund(amount: number): void {
    console.log(
      `\nDescription: The amount of ${amount} has been processed by ${this.constructor}\nStatus: Refunded`
    );
  }
}

class Pnb implements Banks {
  public pay(amount: number): void {
    console.log(
      `\nDescription: The amount of ${amount} has been processed by ${this.constructor}\nStatus: Paid`
    );
  }

  public refund(amount: number): void {
    console.log(
      `\nDescription: The amount of ${amount} has been processed by ${this.constructor}\nStatus: Refunded`
    );
  }
}

class Payment {
  private name: string;
  private method: Banks;

  constructor(name: string, method: Banks) {
    this.name = name;
    this.method = method;
  }

  public pay(amount: number): void {
    Logger.log(`\nName: ${this.name}`);
    this.method.pay(amount);
  }

  public refund(amount: number): void {
    Logger.log(`\nName: ${this.name}`);
    this.method.refund(amount);
  }
}

export { Payment, Pnb, UnionBank };
