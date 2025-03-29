// it loads saved data if it exists; otherwise, it starts with an empty list.
let userData = JSON.parse(localStorage.getItem("userData")) || []

let saveData = () => {
    let len = userData != null ? userData.length + 1 : 1
    let fname = document.getElementById("name").value
    let age = document.frm.age.value
    let gender = $("input[type='radio']:checked").val()
    let id = $("#id").val()
    let email = $("#email").val()

    if (id == "") {
        let obj =
        {
            id: len,
            Name: fname,
            email: email,
            age: age,
            gender: gender
        }
        userData.push(obj)
    }
    else {
        let updateData = userData.map((i) => {
            if (i.id == id) {
                i.Name = fname
                i.email = email
                i.age = age
                i.gender = gender
            }
            return i
        })
        userData = updateData
    }

    localStorage.setItem("userData", JSON.stringify(userData))
    document.frm.reset()
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    display()
}

//display data function and added css to the button edit and delete
const display = () => {
    let allData = JSON.parse(localStorage.getItem("userData")) || []

    let txt = ""
    allData.map((i) => {
        txt += `
            <tr>
                <td>${i.id}</td>
                <td>${i.Name}</td>
                <td>${i.email}</td>
                <td>${i.age}</td>
                <td>${i.gender}</td>
                <td>
                    <button onclick="editData(${i.id})" style="padding:5px 10px; border:none;background-color:rgba(255, 68, 0, 0.653);font-size:12px;color:white;border-radius:5px;margin:5px">Edit</button>
                    <button onclick="deleteData(${i.id})" style="padding:5px 10px; border:none;background-color:rgba(255, 68, 0, 0.653);font-size:12px;color:white;border-radius:5px;margin:5px">Delete</button>
                </td>            
            </tr>
        `
    })
    $("#allData").html(txt)
}

// delete data function
const deleteData = (id) => {
    let allData = JSON.parse(localStorage.getItem("userData")) || []

    let res = allData.filter((i) => {
        return i.id != id
    })

    j = 1
    let finalData = res.map((i) => {
        i.id = j++
        return i
    })
    localStorage.setItem("userData", JSON.stringify(finalData))
    display()
}

// edit data function
const editData = (id) => {
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    let allData = JSON.parse(localStorage.getItem("userData")) || []
    let res = allData.find((i) => {
        return i.id == id
    })

    $("#name").val(res.Name)
    $("#age").val(res.age)
    $("#id").val(res.id)
    $("#email").val(res.email)
    let gender = res.gender
    if (gender == "male") {
        $("#gender1").attr("checked", true)
    }
    else {
        $("#gender2").attr("checked", true)
    }
    // display()
}
display() 