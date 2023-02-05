document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //get the value of the task
    let test = document.querySelector("#new-task-description").value

    //take the string from the description and pass it into taskListFunction
    taskListFunction(test)
    form.reset();

  })
});

function taskListFunction(newTask) {
  let taskText = document.createElement("li")

  //Pass the string of the task description into the li element
  taskText.textContent = `${newTask} `

  let button = document.createElement("button")
  button.textContent = "x"
  button.addEventListener("click", (e) => {
    //When the 'x' is clicked on, the entire li element will be deleted.
    e.target.parentNode.remove();
  })


  //the button is appended to the li element. the li element becomes the parent node
  taskText.appendChild(button)
  document.getElementById("list").appendChild(taskText)
}