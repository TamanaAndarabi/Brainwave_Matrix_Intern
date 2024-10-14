const addBtn = document.querySelector('.input-todo button');
const inputBox = document.querySelector('.input-todo input');
const todoList = document.querySelector('.todo-list');
const removeBtn = document.querySelector('.info-box button');

addBtn.addEventListener('click', function(){
   let userEnteredValue = inputBox.value;

   const getlocalStorageData = JSON.parse(localStorage.getItem('todo')) || [];
   getlocalStorageData.push(userEnteredValue)

   localStorage.setItem('todo' , JSON.stringify(getlocalStorageData))

   showTask()
   addBtn.classList.remove("active")
});


  showTask();
  function showTask(){
   let getData = localStorage.getItem('todo');
    if(getData == null){
      listArry = [];
    }else{
      listArry = JSON.parse(getData)
    };

    const pedingtaskNum = document.querySelector('.pendingTask');
      pedingtaskNum.textContent = listArry.length

    if (listArry.length > 0) {
      removeBtn.classList.add("active")
    }else{
      removeBtn.classList.remove("active")
    };

      let newTag = "";
    listArry.forEach((element , index ) => {
      newTag += `<li>${element} <spam class="icon"><i class="fa-solid fa-trash-can" onclick=deleteTask(${index})></i></spam> </li>`;
    })
    todoList.innerHTML = newTag ;
    inputBox.value = "";
  };

  function deleteTask(index){
   const getLocalData = JSON.parse(localStorage.getItem('todo'))|| [];
  const updateTask = getLocalData.filter((_,i) => i !== index)
   localStorage.setItem('todo', JSON.stringify(updateTask))
   showTask();
  };
  
  removeBtn.addEventListener('click', function(){
      localStorage.removeItem('todo');
      showTask()
  });
























 