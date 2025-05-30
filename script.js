

  const colorPicker = document.querySelector("input");
  const colorOutput = document.querySelector("label");

  colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    colorOutput.innerText = color;
    navigator.clipboard.writeText(color)
    document.body.style.backgroundColor = color;
  });

