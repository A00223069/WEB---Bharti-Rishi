/*CHECK FOR VALUE*/

    newName();
    let text=localStorage.getItem('name');
    if(text==null)
    {
        alert('Key "name" Has No Value In Local Storage!');
    }
    

/*ENTER NAME*/

    function newName()
    {
        let query=document.querySelector('input[name="Name"]');
        name=(query.value).trim();
    }

 
/*SAVE NAME*/

    function saveName()
    {
        newName();
        if(name.length>0)
        {
            localStorage.setItem('name',name);
            window.location.reload()
        }
        else
        {
            alert("Please Enter Your Name !");
        }
    }


/*GET NAME*/

let get = document.getElementById("get");

get.onclick = function getName()
      {  
        alert("Hello "+text+" !");
      }

