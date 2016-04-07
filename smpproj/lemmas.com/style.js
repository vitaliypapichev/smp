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
    if(parseFloat(b.style.opacity) >= 1)
    {
        cnt=1;
        pointer = true;
    }
    else
    {
        cnt = 0;
        pointer = false;
    }
    if(pointer == false){
    b.style.visibility = "visible";
    anim = setInterval(function() {
        cnt+=0.1;
        b.style.opacity = cnt;
        if(cnt>=1)
            {
                b.style.opacity = cnt-0.1;
                clearInterval(anim);
            }
    },30);
    }
    else
    {
        if(pointer)
        {
          anim = setInterval(function() {
          cnt-=0.1;
          b.style.opacity = cnt;
          if(cnt<=0)
            {
                b.style.opacity = cnt;
                b.style.visibility = "hidden";
                clearInterval(anim);
            }
          },30);
        }
    }
}
function close(a)
{
    var form = document.getElementById(a);
    if(form.style.visibility == "visible")
        {
            var cnt = 1;
            form.style.opacity = cnt;
            var animation = setInterval(function(){
                cnt -= 0.1;
                 form.style.opacity = cnt;
                if(cnt <= 0)
                    {
                        form.style.visibility = "hidden";
                        clearInterval(animation);
                    }
            },30);
            return true;
        }
    else
    {
        return false;
    }
}
function validregistration()
{
    var form = document.getElementById("form_reg");
    form.style.opacity = 1;
    cnt = 1;
    anim = setInterval(function() {
          cnt-=0.1;
          form.style.opacity = cnt;
          if(cnt<=0)
            {
                form.style.opacity = cnt;
                form.style.visibility = "hidden";
                clearInterval(anim);
            }
          },30);
    
    setTimeout(function(){
    var msg = document.getElementById("suc_reg");
    msg.style.visibility = "visible";
    cnt1 = 0;
    anim1 = setInterval(function() {
          cnt1+=0.1;
          msg.style.opacity = cnt1;
          if(cnt1>=1)
            {
                msg.style.opacity = cnt1;
                clearInterval(anim1);
            }
          },30);
    },500);
}
function close_msg()
{
    setTimeout(function(){
    var msg = document.getElementById("suc_reg");
    msg.style.visibility = "hidden";
    msg.style.opacity = 0;
    var form = document.getElementById("form_reg");
    form.style.visibility = "visible";
    form.style.opacity = 1;
    },420);

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
    var chrck = document.getElementById("pass_agreement");
    chrck.checked = false;
    coloron(a,b);
    var pt = close("loginf");
    if(pt) setTimeout(function(){ close_msg(); registration_form();},500);
    else
    {
        close_msg();
        registration_form();
    }
        
}
function login(a,b)
{
    coloron(a,b);
    var pt = close("registr");
    if(pt) setTimeout(function(){ close_msg(); login_form();},500);
    else 
    {
        close_msg();
        login_form();
    }
}