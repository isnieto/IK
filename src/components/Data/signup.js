$(function() {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitError: function(e, t, s) {},
        submitSuccess: function(e, t) {
            t.preventDefault();
            var s = $("select#programm").val(),
                a = $("input#name").val(),
                n = $("input#phone").val(),
                r = $("input#email").val(),
                i = $("input#dob").val(),
                c = $("select#stufe").val(),
                l = $("input#spanish").val(),
                o = $("input#region").val(),
                u = $("textarea#message").val(),
                m = a;
            m.indexOf(" ") >= 0 && (m = a.split(" ").slice(0, -1).join(" ")), $.ajax({
                url: "bin/signup.php",
                type: "POST",
                data: {
                    programm: s,
                    name: a,
                    phone: n,
                    email: r,
                    dob: i,
                    stufe: c,
                    spanish: l,
                    region: o,
                    message: u
                },
                cache: !1,
                success: function() {
                    $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Vielen Dank! Ihre Nachricht wurde gesendet. </strong><br /> Wir melden uns bald zurück."), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset")
                },
                error: function() {
                    $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append("<strong>Sorry " + m + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!"), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                }
            })
        },
        filter: function() {
            return $(this).is(":visible")
        }
    }), $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault(), $(this).tab("show")
    })
}), $("#name").focus(function() {
    $("#success").html("")
});