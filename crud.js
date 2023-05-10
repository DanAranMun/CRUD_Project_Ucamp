function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('InputName');
    const email = document.getElementById('InputEmail');
    const contact = { name: name.value, email: email.value }
    let info = JSON.parse(localStorage.getItem("Info"))
    if (info) {
        info.push(contact)
    } else {
        info = [contact]
    }

    localStorage.setItem("Info", JSON.stringify(info))
    printInfo()
}
const myButton = document.getElementById('buttonSubmit');
myButton.addEventListener('click', () => onSubmit(event))

/* Function to edit the content within the modal */
function editContent(id) {
    const info = JSON.parse(localStorage.getItem("Info"))
    console.log(info[id])
    const { name, email } = info[id] //Deconstruct JS//
    const emailInput = document.getElementById('InputEditemail');
    const nameInput = document.getElementById('InputEditname');
    const itemId = document.getElementById('InputItemID')
    emailInput.value = email
    nameInput.value = name
    itemId.value = id
}
/* Added edit function to existing information*/
function saveEdit() {
    const info = JSON.parse(localStorage.getItem("Info"))
    const emailInput = document.getElementById('InputEditemail');
    const nameInput = document.getElementById('InputEditname');
    const itemId = document.getElementById('InputItemID')
    info[itemId.value] = {name:nameInput.value, email:emailInput.value}
    localStorage.setItem("Info", JSON.stringify(info))
    closeModal()
    printInfo()
}
/* To close the modal after saving any edit */
function closeModal() {
    const modal = document.getElementById('editModal');
    const myModal = new bootstrap.Modal(modal);
    console.log(myModal)
    myModal.hide();
}

function printInfo() {
    const info = JSON.parse(localStorage.getItem("Info"))
    console.log(info)
    const box = document.getElementById('box')
    if (info) {
        box.innerHTML = "";

        info.forEach(function (item, index) {
            let content = `<tr>
            <th scope="row">${index}</th>
            <td>${item.email}</td>
            <td>${item.name}</td>
            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editContent(${index})">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
            </tr>`;
            box.insertAdjacentHTML("afterbegin", content);
        });

    } else {


    }

}