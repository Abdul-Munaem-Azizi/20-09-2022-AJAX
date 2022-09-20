
document.getElementById('submitform').addEventListener('submit',loadEmailFunc)

function loadEmailFunc(e){
    e.prevenDefault();

    var email = document.getElementById('email').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sub.php?email='+email)

    xhr.onload = function (){
        console.log(this.response)
    }

    xhr.send();
}
