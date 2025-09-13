// let heartCount = 0;
// let copyCount = 0;
// let coins = 100;

// const heartDisplay = document.getElementById("heart-count");
// const copyDisplay = document.getElementById("copy-count");
// const coinDisplay = document.getElementById("coin-count");
// const historyList = document.getElementById("history-list");
// const clearHistoryBtn = document.getElementById("clear-history");

// // Heart click
// document.querySelectorAll(".heart-icon").forEach((icon) => {
//   icon.addEventListener("click", () => {
//     heartCount++;
//     heartDisplay.innerText = heartCount;
//   });
// });

// // Copy Button click
// document.querySelectorAll(".copy-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const number = btn
//       .closest(".card")
//       .querySelector(".service-number").innerText;
//     navigator.clipboard.writeText(number);
//     alert(`Copied ${number} to clipboard`);
//     copyCount++;
//     copyDisplay.innerText = copyCount;
//   });
// });

// // Call Button click
// document.querySelectorAll(".call-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const card = btn.closest(".card");
//     const name = card.querySelector(".service-name").innerText;
//     const number = card.querySelector(".service-number").innerText;

//     if (coins < 20) {
//       alert("You don't have enough coins to make a call.");
//       return;
//     }

//     coins -= 20;
//     coinDisplay.innerText = coins;
//     alert(`Calling ${name} ${number}...`);

//     const time = new Date().toLocaleTimeString();

//     // History item style
//     const item = document.createElement("div");
//     item.className =
//       "flex items-center justify-between bg-[gray]/10 px-3 py-2 rounded-md shadow-sm";

//     const left = document.createElement("div");
//     left.className = "flex items-center gap-2";

//     const icon = document.createElement("i");
//     // icon.className = "fa-solid fa-phone text-green-600";

//     const text = document.createElement("div");
//     text.innerHTML = ` <p class="font-bold">${name}</p><p class="text-xs text-gray-600">${number}</p>`;

//     left.appendChild(icon);
//     left.appendChild(text);

//     const timeText = document.createElement("p");
//     timeText.className = "text-xs text-gray-500";
//     timeText.innerText = time;

//     item.appendChild(left);
//     item.appendChild(timeText);
//     historyList.prepend(item);
//   });
// });

// // Clear history section
// clearHistoryBtn.addEventListener("click", () => {
//   historyList.innerHTML = "";
// });
