function button(){
    var ganti = document.getElementById("n1").value;
    document.getElementById("nama").style.display = "block";
    document.getElementById("sajian").style.display = "block";
    document.getElementById("form1").style.display = "none";
    document.getElementById("nama").innerHTML = ganti;
}