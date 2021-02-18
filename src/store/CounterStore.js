import {makeObservable, observable, action} from 'mobx';

//Defining state and making it observable using the makeObservable method.
//value that is being changed over time is marked as observable.
//method that operates(or changes) that state is marked as action.
class CounterStore {
  counter = 0;
  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action,
    });
  }
  increment(val) {
    this.counter = this.counter + val;
    console.log(this.counter);
  }
}

export default new CounterStore();
