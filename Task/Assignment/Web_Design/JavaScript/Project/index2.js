// Load saved data or start with an empty array
let userData = JSON.parse(localStorage.getItem("userData")) || [];

const saveData = () => {
    let id = $("#id").val();
    let obj = {
         id : $("#id").val(),
        // id: id ? Number(id) : userData.length + 1,
        Name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
        gender: $("input[name='gender']:checked").val(),
    };

    if (id) {
        userData = userData.map((item) => (item.id == id ? obj : item));
    } else {
        userData.push(obj);
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    document.frm.reset();
    $("input[name='gender']").prop("checked", false);
    display();
};

const display = () => {
    let allData = JSON.parse(localStorage.getItem("userData")) || [];
    let rows = allData
        .map(
            (i) => `
        <tr>
            <td>${i.id}</td>
            <td>${i.Name}</td>
            <td>${i.email}</td>
            <td>${i.age}</td>
            <td>${i.gender}</td>
            <td>
                <button onclick="editData(${i.id})">Edit</button>
                <button onclick="deleteData(${i.id})">Delete</button>
            </td>            
        </tr>`
        )
        .join("");
    $("#allData").html(rows);
};

const deleteData = (id) => {
    userData = userData.filter((i) => i.id != id).map((i, index) => ({ ...i, id: index + 1 }));
    localStorage.setItem("userData", JSON.stringify(userData));
    display();
};

const editData = (id) => {
    let data = userData.find((i) => i.id == id);
    if (data) {
        $("#name").val(data.Name);
        $("#age").val(data.age);
        $("#id").val(data.id);
        $("#email").val(data.email);
        $(`input[name='gender'][value='${data.gender}']`).prop("checked", true);
    }
};

display();
