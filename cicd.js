    function addData() {
        //Get input values
        let task_name = document.getElementById("Task_name").value;
        let task_description = document.getElementById("Task_desc").value;
        let task_assignee = document.getElementById("Task_Assignee").value;
        let task_progress = document.getElementById("Task_Progress").value;
        

    let table = document.getElementById("outputTable")
    let newRow = table.insertRow(table.rows.length);

    //Insert data into cells of new Row
    newRow.insertCell(0).innerHTML = task_name;
    newRow.insertCell(1).innerHTML = task_description;
    newRow.insertCell(2).innerHTML = task_assignee;
    newRow.insertCell(3).innerHTML = task_progress;
    newRow.insertCell(4).innerHTML = 
        '<button onclick="editData(this)">Edit</button>' +
        '<button onclick="deleteData(this)">Delete</button>';

    //clear input fields
    clearInputs();
    }

function editData(button) {
    //Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    //Get the cells within the row
    let taskCell = row.cells[0];
    let task_descriptionCell = row.cells[1];
    let task_assigneeCell = row.cells[2];
    let task_progressCell = row.cells[3];

    //prompt th euser to enter updated name

    let Task_name = prompt("Enter the updated Task", taskCell.innerHTML);
    let Task_desc = prompt("Enter the updated task description here", task_descriptionCell.innerHTML);
    let Task_Assignee = prompt("Enter the updated Assignee",  task_assigneeCell.innerHTML);
    let Task_Progress = prompt("Select the progress to be updated",task_progressCell.innerHTML)

    //update with new values
    taskCell.innerHTML = Task_name
    task_descriptionCell.innerHTML = Task_desc
    task_assigneeCell.innerHTML = Task_Assignee
    task_progressCell.innerHTML = Task_Progress


}

function deleteData(button) {

    let row = button.parentNode.parentNode

    row.parentNode.removeChild(row);
}

function clearInputs(){
    document.getElementById("Task_name").value="";
    document.getElementById("Task_desc").value="";
    document.getElementById("Task_Assignee").value="";
    document.getElementById("Task_Progress").value="";

}