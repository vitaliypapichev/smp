function showmsg(){
    document.getElementById("information").style.visibility = "hidden";
    document.getElementById("footr").style.visibility = "visible";
    setTimeout(function(){hidemsg()},1600);
}

function hidemsg(){
    document.getElementById("information").style.visibility = "visible";
    document.getElementById("footr").style.visibility = "hidden";
}

function showtime(data1, data2, data3, data4){
    $("#"+data4).click(function(e){
    e.preventDefault();
    var now = new Date();
    if((now.getHours()/10) < 1){
       var hours = "0"+now.getHours();
    }
    else{
        var hours = now.getHours();
    }
    if((now.getMinutes()/10) < 1){
       var minutes = "0"+now.getMinutes();
    }
    else{
        var minutes = now.getMinutes();
    }
    if((now.getDate()/10) < 1){
       var day = "0"+now.getDate();
    }
    else{
        var day = now.getDate();
    }
    if(((now.getMonth()+1)/10) < 1){
       var month = "0"+(now.getMonth()+1);
    }
    else{
        var month = now.getMonth()+1;
    }
  var year =  now.getFullYear()%100;
  var result = hours+":"+minutes+"---"+day+"/"+month+"/"+year;
  document.getElementById(data1).value = result;
  appendtime(data1,data2,data3);
  });
}

function appendtime(data1, data2, data3) {
  $(data3).animate({
    opacity: 0
  }, 400);
  setTimeout(function(){
    var time = document.getElementById(data1).value;
  var temp = time.split("---");
  document.getElementById(data3.substring(1)).style.marginRight = "3%";
  document.getElementById(data2).innerHTML = temp[0];
  $(data3).animate({
    opacity: 1
  }, 400);
  },400);
}

function appenddate(data1, data2, data3) {
  $(data3).animate({
    opacity: 0
  }, 400);
    setTimeout(function(){
  var time = document.getElementById(data1).value;
  var temp = time.split("---");
  document.getElementById(data3.substring(1)).style.marginRight = "8%";
  document.getElementById(data2).innerHTML = temp[1];  
  $(data3).animate({
    opacity: 1
  }, 400);
  },400);
}

function close_validation(par) {
  if (par) {
    $("#formlogin").animate({
      opacity: 0
    }, 400, function() {
      $("#loading1").css({
        "visibility": "visible"
      });
      $("#loading1").animate({
        opacity: 1
      }, 400, function() {
        setTimeout(function() {
          $("#loading1").animate({
            opacity: 0
          }, 400);
          $("#loginf").animate({
            opacity: 0
          }, 400);
          $("#mask").animate({
            opacity: 0
          }, 400, function() {
            $("#loading1").css({
              "visibility": "hidden"
            });
            $("#formlogin").css({
              "opacity": "1",
              "visibility": "hidden"
            });
            $("#loginf").css({
              "visibility": "hidden"
            });
            $("#mask").css({
              "visibility": "hidden"
            });
          });
        }, 800);
      });
    });
  } else {
    $("#formlogin").animate({
      opacity: 0
    }, 400, function() {
      $("#loading1").css({
        "visibility": "visible"
      });
      $("#loading1").animate({
        opacity: 1
      }, 400, function() {
        setTimeout(function() {
          $("#loading1").animate({
            opacity: 0
          }, 400, function() {
            $("#mess1").css({
              "visibility": "visible"
            });
            $("#loading1").css({
              "visibility": "hidden"
            });
            $("#mess1").animate({
              opacity: 1
            }, 400, function() {
              setTimeout(function() {
                $("#mess1").animate({
                  opacity: 0
                }, 400, function() {
                  $("#mess1").css({
                    "visibility": "hidden"
                  });
                  $("#formlogin").animate({
                    opacity: 1
                  }, 400);
                });
              }, 800);
            });
          });
        }, 800);
      });
    });
  }
}

function closealllemmas() {
  var notes = document.getElementById("notes");
  var allnotes = notes.getElementsByClassName("note");
  for (var i = 0; i < allnotes.length; i++) {
    delete_note(allnotes[i].id);
  }
}

