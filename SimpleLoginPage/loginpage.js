
  function use()
        {
        var f=document.getElementById("l").value;
        var p=/^[a-zA-z]+[0-9]*$/;
        var f1=document.getElementById("m").value;
        var p1=/^[a-z]+[a-z0-9]*@gmail.com|.edu$/;
        var f2=document.getElementById("v").value;
        var p2=/^^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$&@!?+\-*])(?=\S+$).{6,8}$/;
        if(f!="" && f1!="" && f2!="")
        {
           if(f.match(p)!=null && f1.match(p1)!=null && f2.match(p2)!=null)
           { 
                 var popup=document.getElementById("mypopup");
                 popup.classList.add("open-slide");
                 return false;
                // alert("Your registration successfully.Thankyou!");
            }
            else
                alert("Oops !! Something went wrong");
        }
        }