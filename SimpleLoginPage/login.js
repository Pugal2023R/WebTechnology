
 function use()
        {
        var f1=document.getElementById("m").value;
        var p1=/^[a-z]+[a-z0-9]*@gmail.com|.edu$/;
        var f2=document.getElementById("v").value;
        var p2=/^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$&@!?+\-*]).{6,8}$/;
        if( f1!="" && f2!="")
        {
           if(f1.match(p1)!=null && f2.match(p2)!=null)
           { 
             alert("Your Login Successfully.Thankyou!");
            }
            else
                alert("Oops !! Something went wrong");
        }
    }