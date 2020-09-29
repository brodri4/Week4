let taskNameTextBox = document.getElementById("taskNameTextBox")
let addButton = document.getElementById("addButton")
let tasksUL = document.getElementById("tasksUL")
let ctasksUL = document.getElementById("ctasksUL")


addButton.addEventListener("click", function() {
    let taskNameTextBox = document.getElementById("taskNameTextBox")
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.addEventListener("click", function() {
        ctasksUL.appendChild(this.parentElement)
    })

    let li = document.createElement("li")
    li.setAttribute("class", "list-group-item list-group-item-info")
    let label = document.createElement("h3")
    let removeButton = document.createElement("button")
    removeButton.setAttribute("class", "btn btn-primary transparent")
    removeButton.addEventListener("click", function() {
        let parent = this.parentElement.parentElement
        parent.removeChild(this.parentElement)
})
    label.innerHTML = taskNameTextBox.value
    removeButton.innerHTML = "Remove"

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(removeButton)

    tasksUL.appendChild(li)
})

