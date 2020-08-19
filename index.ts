// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

 let todoList= [{taskName :"Cleaning", taskDate :"8/08/2020", taskStatus :"done"},
             {taskName :"Cooking", taskDate :"9/08/2020", taskStatus :"todo"},
             {taskName :"Washing", taskDate :"10/08/2020", taskStatus :"Pending"},
             {taskName :"Eating", taskDate :"11/08/2020", taskStatus :"done"},
              {taskName :"Bathing", taskDate :"12/08/2020", taskStatus :"Pending"},
              {taskName :"Exercsing", taskDate :"13/08/2020", taskStatus :"todo"},
             {taskName :"Cycling", taskDate :"14/08/2020", taskStatus :"todo"},
             {taskName :"Washing", taskDate :"15/08/2020", taskStatus :"Pending"},
              {taskName :"cricket", taskDate :"16/08/2020", taskStatus :"done"},
               {taskName :"swimming", taskDate :"17/08/2020", taskStatus :"Pending"}];


            function  update(todoList) {
               if (todoList[4].taskStatus === "Pending" ){
                return todoList[4].taskStatus = "done";
               }else {
               return  todoList[4].taskStatus = "Pending";
               }
        
             }
              update(todoList);
             console.log(todoList[4].taskName , todoList[4].taskDate , todoList[4].taskStatus);