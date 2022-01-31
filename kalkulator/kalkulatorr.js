kali.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a * b;
    document.querySelector("#hasil").innerHTML = c ;
}

bagi.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a / b;
    document.querySelector("#hasil").innerHTML = c;
}

tambah.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = parseFloat (a) + parseFloat (b);
    document.querySelector("#hasil").innerHTML = c;

}

kurang.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a - b;
    document.querySelector("#hasil").innerHTML = c;
}

