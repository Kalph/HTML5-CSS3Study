목차
=============
* [jQuery](#jQuery)<br>
* [설치](#설치)<br>
* [실행](#실행)<br>
* [속성 선택자](#속성-선택자)<br> <br>

## jQuery

<br>

- 자바스크립트의 생산성을 향상시켜주는 라이브러리이다.

- 자바스크립트를 이용하는 것 보다 10배 이상의 생산성을 높일 수 있다.

- 적은 양의 코드로 빠르고 다양한 기능을 제공한다.

<br>

## 설치

<br>

[jQuery](jquery.com/)

<br>


 -> download 

<br>

Download the compressed, production jQuery 3.4.1

Download the uncompressed, development jQuery 3.4.1

<br>

위와 같이 두 가지의 이름이 존재한다. 전자는 용량이 적고, 후자는 용량이 큰 대신에 눈에 보이는 코드들로 아루어져 있다. 이 중 하나를 선택해 ctrl+s 를 통해 경로를 잡아 저장시키고

<br>

아래와 같은 방식을 통해 링크를 걸어주면 된다.

<br>

```html
<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
```

<br>

* CDN 방식 - 

Download로 이동하고 페이지를 내리면

다음과 같은 CDN 주소를 볼 수 있다.

<br>

* Google CDN

* Microsoft CDN

* CDNJS CDN

* jsDelivr CDN

<br>

이는 해당 네트워크에서 전송을 받는 것으로 해당 URL로 이동후 적절한 버전을 복사하여

<br>

다음과 같이 링크를 걸어주면 된다.

<br>

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

<br>

## 실행

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
            background: palegreen;
        }
    </style>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
    <button id="test1">test1</button>
    <div id="test"></div>

    <script>
        $(document).ready(function(){
            $("div").css("backgroundColor","blue");
        });
    </script>
</body>

</html>
```

<br>

## 속성 선택자

<br>

<b>=</b> - 특정 소성 값과 같은 객체 선택

<b>~=</b> - 속성 안의 값이 특정 <b>단어</b>를 포함

<b>^=</b> - 속성 안의 값이 특정 단어로 시작

<b>$=</b> - 속성 안의 값이 특정 단어로 종료

<b>*=</b> - 속성 안의 값이 특정 <b>값</b>을 포함

  
