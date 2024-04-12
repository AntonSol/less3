import { renderCounter } from "../components/renderCounter.js";

export const data = {
  title: "Counter",
  count: 0,
};

setInterval(function () {
  data.count++;
  renderCounter(data);
}, 1000);
