function showTime(){//will invock the function with onload even
    let date=new Date(); //create s new date object with the current day=te and time
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";
     if(h=0){
         h=12;
     }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h = (h<10) ? "0"+ h : h;   //Conditional (Ternary) Operator  variablename = (condition) ? value1:value2 
    m=(m<10)? "0"+  m : m;
    s=(s<10)? "0"+ s : s;

    var time= h + ":" + m + ":" + s + "" +session;

   document.getElementById("MyClockDisplay").innerText=time;
   setTimeout(showTime, 1000);

}
showTime();


