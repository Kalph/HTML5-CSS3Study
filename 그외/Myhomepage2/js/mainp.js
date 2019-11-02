$(document).ready(function(){
    $("#log_btn").click(function(){
        var id = $("#input_id").val();
        var pwd = $("#input_pwd").val();
        if(id=="id1234"){
            if(pwd=="pwd1234"){
                alert("로그인");
                window.open("일반게시판.html", "_self");  
            }
        }else{
            alert("로그인 X");
        }
    });

    $("#sendTo").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $("#tem_text").append("<h3> 작성자 : " + name + "</h3>"
            + "Email : " + email +  "<br>" +
            "<p><b> 댓글 </b><br>" + message + "<br>");
    })
});
