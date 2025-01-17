let container=document.querySelector(".container");
let userresult=document.querySelector(".user_result img");
let computerresult=document.querySelector(".computer_result img");
let result=document.querySelector(".result");
let optionimg=document.querySelectorAll(".option_image");

optionimg.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        userresult.src=computerresult.src="image/rock.png";
        container.classList.add("active");

        optionimg.forEach((img2,index2)=>{
            index !==index2 && img2.classList.remove("active");
        })
        container.classList.add("start");
        let time=setTimeout(()=>{
            container.classList.remove("start");
            let imgsrc=e.target.querySelector("img").src;

            userresult.src=imgsrc;
            let randomnum=Math.floor(Math.random()*3);
            let comimg=["image/rock.png","image/paper.png","image/scissors.png"];

            computerresult.src=comimg[randomnum];
            
            let comvalue=["R","P","S"][randomnum];
            let uservalue=["R","P","S"][index];

            let outcome={
                RR:"Draw",
                RP:"Computer",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"Computer",
                SS:"Draw",
                SR:"Computer",
                SP:"User"
            };

            let outcomevalue=outcome[uservalue+comvalue];
            result.textContent=uservalue===comvalue ?"Match Draw":`${outcomevalue} Win !!`;


        },2000);
    });
});