function basedelete(note)
{
    $("#"+note+"tcan").click(function(e){
        e.preventDefault();
        var lemma = "note"+note;
        var login = document.getElementById("txt").value;
        var data1 = "login="+login+"&&lemma="+lemma;
        $.ajax({
            type: "POST",
            url: "deletenote.php",
            data: data1,
            dataType: "text",
            success:function(data)
            {
                delete_note("note"+note);
            }
        });
    });
}
function align(text, block)
{
    var counter = 0;
    var inex = 0;
    for(var i = 0; i < text.length; i++)
       {
            if(text[i] == "\n" || text[i] == "\r") counter++;
           if(counter==2) 
           {
               inex = i;
           }
       }
   if(counter>3)
       {
           var temp = text.substring(0,inex+1);
           temp+="\n...";
           document.getElementById(block).innerHTML = temp;
       }
    else {
        if(text.length>44)
        {
        var temor = "";
        for(var j = 0; j < 33; j++)
            {
                temor+=text[j];
            }
        temor+="\n...";
        document.getElementById(block).innerHTML = temor;
        }
        else
        {
           document.getElementById(block).innerHTML = text;
        }
    }
}
function closeform(data,note)
{
    $("#"+data).animate({opacity:0},400,function(){
        $("#"+data).css({"visibility":"hidden"});                                          
                    if(data == "registr") 
                    {
                        document.getElementById("form_reg").style.visibility = "hidden"; 
                        document.getElementById("form_reg").style.opacity = 0; 
                    }
                    if(data == "loginf")
                    {
                        document.getElementById("formlogin").style.visibility = "hidden"; 
                        document.getElementById("formlogin").style.opacity = 0; 
                    }
                    if(data == "lemma")
                    {
                      document.getElementById(note+"text").value =  document.getElementById("subtextzone").value;
                    document.getElementById("zero").value = "";
                      align(document.getElementById(note+"text").value,note+"par");
                    }
    });
    $("#mask").animate({opacity:0},400,function(){$("#mask").css({"visibility":"hidden"});});
}
function hover_menu()
{ 
  if(document.getElementById("toolbar").style.marginTop=="")
    {
            document.getElementById("toolbar").style.marginTop="50px";
    }
  if(document.getElementById("toolbar").style.marginTop=="50px")
    {
         $("#toolbar").animate({marginTop:"95px"},398);
    }
  else
    {
        $("#toolbar").animate({marginTop:"50px"},398);
    }
}
function delete_note(note)
{
    $("#"+note).css({opacity:0});
    $("#"+note).animate({width:"0px",marginLeft:0},228,function(){$("#"+note).remove()});
}
function call_form(note)
{
    $("#lemma").css({"visibility":"visible", "background":document.getElementById("note"+note).style.background});
    $("#lemma").animate({opacity:1}, 400); 
    $("#mask").css({"visibility":"visible"});
    $("#mask").animate({opacity:0.4},400);
    var point = document.getElementById(note+"text").value;
    document.getElementById("subtextzone").value = point;
}
function raise(note)
{
    call_form(note);
    var cross = document.getElementById("lemmadiv");
    cross.onclick = function(){closeform("lemma",note);}
    document.getElementById("zero").value = note;
}
function add_note()
{
    var note = document.createElement("div");
    var color = ["#63B8FF","#6495ED","#00FF7F","#BC8F8F","#FFA500","#DA70D6","#00C5CD","#C0FF3E","#FF8247","#B452CD"];
    var allnotes = document.getElementById("notes");
    var arraynotes = allnotes.getElementsByTagName('*');
    var tmp = arraynotes[0].id;
    var point = (+(tmp.substring(4)))+1;
    note.className = "note";
    note.id = "note"+point;
    note.style.background = color[(point%9)];
    note.style.border = "1px solid black";
    note.style.width = "0px";
    note.style.opacity = 0;
    var last = arraynotes[0];
    allnotes.insertBefore(note, last); 
    var can = document.createElement("div");
    can.className = "tcan";
    can.id = point+"tcan";
    can.onmouseover = function(){basedelete(point)};
    note.appendChild(can);
    var trash = document.createElement("img");
    trash.src = "Images/trash-512.png";
    trash.className = "trashcan";
    trash.id = point+"trash";
    can.appendChild(trash);
    var vis = document.createElement("div");
    vis.className = "vis";
    vis.id = point+"vis";
    note.appendChild(vis);
    var text = document.createElement("textarea");
    text.id = point+"text";
    text.className = "unvistext";
    note.appendChild(text);
    var par = document.createElement("textarea");
    par.id = point+"par";
    par.className = "par";
    par.disabled = true;
    vis.appendChild(par);
    var pen = document.createElement("div");
    pen.className = "tpen";
    pen.id = point+"tpen";
    pen.onclick = function(){raise(point);};
    note.appendChild(pen);
    var pencil = document.createElement("img");
    pencil.src = "Images/1024px-Black_pencil.svg.png"
    pencil.className = "pencil";
    pencil.id = point+"pencil";
    pen.appendChild(pencil);
    $("#note"+point).animate({width:"200px",opacity:1},228); 
    $("#"+point+"vis").animate({opacity:1},1000);
}
function show_exit(data)
{
    document.getElementById("logon1").style.visibility = "hidden";
    document.getElementById("logon2").style.visibility = "hidden";
    document.getElementById("exitbutton").style.position = "relative";
    document.getElementById("exitbutton").style.visibility = "visible";
    document.getElementById("txt").value = data;
    document.getElementById("userid").style.position = "relative";
    document.getElementById("userid").style.visibility = "visible";
}
function show_start()
{
    document.getElementById("logon1").style.visibility = "visible";
    document.getElementById("logon2").style.visibility = "visible";
    document.getElementById("exitbutton").style.position = "absolute";
    document.getElementById("exitbutton").style.visibility = "hidden";
    document.getElementById("txt").value = "";
    document.getElementById("userid").style.position = "absolute";
    document.getElementById("userid").style.visibility = "hidden";
}
function clear_data()
{
    setTimeout(function(){
    document.getElementById("form_name").value = "";
    document.getElementById("form_login").value = "";
    document.getElementById("pass_pass").value = "";
    document.getElementById("pass_passval").value = "";
    document.getElementById("pass_agreement").checked = false;
    document.getElementById("pass_mail").value = "";   
    var submit = document.getElementById("pass_submit");
    submit.style.backgroundImage = "url(Images/subm1.png)";
    submit.style.Size = "100%";
    submit.style.backgroundAttachment = "local";
    submit.disabled = true;
        },800);
    
}
function open_submit()
{
    var submit = document.getElementById("pass_submit");
    var checker = document.getElementById("pass_agreement").checked;
    if(checker)
        {
            submit.style.backgroundImage = "url(Images/subm.png)";
            submit.style.Size = "100%";
            submit.style.backgroundAttachment = "local";
            submit.disabled = false;
        }
    else
        {
            submit.style.backgroundImage = "url(Images/subm1.png)";
            submit.style.Size = "100%";
            submit.style.backgroundAttachment = "local";
            submit.disabled = true;
        }
}
function colorlgin(a, b)
{
    var div = document.getElementById(a);
    div.style.background = "url("+b+") no-repeat center";
    div.style.backgroundAttachment = "local";
    div.style.backgroundSize = "100%";
}
function coloron(a, b)
{
    var div = document.getElementById(a);
    div.style.background = "url("+b+") no-repeat center";
    div.style.backgroundAttachment = "local";
    div.style.backgroundSize = "100%";
}
function anim_call(b)
{
    var cnt;
    var pointer;
    var anim;
    b.style.visibility = "visible";
    if(b.id == "registr")
    {
         document.getElementById("form_reg").style.visibility = "visible"; 
         document.getElementById("form_reg").style.opacity = 1; 
    }
     if(b.id == "loginf")
    {
        document.getElementById("formlogin").style.visibility = "visible"; 
        document.getElementById("formlogin").style.opacity = 1; 
    }
    $("#"+b.id).animate({opacity:1},400);
    $("#mask").css({"visibility":"visible"});
    $("#mask").animate({opacity:0.4},400);
}
function close_msg()
{
    var msg = document.getElementById("suc_reg");
    msg.style.visibility = "hidden";
    msg.style.opacity = 0;
}
function validregistration()
{
    var form = document.getElementById("form_reg");
    $("#form_reg").animate({opacity:0},400,function(){form.style.visibility = "hidden";})  
    var msg = document.getElementById("suc_reg");
    msg.style.visibility = "visible";
    setTimeout(function(){$("#suc_reg").animate({opacity:1},400);},800);
    setTimeout(function(){$("#suc_reg").animate({opacity:0},400);},2800);
    setTimeout(function(){$("#msg_3").css({"background":"url(Images/pharse1.png) no-repeat center", "background-attachment": "scroll","background-size": "100%"});$("#suc_reg").animate({opacity:1},400);},3600);
    setTimeout(function(){$("#suc_reg").animate({opacity:0},400);},5600);
    setTimeout(function(){$("#msg_3").css({"background":"url(Images/phrase2.png) no-repeat center", "background-attachment": "scroll","background-size": "100%"});$("#suc_reg").animate({opacity:1},400);},6400);
    setTimeout(function(){$("#suc_reg").animate({opacity:0},400,function(){$("#msg_3").css({"background":"url(Images/regis.png) no-repeat center", "background-attachment": "scroll","background-size": "100%"});});},8400);
   setTimeout(function(){closeform("registr",''); close_msg();},8400);
}
function registration_form()
{
    var reg = document.getElementById("registr");
    anim_call(reg);
}
function login_form()
{
    var reg = document.getElementById("loginf");
    anim_call(reg);  
}
function regis(a,b)
{
    coloron(a,b);
    registration_form();       
}
function login(a,b)
{
    coloron(a,b);
    login_form();
}