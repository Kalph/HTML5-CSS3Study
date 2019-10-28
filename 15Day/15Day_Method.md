목차
=============
* [필터링 메소드](#필터링-메소드)<br>
* [순회(탐색) 메소드](#순회탐색-메소드)<br>
* [Content 관련 메소드](#content-관련-메소드)<br>
* [삽입 메소드](#삽입-메소드)<br>
* [기타 메소드](#기타-메소드)<br><br>

## 필터링 메소드 

<br>

```html
    <h1 class="test">test1</h1>
    <h1 class="test">test2</h1>
    <h1 class="test">test3</h1>
    <h1 class="test">test4</h1>

    <script>
       $(document).ready(function(){
           $(".test").filter(":even").css({"background":"green","color":"white"});
           // even 요소의 짝수 인덱스만 선택되게 함
           // 인덱스는 0 부터 시작한다 -> 즉 요소가 4개 있으므로
           // 짝수 인덱스는 0과 2 -> test1과 test3을 의미
        

            $(".test").filter(function(index){
                console.log(index);
                return index % 2== 1;
            }).css("background","yellow");

            $("h1").eq(2).css("color","purple");
       });
       
    </script>
```

<br>

<hr>

<br>

## 순회(탐색) 메소드

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #test {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            background: red;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
    <button id="test1">test1</button>
    <div id="test"> 11
        <ul> 22
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <script>
        $(document).ready(function () {
            $("ul").parent().css("background","lightgreen");
            $("li").parents().css("color","white");
            $("li").parentsUntil("div").css("background","orange");
        });

    </script>
</body>

</html>
```

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #test {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            background: red;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
    <button id="test1">test1</button>
    <div id="test"> 11
        <ul> 22
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <script>
        $(document).ready(function () {
            $("div").children().css("background","orange");
            $("div").children().children().css("background","lightgreen");
            $("div").find("li").css("color","white");
        });

    </script>
</body>

</html>
```

<br>


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #test {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            background: red;
        }

    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
    <button id="test1">test1</button>
    <div id="test">12345</div>
    <h1>hi</h1>
    <h3>나는</h3>&nbsp;
    <p>부자가 될테야</p>

    <script>
        $(document).ready(function () {
            $("h1").siblings().css("color","orange"); // 형제

            $("h3").next().css("color","purple"); // 다음

            $("h1").nextAll().css("background","lightgreen"); // 다음 모든 요소

            $("h1").nextUntil().css({"border":"3px solid green"});
            $("h1").prevUntil().css({"font-size":"2em"});

            // 이 외에도 prev, prevAll prevuntil이 존재

            // silbings, next, nextuntil 반대 개념
        });

    </script>
</body>

</html>
```

<br>

<hr>

## Content 관련 메소드

<br>

```html
    <h1 id="test1"><a href="http://www.naver.com">1234567890</a></h1>
    <h1 id="test2"></h1>
    <h1 id="test3"></h1>

    <script>
        $(document).ready(function(){
            var a = $("#test1").html();
            var b = $("#test1").text();

            console.log(a);
            console.log(b);

            // console에서 확인시 html은 a태그를 포함한 모든 문자를
            // text는 a태그를 제외한 1234567890 문자만을 가져온다.
            // 즉 text에 속성을 적용시킬 순 없다.

            $("#test2").html(a);
            $("#test3").text(b);
        });
    </script>
```

<br>
<hr>

## 삽입 메소드

```html
    <h1 id="test1"><a href="http://www.naver.com">1234567890</a></h1>
    <h1 id="test2">1</h1>
    <h1 id="test3"></h1>

    <script>
        $(document).ready(function () {
            // (자식) append - 앞에 추가, prepand - 뒤에 추가
            // (형제) after - 앞에 추가, before - 뒤에 추가
            // appendTo, prependTo, insertAfter, insertBefore도 존 재

            var arr = ["A","B","C"];
            var id = 0;

            var int = setInterval(function(){
                $("#test1").append(arr[id]);
                $("<span>"+arr[id]+"</span>").prependTo("#test2");
                id++;
                if(id>2) clearInterval(int);
            }, 1000);
        });
    </script>
```

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .tc{
            background: orange;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
    <button id="test">test1</button>
    <h1 id="test1"><a href="http://www.naver.com">1234567890</a></h1>
    <h1 id="test2">1</h1>
    <h1 id="test3"></h1>

    <script>
        $(document).ready(function () {
            // (자식) append - 앞에 추가, prepand - 뒤에 추가
            // (형제) after - 앞에 추가, before - 뒤에 추가
            // appendTo, prependTo, insertAfter, insertBefore도 존 재

            var arr = ["A","B","C"];
            var id = 0;

            var int = setInterval(function(){
                $("#test1").append(arr[id]);
                $("<span>"+arr[id]+"</span>").prependTo("#test2");
                id++;
                if(id>2) clearInterval(int);
            }, 1000);
        });

        $(document).ready(function(){
            $("#test").hover(function(){
                $(this).addClass("tc");
            }, function(){
                $(this).removeClass("tc");
            });
        });
        // empty() - 모든 자식 요소 삭제, remove() - DOM요소 잘라냄, 연관 이벤트도 삭제
        // detach - DOM요소 잘라냄, 이벤트는 보관
    </script>
</body>

</html>
```
<br>
<hr>

## 기타 메소드

<br>

<b>each</b> - for in문과 비슷한 메소드

<b>is</b> - 문서 객체의 특징 판별

<b>$.extend()</b> - 여러개의 객체 통합

<b>$.noConflict()</b> - 자바스크립트 라이브러리는 '$' 함수를 의미

그러나, 이 때문에 jQuery라이브러리가 충돌하는 경우가 발생

이 때를 위해 별칭을 지정해줘야함
