document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-dropdown");
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
          console.log(button);
        this.classList.toggle("button-dropdown_active");
      });
    });
  });



