import { Caretaker, Originator } from "./scripts/behavioral/memento";
import Logger from "./helpers/logger";

const start = () => {
  /* Instance */
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
};

start();
