document.addEventListener("DOMContentLoaded", function () {
   const inputBox = document.getElementById("input-box");
   const submitBtn = document.getElementById("submit-btn");
   const list = document.getElementById("list");

   submitBtn.addEventListener("click", function () {
      if (inputBox.value.trim() !== "") {
         const li = document.createElement("li");
         li.textContent = inputBox.value;
         list.appendChild(li);
         inputBox.value = "";
      }
   });

   list.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
         event.target.classList.toggle("checked");
      }
   });
});