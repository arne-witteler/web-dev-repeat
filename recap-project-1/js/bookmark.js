import { questions } from "./questions.js";

export function initBookmarksPage() {
  console.log("Gestartet.");
  const container = document.querySelector(".question_list");
  if (!container) return;

  container.innerHTML = ""; // leeren

  questions.forEach((q) => {
    const isBookmarked = localStorage.getItem(`bookmark-${q.id}`) === "true";
    if (!isBookmarked) return;

    const card = document.createElement("article");
    card.classList.add("question_card");
    card.dataset.id = q.id;

    card.innerHTML = `
      <i class="fa-solid fa-bookmark bookmark-icon" aria-label="bookmark"></i>
      <p>${q.question}</p>
      <button class="answer-button" aria-expanded="false">Show answer</button>
      <p class="answer" hidden>${q.answer}</p>
      <ul class="category_list">
        ${q.tags.map((tag) => `<li class="category">#${tag}</li>`).join("")}
      </ul>
    `;

    container.appendChild(card);
  });
}

export function initBookmarks() {
  const cards = document.querySelectorAll(".question_card");

  cards.forEach((card) => {
    const id = card.dataset.id;
    const icon = card.querySelector(".bookmark-icon");

    const isBookmarked = localStorage.getItem(`bookmark-${id}`) === "true";

    icon.classList.toggle("fa-solid", isBookmarked);
    icon.classList.toggle("fa-regular", !isBookmarked);

    icon.addEventListener("click", () => {
      const isNowBookmarked = icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular", !isNowBookmarked);
      localStorage.setItem(`bookmark-${id}`, isNowBookmarked);
    });
  });
}
