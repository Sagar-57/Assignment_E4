const todo_list = []; // created an arry named as todo_list
let addToDo; // declaring addToDo
const todo_list_element = document.querySelector("#todo-list-ul"); //accessing list from html


class Display{//creating a class naming it as Display
    Constructor(){}//creating a constructor
displayToDo =function () {//creating a function of displayToDo which has scope only in this class
    todo_list_element.innerHTML = "";//clearing the data in the list
    document.querySelector("#todo-text").value = "";//clearing the data in the input box
    todo_list.forEach((item) => {//created a forEach loop to creat an <li> tag for each element
      const list_element = document.createElement("li");//created an <li></li>
      list_element.innerHTML = item.todoText;//assigning the value to list_element one by one with help of item
      const debtn = document.createElement("i");//creating an i tag for delete logo
      debtn.setAttribute("class", "far fa-trash-alt");//setting an class and attribute to debtn 
  
      debtn.setAttribute("data-id", item.id);//setting attributes to debt
  
      if (item.isDone) {//checking if weather task is done or not using if condition
        list_element.setAttribute("class", "checked");//setting class and attribute to list element
  
        
      }
      list_element.setAttribute("data_id", item.id);//setting attributes if the task is not done
      list_element.addEventListener("click", function (e) {//creating an event listener by clicking and as respone created an call back function
        const selectedId = e.target.getAttribute("data_id");//assigning the attribute value to selectedId
        obj1.doneToDo(selectedId);//obj1 is object created to access dontoDo function from different class
        debtn.addEventListener("click", function (e) {//creating an event listener by clicking and as respone created an call back function
          const debtn = e.target.getAttribute("data-id");//assigning the data id value to debtn
          obj2.deleteItem(debtn);//obj2 is and object created to use deleteItem from different class
        });
      });
      todo_list_element.appendChild(list_element);//attching the list_element to parent using appenchild
      list_element.appendChild(debtn);//attching the debtn to parent using appenchild
      
  
  
    });}}
class AddToDo extends Display {//creating a class named AddToDo which extends Display so it can inhertate properties and functionalities from Display
    Constructor(){}//created constructor
 addToDo=function() {//created assToDo function
  const todoText = document.querySelector("#todo-text").value; //accessing the text written and assigning it to todoText
  if (todoText == "") {//cheching if todoText is empry or not
    return;//returning nothingh and execution stops
  } else {//else 
    const todoObject = {//creating object named todoObject
      id: todo_list.length + 1,//creating an id and giving index value 
      todoText: todoText,//assignig values
      isDone: false,//checking 
    };
    todo_list.unshift(todoObject);//adding to list using in unshift
    this.displayToDo();//accessing displayToDofunction which is parent class using this 
  }
};
}
let obj=new AddToDo()//creating object for addToDo class



document.querySelector("#todo-text").addEventListener("keydown", function(e) {//created eventlistener with a call back function to check if the enterd keys are correct to add the text
  if (e.keyCode == 13 && e.shiftKey ) {//checking weather shift and enter are pressed or not
    obj.addToDo()//accessing addToDo by the obj which is object created
  }
});


class Delete extends Display{//created class Delete which extends Display
    Constructor(){}//created an empty constructor
        deleteItem=function (debtn) {//created deleteItem function
    const deleteIndex = todo_list.findIndex((item) => item.id == debtn);//assigning the index to deleteIndex
    todo_list.splice(deleteIndex, 1);//deleting the todo_list element bu splice function
      this.displayToDo();}//accessing displayToDofunction by using this 
  }
  let obj2=new Delete()//created an object named obj2 for class delete
  class DoneToDo extends Display{//created a class named DonToDo which extends Display
      Constructor(){}//created an empty constructor
        doneToDo=function (selectedId) {//created doneToDo function
  const selectedIdIndex = todo_list.findIndex((item) => item.id == selectedId);//assigning index value to selectedIdIndex
  if(selectedIdIndex == -1){//checking if array is empty or not
    return;
  }else{
  todo_list[selectedIdIndex].isDone//created a terinary operator to check weather the task is completed or not
    ? (todo_list[selectedIdIndex].isDone = false)
    : (todo_list[selectedIdIndex].isDone = true);
  if(todo_list[selectedIdIndex].isDone==true){

  }
  this.displayToDo();}//accessing displayToDofrom different class using this
}}
let obj1=new DoneToDo()//created object named obj1 for class DoneToDo