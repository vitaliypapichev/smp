window.onload = function(e){
       e.preventDefault();
        $.ajax({
            type: "POST",
            url: "ifsession.php",
            data: "",
            success: function(data)
            {
                alert(data);
                if(data!="" && data.indexOf(" ") == -1)
                {
                    show_exit(data);
                }
                else
                    {
                        show_start();
                    }
            }
        });
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
    $('#formlogin').submit(function(e){
        e.preventDefault();
        var login = document.getElementById("authlogin");
        var password = document.getElementById("authpass");
        var sender = "login="+login.value+"&&pass="+password.value;
        $.ajax({
            type: "POST",
            url: "validation.php",
            data: sender,
            dataType: "text",
            success:
            function(data)
            {
                alert(data);
                if(data != "" && data.indexOf(" ") == -1)
                {
                    show_exit(data);
                }
            }
        });
    });
    $("#subtextzone").bind('click focus blur mouseover ouseout mousemove change keyup',function(e){
        e.preventDefault();
        var info = document.getElementById("zero").value;
        document.getElementById(info+"text").value = document.getElementById("subtextzone").value;
        align(document.getElementById(info+"text").value,info+"par");     
    }
    );
    $("#lemmadiv").click(function(e){
        e.preventDefault();
        if(document.getElementById("txt").value.length != 0)
        {
        var point = document.getElementById("zero").value;
        var text = document.getElementById(point+"text").value;
        var lemma = "note"+point;
        var login = document.getElementById("txt").value;
        var data1 = "text="+text+"&&lemma="+lemma+"&&login="+login;
            $.ajax({
                type: "POST",
                url: "addnote.php",
                data: data1,
                dataType: "text",
                success: function(data)
                {
                }
            })
        }
    });
    $('#form_login').bind('click focus blur mouseover mouseout mousemove change keyup',function(e){
        e.preventDefault();
        var form = document.getElementById("form_login").value;
        $.ajax({
            type: "POST",
            url: "lgget.php",
            data: "form_login="+form,
            dataType: "text",
            success: function(data)
            {
                   var agree = document.getElementById("pass_agreement");
                   if(data.length)
                   {
                        if(data!="Login")
                        {
                           var msg2 = document.getElementById("message1");
                           msg2.style.visibility = "hidden";
                           agree.disabled = false;
                        }
                   }
                   else
                        {
                           var msg2 = document.getElementById("message1");
                           msg2.style.visibility = "visible";
                           agree.disabled = true;
                        }
            }
        });
    });
    $('#exitbutton').click(function(e){
        e.preventDefault();
        $.ajax({
           type: "POST",
           url: "closesession.php",
           data:"",
           success:function(data)
            {
                if(data=="closing")
                {
                    show_start();
                }
            }
        });
    });
}