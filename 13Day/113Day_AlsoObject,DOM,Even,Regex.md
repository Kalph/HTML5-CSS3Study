목차
=============
* [Window 객체](#Window-객체)<br>
* [DOM](#DOM)<br>
* [이벤트](#이벤트)<br> 
* [정규 표현식](#정규 표현식)<br> <br>

## Window 객체

<br>

- window 객체는 웹 브라우저의 창을 나타내는 객체이다. 

- 자바 스크립트의 모든 개체, 전역 함수, 전역 변수들은 자동으로 window 객체의 프로퍼티가 된다.

- 자바 스크립트의 최상위 객체이며 BOM과 DOM으로 나뉜다.

<br>

[http://tcpschool.com/javascript/js_bom_window](http://tcpschool.com/javascript/js_bom_window)

<br>

### window.open(), timer

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function test(){
            var test= window.open("test.html",'name','width=300','height=200','left=300');
            // window.open("http://www.naver.com","_self");
            test.alert('2초후 종료');

            // 1000은 1초 의미
            window.setTimeout(function(){
                test.close();
            }, 2000);
        }
    </script>
```

<br>

### setInterval(), clearInterval()

<br>

```html
    <button onclick="test();">test</button>
    <button onclick="test2();">test2</button>
    <div id="test1"></div>

    <script>
        function test(){
            var test1 = document.getElementById("test1");

            time = window.setInterval(function(){
                var date = new Date;
                test1.innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
            }/* 1000 */ );
        }

        function test2(){
            // clearInterval을 사용하면 시간이 멈춤
            clearInterval(time);
        }
    </script>
```

<br>

### Screen 

<br>

```html
    <button onclick="test();">test</button>

    <script>
        function test(){
            var w = screen.width;
            var h = screen.height;

            test = window.open("","","width=500",'height=500');
            test.resizeTo(w,h);
            test.resizeBy(-100,-100);
            test.moveBy(50,50);
        }
    </script>
```

<br>

### location

<br>

```html
    <button onclick="location.href = 'http://www.naver.com'">네이버로이동</button>
    <button onclick="location.reload()">새로고침</button>
    <button onclick="location.replace('http://www.naver.com')">뒤로가기 사용불가</button>
```

<br>

### navigator

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function test(){
            var test1 = document.getElementById("test1");

            test1.innerHTML += "브라우저 코드명" + navigator.appCodeName +"<br>";
            test1.innerHTML += "브라우저 이름 : " + navigator.appName + "<br>";
            test1.innerHTML += "브라우저 전체 정보 : " + navigator.userAgent + "<br>";
            test1.innerHTML += "브라우저 언어 : " + navigator.language + "<br>";
            test1.innerHTML += "운영체제 : " + navigator.platform + "<br>";
        }
```

<br>

### history

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function test(){
            var test1 = document.getElementById("test1");
            // 뒤로 가기 가능 페이지 수
            test1.innerHTML += history.length; 

            // 뒤로 가기
            // history.back(); 
            
            // 앞으로 가기
            // history.forward(); 
            
            // 숫자를 넣어줌으로서 뒤로 가기 앞으로 가기 가능 
            // history.go(-1); 
            // history.go(1); 
        }
    </script>
```

<br>

## DOM

- DOM은 문서의 구조화된 표현을 제공한다.

- HTML 태그들을 구조화 아였을 때 각각의 태그를 노드라 한다.

<br>

[DOM 소개](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)


<br>

### 노드 생성/삭제, 스타일 지정

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
        #test1 {
            width: 200px;
            border: 1px solid black;
            background: palegreen;
        }
    </style>
</head>

<body>
    <button onclick="test();">test</button>
    <button onclick="test2();">test2</button>
    <button onclick="test3();">test3</button>
    <div id="test1"></div>

    <script>
        var test1 = document.getElementById("test1");

        // 노드 생성
        function test() {
            var tet = document.createElement("h1");

            var node = document.createTextNode("hi");
            tet.appendChild(node)

            test1.appendChild(tet);
        }

        // 노드 삭제
        function test2() {
            test1.lastChild.remove();
        }

        // 스타일 지정
        function test3() {
            test1.style.backgroundColor = "orange";
            test1.style.borderRadius = "50px";
            test1.style.transition = "all 2s";
        }
    </script>
</body>

</html>
```

<br>


## 이벤트

<br>

### 고전 이벤트 모델

<br>

```html
<body>
    <button id="test1">test1</button>
    <button id="test2">test2</button>
    <div id="test"></div>

    <script>
        var test = document.getElementById("test");

        test1.onclick = function(){
            test.innerHTML += "버튼 클릭함<br>";
        }

        test2.onclick = function(){
            test1.onclick = null;
            test.innerHTML += "test1 버튼 출력함 인식 X"
        }
    </script>
```

<br>

### 이벤트 발생 객체

<br>

```html
var event = e || window.event; // ie8 버전 하위도 인식시켜줌

var event = e; // 그 외에는 이와 같은 구문으로도 가능
```

<br>

### 표준 이벤트 모델

<br>

```html
    <button id="test1">test1</button>

    <script>
        window.onload = function(){
            var test = document.getElementById("test1");

            test.addEventListener('click',function(){
                alert('버튼 클릭함');
                test.style.background = "black";
                test.style.color = "white";
                test.style.width = "200px";
                test.style.height = "200px";
            })
        }
    </script>
```

<br>

## 정규 표현식

<br>

- 자바스크립트에서의 정규표현식은 양쪽에 / 를 붙인다

<br>

```html
    <button id="test1">test1</button>
    <div id="test"></div>

    <script>
        test1.onclick = function(){
            var str = "abcd efg hi";
            var reg = /a/;
            var test = document.getElementById("test");
            test.innerHTML = reg.test(str);
        }
    </script>
```

<br>

<b>^</b> - 시작

<b>[]</b> - [] 내의 문자중 하나라도 존재할 경우

<b>$</b> - 끝

<b>.</b> - 개행문자를 제외한 모든 문자

<b>+</b> - 한 글자 이상

<b>g</b> - 전역 비교

<b>i</b> - 대소문자를 안 가림

<b>m</b> - 여러줄의 검사 수행

<b>\d</b> - 숫자

<b>\s</b> - 공백문자(탭, 띄어쓰기, 줄바꿈)

<b>\w</b> - 아무단어

<b>\D</b> - 숫자 X

<b>\S</b> - 공백문자 X

<b>\W</b> - 아무 단어 아님 

<b>a+</b> - 적어도 1개 이상

<b>a*</b> - 0개 혹은 여러 개

<b>a?</b> - 0~1개

<b>a{n}</b> - n개

<b>a{n,m}</b>  n~m 개

<b>a{n, }</b> - n개 이상

<b>a{ ,m}</b> - m개 이하
