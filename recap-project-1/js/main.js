import { initBookmarks, initBookmarksPage } from "./bookmark.js";
import { initAnswerToggles } from "./answer-toggle.js";

const page = window.location.pathname;

if (
  page.includes("index.html") ||
  page === "/" ||
  page === "/recap-project-1/"
) {
  initBookmarks();
  initAnswerToggles();
}

if (page.includes("bookmarks.html")) {
  initBookmarksPage();
  initAnswerToggles();
}
