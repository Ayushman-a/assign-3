$(document).ready(()=>{
    addingUser();
})
// window.onload = function () {
//     addingUser()
// };
function addingUser() {
    console.log("hello from jquery")


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/users', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let userInfo = JSON.parse(this.responseText)
            console.log(userInfo)

            let id = document.getElementById('id');
            let str = '';
            let name = document.getElementById('namee')
            let str1 = ""
            let lastname = document.getElementById('lastNamee')
            let str2 = ""
            let email = document.getElementById('email')
            let str3 = ""
            let action = document.getElementById('actionn')
            let str4 = ""

            for (let i = 0; i < userInfo.length; i++) {
                str += `<li>${userInfo[i]._id}</li>`
                str1 += `<li>${userInfo[i].name}</li>`
                str2 += `<li>${userInfo[i].lastname}</li>`
                str3 += `<li>${userInfo[i].email}</li>`
                str4 += `<li>
                <a onclick="DeleteUser('@${userInfo[i]._id}') "   id = "delBtn">remove</a>
                </li>`
            }
            id.innerHTML = str
            name.innerHTML = str1
            lastname.innerHTML = str2
            email.innerHTML = str3
            action.innerHTML = str4
        } else {
            console.log('Error took place')
        }

    }

    xhr.send();
}

