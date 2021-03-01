const accessibleListeners = () => {
    /* Accessibilty */
    document.body.addEventListener("click", () => {
      document.body.classList.remove("acc");
      localStorage.setItem("isAccessible", false);
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.keyCode == 9) {
        document.body.classList.add("acc");
        localStorage.setItem("isAccessible", true);
      }
    });
}

export default accessibleListeners;