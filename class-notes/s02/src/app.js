const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addToDoBtn");
const list = document.getElementById("todoList");
let tasks = [];
addBtn.addEventListener("click", () => {
    const newTask = input.value.trim(); // input string oldugu icin string methodlari cikti ve otomatik newTask te string sayiliyor.
    if (newTask) {
        tasks.push({ task: newTask, status: 0 /* Status.Active */ });
    }
});
