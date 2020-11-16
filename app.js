var  number = prompt("กรอกเลขขอท่าน")
var  logTO = Math.floor(Math.random() * 100)
document.getElementById("youNumber").innerHTML = number;
document.getElementById("result").innerHTML = logTO;

if(number === logTO){
    alert("คุณถูกรางวัล")
}else if(number !== logTO){
    alert("คุณไม่ถูกรางวัล")
}
   
