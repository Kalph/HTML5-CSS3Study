목차
===============
* [자바 스크립트?](#자바-스크립트?)</br>
* [기본 문법](*기본-문법)<br>
* [변수](#변수)

<br><br>

## 자바 스크립트?

<br>

- 웹 페이지를 통적으로, 프로그래밍적으로 제어하기 위해 고안된 언어이다.

- 웹 브라우저에서 유일하게 사용할 수 있는 프로그래밍 언어다.

- 웹 브라우저에서 자주 사용되는 인터프리터 방식의 객체 지향 프로그래밍 언어다.

- 중요함이 점점 커질 것이다.

<br>

## 기본 문법

<br>

```js
<script>
    fuction 함수이름(){
        alert("메세지 창으로 띄우기");
        alert("hello world");
    }
</script>
```

<br>

아무 창에서 f12를 누르고 개발자 모드에서 console에 들어가면 console.log로 출력시킨 값을 볼 수 있다.

자바 스크립트 내용은 f12 콘솔에 적어도 적용된다.

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button onclick="window.alert('hello world');">hello world</button>
    <button onclick="console.log('콘솔에서 보기');">콘솔에서 보기</button>
    <h2 onmouseover="this.style.backgroundColor='black'">마우스 오버</h2>
</body>
</html>
```

<br>

<b>window.confirm()</b> - 예/아니오 값을 입력받을 수 있다.

<b>document.getElementById("");</b> - 해당 ""안의 아이디 값을 받아온다.

-> .value를 붙이면 해당 id의 값을, .innerHTML을 붙이면 해당 id 부분의 적혀진 글을 읽어온다.

<br>

<b>document.getElementById("").innnerHTML += "안녕";</b> - 해당 아이디 태그에 안녕을 작성한다.

<b>window.prompt("hi")</b> - 상단 창으로 hi를 출력시킨다. 

<b>focus()</b> - 텍스트 박스를 사용할때 해당 텍스트 박스에 초첨(마우스 커서를 띄운다)을 맞춘다.

<br>

## 변수

<br>

자바 스크립트에서의 변수 var로 선언을 한다.

선언을 하느냐의 여부에 따라서 지역/전역 변수가 나뉘어진다.

-> 함수 내부에서 호출을 할 경우 this.변수명 혹은 window.변수명으로 구분한다.

undefined - 초기값이 없다.

null - 의도적으로 변수가 참조하고 있는 값이 없음을 알린다.

<br>

* 자바 스크립트에서는 ""와 ''의 구분이 없다.

<br>
