import { Caretaker, Originator } from "./scripts/behavioral/memento";
import Logger from "./helpers/logger";
import { Payment, Pnb, UnionBank } from "./scripts/structural/strategy";

class Run {
  public static memento() {
    const originator = new Originator("Hello my name is Edward!");
    const caretaker = new Caretaker(originator);

    caretaker.backup();
    originator.displayString();

    caretaker.backup();
    originator.displayString();

    caretaker.backup();
    originator.displayString();

    console.log("");
    caretaker.showHistory();

    Logger.log(`\n Client: Now, let's rollback badii!\n`);
    caretaker.undo();

    Logger.log(`\nClient: Once again!\n`);
    caretaker.undo();
  }

  public static strategy() {
    const unionBank = new Payment("Edward", new UnionBank());
    const pnb = new Payment("Juan", new Pnb());

    unionBank.pay(200);
    unionBank.refund(100);

    pnb.pay(200);
    pnb.refund(100);
  }
}

Run.strategy();
