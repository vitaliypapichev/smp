window.onload = function(){
        $('#form_reg').submit(function(e){
        e.preventDefault();
        var password = document.getElementById("pass_pass");
        var password_valid = document.getElementById("pass_passval");
        if(password.value == password_valid.value)
        {
        var msg2 = document.getElementById("message2");
        msg2.style.visibility = "hidden";
        var formitems = $("#form_reg").serialize();
        $.ajax({
            type: "POST",
            url: "sender.php",
            data: formitems,
            dataType: "text",
            success: validregistration()
        });
        }
        else
        {
           var msg2 = document.getElementById("message2");
           msg2.style.visibility = "visible";     
        }
     });  
    $('#form_login').keyup(function(e){
        e.preventDefault();
        var form = document.getElementById("form_login").value;
        $.ajax({
            type: "GET",
            url: "lgget.php",
            data: "form_login="+form,
            dataType: "text",
            success: function(data)
            {
                   var name = document.getElementById("form_name");
                   var mail = document.getElementById("pass_mail");
                   var agree = document.getElementById("pass_agreement");
                   var submit = document.getElementById("pass_submit");
                   var pointer2 = false;
                   var pointer3 = false;
                   if(name.value.length >= 1 && data != "Login")
                   {
                        if(data!="Login"){
                           var msg2 = document.getElementById("message1");
                           msg2.style.visibility = "hidden";
                        }
                        pointer2 = true;
                   }
                   if(mail.value.length >= 4)
                   {
                        pointer3 = true;
                   }
                    var result = pointer2 & pointer3 & agree.checked;
                    if(result)
                    {
                        submit.style.backgroundImage = "url(Images/subm.png)";
                        submit.style.Size = "100%";
                        submit.style.backgroundAttachment = "local";
                        submit.disabled = false;
                    }
                    else
                    {
                        if(data == "Login")
                        {
                           var msg2 = document.getElementById("message1");
                           msg2.style.visibility = "visible";
                        }
                        submit.style.backgroundImage = "url(Images/subm1.png)";
                        submit.style.Size = "100%";
                        submit.style.backgroundAttachment = "local";
                        submit.disabled = true;
                    }
            }
        });
    });
}