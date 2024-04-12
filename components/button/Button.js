import { increaseCount } from "../../data/dataCounter.js";

increaseCount;
export function Button(someTitle) {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = someTitle;
  buttonElement.addEventListener("click", increaseCount);
  return buttonElement;
}
