// ===== Реєстрація =====
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const [username, email, password] = e.target.elements;
  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username.value, email: email.value, password: password.value })
  });
  const data = await res.text();
  alert(data);
});

// ===== Логін =====
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const [email, password] = e.target.elements;
  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value })
  });
  const data = await res.text();
  alert(data);
});

// ===== Завантаження відео =====
document.getElementById("uploadForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await fetch("/upload", { method: "POST", body: formData });
  const data = await res.text();
  alert(data);
});

// ===== Дописи у спільноті =====
document.getElementById("postForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.querySelector("textarea").value;
  const posts = document.getElementById("posts");
  const p = document.createElement("p");
  p.textContent = text;
  posts.appendChild(p);
  e.target.reset();
});

// ===== Лайки =====
document.querySelectorAll(".likeBtn")?.forEach(btn => {
  btn.addEventListener("click", () => {
    let count = btn.nextElementSibling;
    count.textContent = "Лайків: " + (parseInt(count.textContent.replace(/\D/g, "")) + 1);
  });
});
