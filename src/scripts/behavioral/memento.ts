/**
 * @Pattern Memento Pattern
 * @Desc Memento is a behioral design pattern that allows making snapshots of an object's state and restoring it in future.
 *
 */
import Memento from "../../interfaces/memento";
import Logger from "../../helpers/logger";

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    Logger.log(`Originator: Initial State ${state}`);
  }

  public displayString(): void {
    Logger.log(`Originator: Logging new state...`);
    this.state = Logger.generateRandomString();
    Logger.log(`Originator: and my state has changed to: ${this.state}`);
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    Logger.log(`Originator: My state has changed to: ${this.state}`);
  }
}

class ConcreteMemento implements Memento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substring(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    Logger.log(`\n Caretaker: Saving Originator's State...`);
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) return;

    const memento = this.mementos.pop();

    Logger.log(`Caretaker: Restoring state to ${memento?.getName()}`);
    this.originator.restore(memento);
  }

  public showHistory(): void {
    Logger.log(`Caretaker: Here's the list of mementos: `);
    for (const memento of this.mementos) console.log(memento.getName());
  }
}

export { Originator, Caretaker };
