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

function tampilkanform(nama, lahir, kelamin, pesan) {
    document.getElementById("time").innerHTML = "<b>Time : </b>" + Date();
    document.getElementById("nama1").innerHTML = "<b>Nama &emsp;&emsp;&emsp;&nbsp;: </b>" + nama;
    document.getElementById("lahir1").innerHTML = "<b>Tanggal Lahir &nbsp;: </b>" + lahir;
    document.getElementById("kelamin1").innerHTML = "<b>Jenis Kelamin : </b>" + kelamin;
    document.getElementById("pesan1").innerHTML = "<b>Pesan : </b><br>" + pesan;
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

