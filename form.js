let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("========= Form Submission =========");
  console.log("Name:", form.elements.name.value);
  console.log("Email:", form.elements.email.value);
  console.log("Message:", form.elements.message.value);
});
