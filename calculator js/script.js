let string = "";
let buttons = document.querySelectorAll('.button');
let display=document.querySelector('input');

buttons.forEach((but)=>{
    but.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
          string = eval(string);
          display.value = string;
        }
        else if(e.target.innerHTML == 'C'){
          string = "";
          display.value = string;
        }
        else if(e.target.innerHTML == "DEL")
        {
            string=string.substring(0,string.length-1);
            display.value = string;
        }
        else{ 
        //console.log(e.target);
        string = string + e.target.innerHTML;
        display.value = string;
          }
      })
})