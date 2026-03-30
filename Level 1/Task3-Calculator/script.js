const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
  });
});
