//import { renderCounter } from "../components/renderCounter.js";

export const data = {
  title: "Counter",
  count: 0,
};

// setInterval(function () {
//   data.count++;
//   renderCounter(data);
// }, 1000);
let changeDataCallBack = function () {
  alert("nan");
};
export function setChangeDataCallBack(newCallBack) {
  changeDataCallBack = newCallBack;
}
export function increaseCount() {
  data.count++;
  //renderCounter(data);
  changeDataCallBack();
}
