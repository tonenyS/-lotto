var  number = prompt("กรอกเลขขอท่าน")
var  logTO = Math.floor(Math.random() * 1000)
document.getElementById("youNumber").innerHTML = number;
document.getElementById("result").innerHTML = logTO;

if(number == logTO){
    alert("คุณถูกรางวัล")
    document.getElementById("id").innerHTML="ยินดีด้วยคุณถูกรางวัล"
}else {
    alert("คุณไม่ถูกรางวัล")
    document.getElementById("id").innerHTML="เสียใจด้วยคุณไม่ถูกรางวัล"
}
   