function createlemmas(data) {
  for (var i = 0; i < data.length - 1; i++) {
    var tmp = data[i];
    var spl = tmp.split("razdelitelmezhduidentilemma");
    var point = +(spl[0].substring(4 + (data[data.length - 1].length)));
    add_note(point);
    document.getElementById(point + "text").value = spl[1];
    align(spl[1], point + "par");
    document.getElementById(point + "fulltime").value = spl[2];
    appendtime(point + "fulltime", point + "show", "#" + point + "time");
  }
}

function basedelete(note) {
  $("#" + note + "tcan").click(function(e) {
    e.preventDefault();
    var login = document.getElementById("txt").value;
    var lemma = login + "note" + note;
    var data1 = "login=" + login + "&&lemma=" + lemma;
    $.ajax({
      type: "POST",
      url: "phpcodes/deletenote.php",
      data: data1,
      dataType: "text",
      success: function(data) {
        delete_note("note" + note);
      }
    });
  });
}

function align(text, block) {
  var counter = 0;
  var inex = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "\n" || text[i] == "\r") counter++;
    if (counter == 3) {
      inex = i;
    }
  }
  if (counter > 4) {
    var temp = text.substring(0, inex + 1);
    temp += "\n...";
    document.getElementById(block).innerHTML = temp;
  } else {
    if (text.length > 66) {
      var temor = "";
      for (var j = 0; j < 55; j++) {
        temor += text[j];
      }
      temor += "\n...";
      document.getElementById(block).innerHTML = temor;
    } else {
      document.getElementById(block).innerHTML = text;
    }
  }
}

function closeform(data, note) {
  $("#" + data).animate({
    opacity: 0
  }, 400, function() {
    $("#" + data).css({
      "visibility": "hidden"
    });
    if (data == "registr") {
      document.getElementById("form_reg").style.visibility = "hidden";
      document.getElementById("form_reg").style.opacity = 0;
    }
    if (data == "loginf") {
      document.getElementById("formlogin").style.visibility = "hidden";
      document.getElementById("formlogin").style.opacity = 0;
    }
    if (data == "lemma") {
      document.getElementById(note + "text").value = document.getElementById("subtextzone").value;
      document.getElementById("zero").value = "";
      align(document.getElementById(note + "text").value, note + "par");
    }
  });
  $("#mask").animate({
    opacity: 0
  }, 400, function() {
    $("#mask").css({
      "visibility": "hidden"
    });
  });
}

function hover_menu() {
  if (document.getElementById("toolbar").style.marginTop == "") {
    document.getElementById("toolbar").style.marginTop = "50px";
  }
  if (document.getElementById("toolbar").style.marginTop == "50px") {
    $("#toolbar").animate({
      marginTop: "95px"
    }, 398);
  } else {
    $("#toolbar").animate({
      marginTop: "50px"
    }, 398);
  }
}

function delete_note(note) {
  $("#" + note).css({
    opacity: 0
  });
  $("#" + note).animate({
    width: "0px",
    marginLeft: 0
  }, 228, function() {
    $("#" + note).remove()
  });
}

function call_form(note) {
  $("#lemma").css({
    "visibility": "visible",
    "background": document.getElementById("note" + note).style.background
  });
  $("#lemma").animate({
    opacity: 1
  }, 400);
  $("#mask").css({
    "visibility": "visible"
  });
  $("#mask").animate({
    opacity: 0.4
  }, 400);
  var point = document.getElementById(note + "text").value;
  document.getElementById("subtextzone").value = point;
}

function raise(note) {
  call_form(note);
  var cross = document.getElementById("lemmadiv");
  cross.onclick = function() {
    closeform("lemma", note);
  }
  document.getElementById("zero").value = note;
}

