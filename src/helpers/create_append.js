const CreateAppend = function (tag, text, parent) {
  const element = document.createElement(tag);
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

module.exports = CreateAppend;
