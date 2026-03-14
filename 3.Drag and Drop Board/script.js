const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

let draggedCard;
cards.forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    draggedCard = e.target;
  });
  card.addEventListener("dragend", () => {
    draggedCard = null;
  });
});
// console.log(cards);

lists.forEach((itemList) => {
  itemList.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  itemList.addEventListener("dragenter", () => {
    itemList.classList.add("over");
  });

  itemList.addEventListener("dragleave", () => {
    itemList.classList.remove("over");
  });
  itemList.addEventListener("drop", () => {
    itemList.appendChild(draggedCard);
    itemList.classList.remove("over");
  });
});