function add_note(data) {
  var note = document.createElement("div");
  var color = ["#63B8FF", "#6495ED", "#00FF7F", "#BC8F8F", "#FFA500", "#DA70D6", "#00C5CD", "#C0FF3E", "#FF8247", "#B452CD"];
  var allnotes = document.getElementById("notes");
  var arraynotes = allnotes.getElementsByTagName('*');
  var tmp = arraynotes[0].id;
  if (data == '') {
    var point = (+(tmp.substring(4))) + 1;
  } else {
    var point = data;
  }
  note.className = "note";
  note.id = "note" + point;
  note.style.background = color[(point % 9)];
  note.style.border = "1px solid black";
  note.style.width = "0px";
  note.style.opacity = 0;
  var last = arraynotes[0];
  allnotes.insertBefore(note, last);
  var can = document.createElement("div");
  can.className = "tcan";
  can.id = point + "tcan";
  can.onmouseover = function() {
    basedelete(point)
  };
  note.appendChild(can);
  var trash = document.createElement("img");
  trash.src = "Images/trash-512.png";
  trash.className = "trashcan";
  trash.id = point + "trash";
  can.appendChild(trash);
  var vis = document.createElement("div");
  vis.className = "vis";
  vis.id = point + "vis";
  note.appendChild(vis);
  var text = document.createElement("textarea");
  text.id = point + "text";
  text.className = "unvistext";
  note.appendChild(text);
  var par = document.createElement("textarea");
  par.id = point + "par";
  par.className = "par";
  par.disabled = true;
  vis.appendChild(par);
  var pen = document.createElement("div");
  pen.className = "tpen";
  pen.id = point + "tpen";
  pen.onclick = function() {
    raise(point);  
  };
  pen.onmouseover = function() {
    showtime(point + "fulltime", point + "show", "#" + point + "time", point + "tpen")
  };
  note.appendChild(pen);
  var pencil = document.createElement("img");
  pencil.src = "Images/1024px-Black_pencil.svg.png"
  pencil.className = "pencil";
  pencil.id = point + "pencil";
  pen.appendChild(pencil);
  var time = document.createElement("div");
  time.className = "time";
  time.id = point + "time";
  note.appendChild(time);
  var now = new Date();
    if((now.getHours()/10) < 1){
       var hours = "0"+now.getHours();
    }
    else{
        var hours = now.getHours();
    }
    if((now.getMinutes()/10) < 1){
       var minutes = "0"+now.getMinutes();
    }
    else{
        var minutes = now.getMinutes();
    }
    if((now.getDate()/10) < 1){
       var day = "0"+now.getDate();
    }
    else{
        var day = now.getDate();
    }
    if(((now.getMonth()+1)/10) < 1){
       var month = "0"+(now.getMonth()+1);
    }
    else{
        var month = now.getMonth()+1;
    }
  var year =  now.getFullYear()%100;
  var result = hours+":"+minutes+"---"+day+"/"+month+"/"+year;
  var fulltime = document.createElement("input");
  fulltime.type = "text";
  fulltime.id = point + "fulltime";
  fulltime.disabled = true;
  fulltime.className = "fulltime";
  fulltime.value = result;
  time.appendChild(fulltime);
  var show = document.createElement("div");
  show.className = "show";
  show.id = point + "show";
  show.onmouseover = function(){appenddate(point + "fulltime", point + "show", "#" + point + "time");};
  show.onmouseout = function(){appendtime(point + "fulltime", point + "show", "#" + point + "time");};
  time.appendChild(show);
  $("#note" + point).animate({
    width: "240px",
    opacity: 1
  }, 228);
  $("#" + point + "vis").animate({
    opacity: 1
  }, 1000);
  appendtime(point + "fulltime", point + "show", "#" + point + "time");
}

function show_exit(data) {
  document.getElementById("logon1").style.visibility = "hidden";
  document.getElementById("logon2").style.visibility = "hidden";
  document.getElementById("exitbutton").style.position = "relative";
  document.getElementById("exitbutton").style.visibility = "visible";
  document.getElementById("txt").value = data;
  document.getElementById("userid").style.position = "relative";
  document.getElementById("userid").style.visibility = "visible";
}

