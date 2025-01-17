let input=document.getElementById('input');
let text=document.querySelector('.text');


//adding and removing task 
function add()
{
    
    if(input.value == '')
    {
        alert('heyy please enter the task !!!');
    }
    else
    {   var ul=document.createElement('ul');
        ul.innerHTML=`<span class="text">Task : ${input.value}</span> <button class="btn">Delete</button> <button class="btn1">Update</button><button class="btn2">Save</button>`;
        text.appendChild(ul);
        input.value="";

        let updatetext=ul.querySelector('.text');

        ul.querySelector('.btn').addEventListener("click",remove);//function(){ul.remove();}
        
        ul.querySelector('.btn1').addEventListener("click",update);

        ul.querySelector('.btn2').addEventListener("click",save);

        function remove()
        {
            ul.remove();
        }

        function update()
        {
            
            let newtext=updatetext.textContent.replace("Task : ","");
            updatetext.innerHTML=`<input type="text" class="edit-input" value="${newtext}" />`;
        }

        function save()
        {
            let update=ul.querySelector('.edit-input').value.trim();
            if(updatetext!=="")
            {
                updatetext.textContent=`Task : ${update}`;

            }
        }
    }
}
