목차
=============
* [LocalStorage](#LocalStorage)<br>
* [FileAPI](#FileAPI) <br>
* [BootStrap](#BootStrap) <br>

<br>

## LocalStorage

<br>

- 웹에서 데이터를 저장하는 방법 중 서버가 아닌 클라이언트에서 저장하는 방법

- 보통 클라이언트 저장소는, 쿠키 저장소를 떠올리나 HTML5에는 효과적인 클라이언트 저장 공간을 제공한다.

- 웹 스토리지는 사용자 측에서 좀더 많은 양의 정보(최소 5MB 이상의 공간)을 안전하게 저장할 수 있도록 한다.

- 이 정보는 절대 서버로 전송되지 않는다.

<br>

<b>localStorage</b> - 보관기간이 없는 데이터를 저장(브라우저 탭이 닫히거나, 컴퓨터를 종료해도 저장 된 데이터는 없어지지 않음

<b>sessonStorage</b> - 브라우저 탭이나 창을 닫으면 데이터가 소멸

<br>

```html
    <button id="test1">test</button>
    <button id="test2">test2</button>
    
    <div id="test1"></div>
    <script>
        if(window.localStorage){
            console.log("localstorage 지원되는 브라우저.");
        }else{
            console.log("localstorage 지원 안되는 브라우저.");
        }

        localStorage.home = "myHome"
        localStorage['room'] = "two";
        localStorage.setItem("apartment","me");

        sessionStorage.Login = "Kimgu";
        sessionStorage['LogId'] = "kimgou1234";
        sessionStorage.setItem('loginDate', new Date());

        for(var i=0; i<localStorage.length; i++){
            console.log(localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)));
        }

        for(var i=0; i<sessionStorage.length; i++){
            console.log(sessionStorage.key(i) + " : " +sessionStorage.getItem(sessionStorage.key(i)));
        }

        $("#test1").on('click',function(){
            localStorage.removeItem('home');
            sessionStorage.removeItem('Login');
        });

        $("#test2").on('click',function(){
            localStorage.clear();
            sessionStorage.clear();
        })
    </script>
```

<br>

<hr>

<br>

## FileAPI

<br>

```html
    <input type='file' id="test1">
    <div id="test"></div>
    <script>
        $("#test1").change(function(){
            if(this.files && this.files[0]){
                var reader = new FileReader();

                reader.readAsText(this.files[0]);
                // reader.readAsDataURL(this.files[0]);

                reader.onload = function(){
                    $("#test").text(reader.result);
                    // $("#test").html("<img src=" + reader.result + ">");
                }
            }
        });
    </script>
```

<br>

<hr>

<br>


## BootStrap

- 트위터에서 개발한 UI 라이브러리, 디자인 개발 시간 단축 가능

<br>

[Bootstrap](https://getbootstrap.com/)

<br>


### 다운 방법

<br>

직접 다운 후 -> link,script 방법

<br>

```html
<link rel="stylesheet" href="css/bootstrap.css">
<script type="text/javascript" src="js/bootstrap.js"></script>
```

<br>

온라인 상에 연결되어 있다면 CDN 방식

<br>

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
```

<br>

* 스크립트를 상위에 넣지 않고 body -> 다음에 넣어주면 페이지를 걸리는 시간을 단축 가능

<br>
