function main() {
  const textAdapter = new FontSizeAdapter({
    fontFamily: "sans-serif",
    _maxSize: innerHeight,
    _minSize: 40,
  });

  $("#input").addEventListener("input", (e) => {
    adaptText(e.target.value, textAdapter);
  });

  window.addEventListener("resize", () => {
    textAdapter.setMaxSize(innerHeight);
  });

  alert("tap the screen and type something");
}

window.addEventListener("DOMContentLoaded", main);

function adaptText(text, textAdapter) {
  let fontSize = textAdapter.computeTextFontSize(text);
  fontSize = fontSize * 0.9;
  $("#input").style.fontSize = fontSize + "px";
  $("#output").innerHTML = `<p style="font-size:${fontSize}px">${text}</p>`;
}

const $ = (selectors) => document.querySelector(selectors);
