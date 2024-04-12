import { Button } from "./button/Button.js";
import { Header } from "./header/Header.js";
import { Value } from "./value/Value.js";
import { decreaseCount, increaseCount } from "../data/dataCounter.js";

export function renderCounter() {
  document.body.innerHTML = "";
  //Header
  const header = Header();
  //Value
  const value = Value();
  //Button
  const buttonInc = Button("inc", increaseCount);
  const buttonDec = Button("dec", decreaseCount);

  document.body.append(header, value, buttonInc, buttonDec);
}
