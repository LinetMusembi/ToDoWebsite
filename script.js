const addListButton = document.querySelector('.add-list');
const inputField = document.querySelector('.list');
const tasksContainer = document.querySelector('.tasks');
// Function to create a new task item
function createTaskItem(taskText) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('items');
  const taskParagraph = document.createElement('p');
  taskParagraph.textContent = taskText;
  const taskButtons = document.createElement('div');
  taskButtons.classList.add('items-btn');
  const editIcon = document.createElement('i');
  editIcon.classList.add('fas', 'fa-pen');
  editIcon.addEventListener('click', () => {
    // Replace task paragraph with editable input field
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskParagraph.textContent;
    editInput.classList.add('edit-input');
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        // Save the edited task
        taskParagraph.textContent = editInput.value;
        taskItem.removeChild(editInput);
      }
    });
    taskItem.replaceChild(editInput, taskParagraph);
    editInput.focus();
  });
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash');
  deleteIcon.addEventListener('click', () => {
    // Implement the delete functionality here
    console.log('Delete task:', taskText);
    tasksContainer.removeChild(taskItem);
  });
  // Append elements to the task item
  taskButtons.appendChild(editIcon);
  taskButtons.appendChild(deleteIcon);
  taskItem.appendChild(taskParagraph);
  taskItem.appendChild(taskButtons);
  return taskItem;
}
//Add event listener to the Add button
addListButton.addEventListener('click', () => {
  const taskText = inputField.value;
  if (taskText !== '') {
    // Create a new task item
    const taskItem = createTaskItem(taskText);
    // Append the task item to the tasks container
    tasksContainer.appendChild(taskItem);
    // Clear the input field
    inputField.value = '';
  }
});
//
document.getElementById('add-user').addEventListener('submit',async function(event){
  event.preventDefault();
  // let forData =new FormData(this);
  // console.log({FormData});
  let firstName=document.getElementById('first-name').value;
  let lastName=document.getElementById('last-name').value;
  let age=document.getElementById('age').value;
  let data={
      firstName:firstName,
      lastName:lastName,
      age:age,
  }
  console.log({data});
let result= await fetch('https://dummyjson.com/users/add',{
  method:'POST',
  headers:{
      'content-Type':'application/json'
  },
  body:JSON.stringify(data)
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result});
let success=document.getElementById('success');
result.id? success.innerHTML='user added successfully':success.innerHTMLHTML='user not added';
})