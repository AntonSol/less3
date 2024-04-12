export function Button(someTitle, someClickHandler) {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = someTitle;
  buttonElement.addEventListener("click", someClickHandler);
  return buttonElement;
}
