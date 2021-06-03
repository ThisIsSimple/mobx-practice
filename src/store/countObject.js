import { observable } from "mobx";

const countObject = observable({
  number: 0,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export default countObject;