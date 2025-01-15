//Ganti Nama Pada Home
function sapa() {
    const user = prompt("Please input your name?");
    if (user == "") {
        alert("Tidak boleh ada yang kosong");
        return sapa();
    } else {
        document.getElementById("username").innerHTML = user;
    }
}

sapa();

var slideIndex = 1;
showDivs(slideIndex);

function plusBanner(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner");
    console.log(imgList);
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex-1].style.display = "block";
}

setInterval (() => {plusBanner(1)}, 5000);

function tampilkanform(nama, lahir, kelamin, pesan) {
    document.getElementById("time").innerHTML = "<b>Time : </b>" + Date();
    document.getElementById("nama1").innerHTML = "<b>Nama &emsp;&emsp;&emsp;&nbsp;: </b>" + nama;
    document.getElementById("lahir1").innerHTML = "<b>Tanggal Lahir &nbsp;: </b>" + lahir;
    document.getElementById("kelamin1").innerHTML = "<b>Jenis Kelamin : </b>" + kelamin;
    document.getElementById("pesan1").innerHTML = "<b>Pesan : </b><br>" + pesan;
    document.getElementById("clear").innerHTML = "<input type='submit' class='in3' value='Clear' onclick='return clearForm()'>";
}

function validasiForm() {
    const nama = document.forms["formpesan1"]["nama"].value;
    const lahir = document.forms["formpesan1"]["lahir"].value;
    const kelamin = document.forms["formpesan1"]["kelamin"].value;
    const pesan = document.forms["formpesan1"]["pesan"].value;

    if (nama == "" || lahir == "" || kelamin == "" || pesan == "")
    {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    tampilkanform(nama, lahir, kelamin, pesan);
    return false;
}

function clearForm() {
    document.getElementById("time").innerHTML = "";
    document.getElementById("nama1").innerHTML = "";
    document.getElementById("lahir1").innerHTML = "";
    document.getElementById("kelamin1").innerHTML = "";
    document.getElementById("pesan1").innerHTML = "";
    document.getElementById("clear").innerHTML = "";
}