function show_start() {
  document.getElementById("logon1").style.visibility = "visible";
  document.getElementById("logon2").style.visibility = "visible";
  document.getElementById("exitbutton").style.position = "absolute";
  document.getElementById("exitbutton").style.visibility = "hidden";
  document.getElementById("txt").value = "";
  document.getElementById("userid").style.position = "absolute";
  document.getElementById("userid").style.visibility = "hidden";
}

function clear_data() {
  setTimeout(function() {
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
  }, 800);

}

function open_submit() {
  var submit = document.getElementById("pass_submit");
  var checker = document.getElementById("pass_agreement").checked;
  if (checker) {
    submit.style.backgroundImage = "url(Images/subm.png)";
    submit.style.Size = "100%";
    submit.style.backgroundAttachment = "local";
    submit.disabled = false;
  } else {
    submit.style.backgroundImage = "url(Images/subm1.png)";
    submit.style.Size = "100%";
    submit.style.backgroundAttachment = "local";
    submit.disabled = true;
  }
}

function colorlgin(a, b) {
  var div = document.getElementById(a);
  div.style.background = "url(" + b + ") no-repeat center";
  div.style.backgroundAttachment = "local";
  div.style.backgroundSize = "100%";
}

function coloron(a, b) {
  var div = document.getElementById(a);
  div.style.background = "url(" + b + ") no-repeat center";
  div.style.backgroundAttachment = "local";
  div.style.backgroundSize = "100%";
}

function anim_call(b) {
  var cnt;
  var pointer;
  var anim;
  b.style.visibility = "visible";
  if (b.id == "registr") {
    document.getElementById("form_reg").style.visibility = "visible";
    document.getElementById("form_reg").style.opacity = 1;
  }
  if (b.id == "loginf") {
    document.getElementById("formlogin").style.visibility = "visible";
    document.getElementById("formlogin").style.opacity = 1;
  }
  $("#" + b.id).animate({
    opacity: 1
  }, 400);
  $("#mask").css({
    "visibility": "visible"
  });
  $("#mask").animate({
    opacity: 0.4
  }, 400);
}

function close_msg() {
  var msg = document.getElementById("suc_reg");
  msg.style.visibility = "hidden";
  msg.style.opacity = 0;
}

function validregistration() {
  var form = document.getElementById("form_reg");
  $("#form_reg").animate({
    opacity: 0
  }, 400, function() {
    form.style.visibility = "hidden";
  })
  var msg = document.getElementById("suc_reg");
  msg.style.visibility = "visible";
  setTimeout(function() {
    $("#suc_reg").animate({
      opacity: 1
    }, 400);
  }, 800);
  setTimeout(function() {
    $("#suc_reg").animate({
      opacity: 0
    }, 400);
  }, 2800);
  setTimeout(function() {
    $("#msg_3").css({
      "background": "url(Images/pharse1.png) no-repeat center",
      "background-attachment": "scroll",
      "background-size": "100%"
    });
    $("#suc_reg").animate({
      opacity: 1
    }, 400);
  }, 3600);
  setTimeout(function() {
    $("#suc_reg").animate({
      opacity: 0
    }, 400);
  }, 5600);
  setTimeout(function() {
    $("#msg_3").css({
      "background": "url(Images/phrase2.png) no-repeat center",
      "background-attachment": "scroll",
      "background-size": "100%"
    });
    $("#suc_reg").animate({
      opacity: 1
    }, 400);
  }, 6400);
  setTimeout(function() {
    $("#suc_reg").animate({
      opacity: 0
    }, 400, function() {
      $("#msg_3").css({
        "background": "url(Images/regis.png) no-repeat center",
        "background-attachment": "scroll",
        "background-size": "100%"
      });
    });
  }, 8400);
  setTimeout(function() {
    closeform("registr", '');
    close_msg();
  }, 8400);
}

function registration_form() {
  var reg = document.getElementById("registr");
  anim_call(reg);
}

function login_form() {
  var reg = document.getElementById("loginf");
  anim_call(reg);
}

function regis(a, b) {
  coloron(a, b);
  registration_form();
}

function login(a, b) {
  coloron(a, b);
  login_form();
}
