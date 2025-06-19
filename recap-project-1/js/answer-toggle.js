export function initAnswerToggles() {
  const buttons = document.querySelectorAll(".answer-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isVisible = !answer.hasAttribute("hidden");

      answer.hidden = isVisible;
      button.textContent = isVisible ? "Show answer" : "Hide answer";
      button.setAttribute("aria-expanded", String(!isVisible));
    });
  });
}
