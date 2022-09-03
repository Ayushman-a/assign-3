$(document).ready(()=>{
    addSubject();
})
function addSubject(){
    console.log("hello from subject")

    const xhr = new XMLHttpRequest();
    

    xhr.open('GET', 'http://localhost:3000/getSub', true);

    xhr.onload = function(){
        console.log('hellooo')
        if(this.status === 200){
            let subInfo = JSON.parse(this.response)
            console.log(subInfo)

            let subID = document.getElementById('subId')
            let s = ''
            let subjects = document.getElementById('allSub')
            let s1 = ''
            let Tmarks = document.getElementById('totalMarks')
            let s2 = ''
            let Omarks = document.getElementById('marksObtain')
            let s3 = ''
            let Pmarks = document.getElementById('marksPassing')
            let s4 = ''
// the .subject and totalMArks and other are carried from the modal of mongoose
            for(let i=0; i<subInfo.length;i++){
                s += `<li>${subInfo[i]._id}</li>`
                s1 += `<li>${subInfo[i].subject}</li>`
                s2 += `<li>${subInfo[i].totalMarks}</li>`
                s3 += `<li>${subInfo[i].marksObtain}</li>`
                s4 += `<li>${subInfo[i].passingMarks}</li>`
            }
            subID.innerHTML = s
            subjects.innerHTML = s1
            Tmarks.innerHTML = s2
            Omarks.innerHTML = s3
            Pmarks.innerHTML = s4
        } else{
            console.log("err")
        }
    }
    xhr.send()
}