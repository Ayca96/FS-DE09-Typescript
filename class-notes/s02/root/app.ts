const input = document.getElementById("todoInput") as HTMLInputElement;

const addBtn = document.getElementById("addToDoBtn") as HTMLButtonElement;

const list = document.getElementById("todoList") as HTMLUListElement;

// {
//   task:"asda",
//   status:0-1,

// }

const enum Status {
  Active,  // 0
  Completed, // 1
}
interface ITask{

  task:string;
  status:Status
}

let tasks: ITask[] = [];

addBtn.addEventListener("click", ()=>{
  const newTask = input.value.trim() // input string oldugu icin string methodlari cikti ve otomatik newTask te string sayiliyor.
  if(newTask){
    tasks.push({task:newTask, status:Status.Active})
  }
})

