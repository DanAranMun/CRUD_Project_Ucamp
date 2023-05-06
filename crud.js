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

function printInfo() {
    const info = JSON.parse(localStorage.getItem("Info"))
        console.log(info)
    const box = document.getElementById('box')
    if ( info ){
        box.innerHTML= "";

        info.forEach(function (item) {
            let content = `<tr>
            <th scope="row">1</th>
            <td>${item.email}</td>
            <td>${item.name}</td>
            <td><button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
            </tr>`;
            box.insertAdjacentHTML("afterbegin", content);
    });
          
    } else {


    }

}