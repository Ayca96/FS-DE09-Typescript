const input = document.getElementById("todoInput") as HTMLInputElement;

const addBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;

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


const updateList = () =>{

list.innerHTML = "";
tasks.forEach((item, index) =>{
const li = document.createElement("li");
li.textContent = item.task;
li.classList.add(item.status === Status.Completed ? "completed" : "active")
li.addEventListener ("click", ()=> toggleToDo(index))
list.appendChild(li)

})

}


addBtn.addEventListener("click", ()=>{
  const newTask = input.value.trim() // input string oldugu icin string methodlari cikti ve otomatik newTask te string sayiliyor.
  if(newTask){
    tasks.push({task:newTask, status:Status.Active})
    console.log(tasks);
    updateList()
    input.value ="";
    
  }
})

const toggleToDo =(index:number) =>{
tasks[index].status = tasks[index].status=== Status.Active ? Status.Completed : Status.Active
updateList()
}