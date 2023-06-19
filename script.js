const addListButton = document.querySelector('.add-list');
const inputField = document.querySelector('.list');
const tasksContainer = document.querySelector('.tasks');

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
  
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskParagraph.textContent;
    editInput.classList.add('edit-input');
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
     
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

    console.log('Delete task:', taskText);
    tasksContainer.removeChild(taskItem);
  });

  taskButtons.appendChild(editIcon);
  taskButtons.appendChild(deleteIcon);
  taskItem.appendChild(taskParagraph);
  taskItem.appendChild(taskButtons);
  return taskItem;
}

addListButton.addEventListener('click', () => {
  const taskText = inputField.value;
  if (taskText !== '') {

    const taskItem = createTaskItem(taskText);

    tasksContainer.appendChild(taskItem);
  
    inputField.value = '';
  }
});
//
document.getElementById('add-user').addEventListener('submit',async function(event){
  event.preventDefault();


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