$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(e,t,s){},submitSuccess:function(e,t){t.preventDefault();var s=$("input#name").val(),a=$("input#phone").val(),n=$("input#email").val(),r=$("textarea#message").val(),c=s;c.indexOf(" ")>=0&&(c=s.split(" ").slice(0,-1).join(" ")),$.ajax({url:"bin/contact_me.php",type:"POST",data:{name:s,phone:a,email:n,message:r},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Vielen Dank! Ihre Nachricht wurde gesendet. </strong><br />Wir melden uns so bald wie möglich bei Ihnen."),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+c+" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});
