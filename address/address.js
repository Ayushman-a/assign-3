$(document).ready(function(){
    addressbar();
})
// window.onload = function () {
//     addressbar();
// };
function addressbar() {
    console.log("address bar is working")

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/getAddress', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let adAdress = JSON.parse(this.response)
            console.log(adAdress)


            let adresID = document.getElementById('AddressID')
            let a = '';
            let adresLine = document.getElementById('addressLine')
            let a1 = '';
            let adresCity = document.getElementById('city')
            let a2='';
            let adresState = document.getElementById('state')
            let a3='';
            let adresZip = document.getElementById('zip')
            let a4 ='';
            let adresCountry = document.getElementById('country')
            let a5='';

            for(let i = 0; i<adAdress.length;i++){
                a += `<li>${adAdress[i]._id}</li>`
                a1 += `<li>${adAdress[i].addressLine}</li>`
                a2 += `<li>${adAdress[i].city}</li>`
                a3 += `<li>${adAdress[i].state}</li>`
                a4 += `<li>${adAdress[i].zip}</li>`
                a5 += `<li>${adAdress[i].country}</li>`
            }
            adresID.innerHTML = a
            adresLine.innerHTML = a1
            adresCity.innerHTML = a2
            adresState.innerHTML = a3
            adresZip.innerHTML = a4
            adresCountry.innerHTML = a5
        } else{
            console.log("ERROR")
        }
    }
    xhr.send();

}