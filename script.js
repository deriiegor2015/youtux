let likes = 0;
const likeBtn = document.getElementById("likeBtn");
const likesCount = document.getElementById("likesCount");

likeBtn.addEventListener("click", () => {
  likes++;
  likesCount.textContent = "Лайків: " + likes;
});
