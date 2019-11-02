$(document).ready(function () {
    function Clock() {
        var date = new Date();
        var month = date.getMonth();
        var clockDate = date.getDate();
        var day = date.getDay();
        var week = ['일', '월', '화', '수', '목', '금', '토'];
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return `${month + 1}월 ${clockDate}일 ${week[day]}요일 ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    cnt = 0;
    $("#add").on('click', function () {
        cnt++;
        $("#imgfile").click();
    });

    $("#del").on('click', function () {
        $("#picro").children().remove(":last");
    });
    $('#mainPic').css('background-image', 'url(image/tree.jpg)');

    $("#imgfile").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(this.files[0]);

            reader.onload = function () {
                console.log(122);
                $("#picro").append(
                    "<div class='col-md-4'>" +
                    "<div class='card mb-4 shadow-sm'>" +
                    "<div id='picDiv'>" +
                    "<img  id='" + cnt + "picA' src=" + reader.result + " onclick='base(this)'>" +
                    "</div>" +
                    "<div class='card-body'>" +
                    "<p class='card-text'>" + cnt + "번 게시물" + "</p>" +
                    "<div class='d-flex justify-content-between align-items-center'>" +
                    "<div class='btn-group'>" +
                    "<button type='button' class='btn btn-sm btn-outline-secondary' id=Sbut" + cnt + " onclick='Show(this)'>View</button>" +
                    "</div>" +
                    "<small class='text-muted' style='padding:5px'>" + "업로드 시간 : " + Clock() + "</small>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>");
            }
        }
    });

    /// base >
    // "<div class='col-md-4'>"+ 
    //     "<div class='card mb-4 shadow-sm'>"+
    //         "<div id='picDiv'>"+
    //             "<img id='pic' src=" + reader.result + ">"+
    //         "</div>"+
    //         "<div class='card-body'>"+
    //             "<p class='card-text'>"+ cnt + "번 게시물" + "</p>"+
    //             "<div class='d-flex justify-content-between align-items-center'>"+
    //                 "<div class='btn-group'>"+
    //                     "<button type='button' class='btn btn-sm btn-outline-secondary' id='picV'>View</button>"+
    //                     "<button type='button' class='btn btn-sm btn-outline-secondary' id='picE'>Edit</button>"+
    //                 "</div>"+
    //                 "<small class='text-muted' style="padding:5px">+ " + "업로드 시간 : " + Clock() + "</small>"+
    //            "</div>"+
    //         "</div>"+
    //     "</div>"+
    // "</div>"

});

var pct = 0;
function Show(e) {
    a = $(e).attr('id').substring(4);
    pci = document.getElementById(a + "picA");
    if (pct < 1) {
        pci.style.width = (pci.width * 2) + "px";
        pci.style.height = (pci.height * 2) + "px";
        pct++;
    }
}



function base(e) {
    if (pct >= 1) {
        pci.style.width = (pci.width / 2) + "px";
        pci.style.height = (pci.height / 2) + "px";
        pct--;
    }
}
