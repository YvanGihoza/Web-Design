/*
 * Author: Yvan Gihoza
 * Date: 02-04-2020
 */
//get the value of the input of the html 
const inputElement = document.getElementById("myInput");
//event handler, check if a certain key is pressed to execute this function
inputElement.addEventListener("keypress",()=>{
    //when the enter button is pressed (enter keycode = 13)
    if(event.keyCode == 13){
        //value: the keyboard input, event: enter, target: input bar
        console.log(event.target.value);
        //create a list
        var li = document.createElement("li");
        //get the text node to add to the list
        var toAddToList = document.createTextNode(event.target.value);
        //add the value to the list
        li.appendChild(toAddToList);
        document.getElementById("toDoList").appendChild(li);
        //update the user input state
        event.target.value = "";
        //create the delete button
        var deletBtn = document.createElement("button");
        //delete all button
        var deletAll = document.createElement("button");
        //check box
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.innerHTML = "checkbox";
        //put the checkbox on the list
        li.append(checkBox);
        //check if a checkbox was selected
        if(checkBox.onclick = function(){
            console.log("You clicked me");
            document.getElementById("myInput");
        }  )
        //place the delete buttons on the list
        deletBtn.innerHTML = "delete";
        li.appendChild(deletBtn);
        //delete the element when the button is clicked
        deletBtn.onclick = function(){
            document.getElementById("toDoList").removeChild(li);
        }  
    }
});