import { Button } from "./button/Button.js";
import { Header } from "./header/Header.js";
import { Value } from "./value/Value.js";
export function renderCounter() {
  document.body.innerHTML = "";
  //Header
  const header = Header();
  //Value
  const value = Value();
  //Button
  const button = Button("inc");
  document.body.append(header, value, button);
}
