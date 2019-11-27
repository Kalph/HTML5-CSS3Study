## fixed, 투명 메뉴바 만들기

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Travel Maker</title>
</head>
<style>
    body {
        background: white;
        display: table;
        margin-top: 0;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 1600px;
    }

    header {
        position: fixed;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.904);
        width: 100%;
        height: 10%;
        z-index: 10;
        opacity: 0.7;
    }

    header>section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        height: 100%;
        align-content: center;
    }

    header>section>*, header>section>ul>li{
        float: left;
    }

    .logo_div{
        box-sizing: border-box;
        width: 20%;
        height: 100%;
    }

    .logo_div>#logo{
        width: 100%;
        height: 100%;
    }

    #search_btn{
        position: absolute;
        top: 0;
        bottom: 0;
        left:60%;
        height: 30%;
        margin: auto;
    }

    .grb_u{
        position: absolute;
        top: 0;
        left: 60%;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 70%;
        height: 30%;
    }

    .grb_u>li{
        list-style:none;
    }
    .grb_u>li>a{
        text-decoration: none;
        color:white;
        margin-left: 25px;
        font-size: 23px;
        font-weight: 600;
    }

    header {
    -webkit-transition: background-color 0.4s ease;
    -moz-transition: background-color 0.4s ease;
    -o-transition: background-color 0.4s ease;
    transition: background-color 0.4s ease;
}
</style>
<script>
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("header").css({"background":"white","box-shadow":"1px 1px 1px 1px rgba(199, 199, 199, 0.658)"});
            $("header>section>h1").css("color","black");
            $(".grb_u>li>a").css("color","black");
        } else {
            $("header").css({"background":"rgba(0, 0, 0, 0.904)","box-shadow":"none"});
            $("header>section>h1").css("color","white");
            $(".grb_u>li>a").css("color","white");
        }
    });

    $(function(){
        $(".grb_u>li>a").hover(function(){
            console.log($(this));
            $(this).css({"font-size":"1.5em"});
        }).mouseleave(function(){
            $(this).css({"font-size":"23px"});
        });
    });
</script>

<body>
    <header>
        <section>
            <div class="logo_div">
                <img id="logo" src="img/스마트폰-사진-765x519.jpg">
            </div>
            <button id="search_btn" name="search_btn" type="submit">검색</button>
            <ul class="grb_u">
                <li><a href="">축제</a></li>
                <li><a href="">여행</a></li>
                <li><a href="">숙박</a></li>
                <li><a href="">커뮤니티</a></li>
            </ul>
        </section>
    </header>


</body>

</html>
```

<br>
