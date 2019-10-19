목차
===============
* [트랜지션](#트랜지션)</br>
* [애니매이션](#애니매이션)</br>
* [네비게이션](#)</br>
* [아코디언](#변형)</br>
* [외부 스타일 시트 링크 걸기](#외부-스타일-시트-링크-걸기)</br> </br>

## 트랜지션

<br>

- 애니매이션의 속도를 조정할 때 쓰인다. 탭을 서서히 보이게 하거나, 특정 바를 점진적으로 보이게 할 때도 쓰임.

<br>

<b>transition duration</b> - 트랜지션이 진행되는 시간을 지정

<b>transition-property</b> - 트랜지션을 적용할 속성을 선택하여 여러개를 선택할 경우, 로 구분 

-> transition-property: background-color, transform, width, height; 

-> all로 축약 가능)

transition-timing-function -

<br>

## 애니매이션

<br>

```html
선언 방법 :  @keyframe 이름{}

    <style>
        @keyframes ani1{
            from{}
            to{}
        }

        @keyframes ani2{
            0%{}
            30%{}
            100%{}
            /* nn% */
        }
    </style>

/* 위와 같은 두 가지의 방법으로 애니매이션을 만들 수 있다. */
```

<br>

이후 애니매이션을 적용하려면 

다음과 같은 옵션을 사용한다.

<br>

<b>animation-name: 이름;</b> - keyframes에서 선언한 이름 작성 

<b>animation-duration: 숫자s;</b> - 실행 시간 지정

<b>animation-iteration-count: 숫자;</b> - 반복 횟수 지정

<b>animation-direction: 옵션;</b> - 구동 방법 지정(일반, 끝에서 역순으로 되돌아오기, 역순 반복);

<br>

혹은 이를 축약시켜서 다음과 같이 사용하는 것도 가능하다.

<br>

<b>animation 이름 숫자s 숫자 옵션;</b>

<br>

## 네비게이션

<br>

[티스토리 네비게이션 바(Navigation Bar) 만들기 (html, css, js)](https://hongku.tistory.com/379)

<br>


## 아코디언

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
        header,
        aside,
        footer,
        section,
        article,
        nav {
            box-sizing: border-box;
            border: 1px solid #000;
        }

        body{
            padding: 10px;
            width: 500px;
            border: 1px solid #000;
        }

        #content h2 a{
            display: block;
            text-decoration: none;
            background-color: rgb(214, 73, 202);
            color: white;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
            border: 1px solid #000;
            box-shadow: 2px 2px 2px 2px gray;
        }

        #content h2 a:hover,
        #content h2 a:active{
            background-color: rgba(53, 46, 46, 0.192);
            color : black;
            overflow: auto;
        }

        #content p{
            padding: 0;
            margin: 0 10px;
            height: 0;
            overflow: hidden;
            transition: height ease-in 0.5s;
        }        
        
        #content :target p{
            overflow: auto;
            height: 100px;
        }
    </style>
</head>

<body>
    <header id="header">
        <h2>일반 게시판</h2>
    </header>
    <section id="content">
        <div id="1번 게시판">
            <h2><a href="#1번 게시판">1번 게시판</a></h2>
            <p>
            살았으며, 두손을 전인 능히 가진 못할 있다. 같이, 구하지 심장은 장식하는 속에서 가슴에 봄바람이다. 생생하며, 많이 스며들어 창공에 아름다우냐?
            품었기 피가 끓는 거친 동산에는 얼음과 것이다. 때까지 인도하겠다는 따뜻한 인간의 두손을 사는가 귀는 운다. 길지 찾아다녀도, 대중을 있는 우리 뿐이다.
            같은 뜨거운지라, 사라지지 커다란 대한 굳세게 곳으로 봄바람이다. 귀는 착목한는 바이며, 약동하다. 두손을 반짝이는 꽃 이는 오아이스도 별과 곧 남는 길을
            것이다. 가는 청춘의 바로 안고, 자신과 옷을 곳이 가치를 날카로우나 봄바람이다. 앞이 목숨을 바이며, 우리 위하여 가슴이 이것이야말로 석가는 못할 것이다.
            </p> 
        </div>
        <div id="2번 게시판">
            <h2><a href="#2번 게시판">2번 게시판</a></h2>
            <p>
            가는 쓸쓸한 구하기 그것을 구하지 바이며, 끓는다. 사랑의 인생을 청춘 인간의 인도하겠다는 열매를 끓는다. 아니한 불어 천지는 쓸쓸하랴? 때에, 산야에
            무엇이 있는가? 못할 붙잡아 것은 너의 있는 그들은 목숨이 있는 위하여서, 때문이다. 찬미를 이상은 꾸며 기쁘며, 광야에서 보내는 품으며, 긴지라 피다.
            사라지지 그들의 꽃이 사막이다. 보는 이것이야말로 일월과 피에 인류의 교향악이다. 바이며, 심장은 모래뿐일 소금이라 가진 보배를 풀이 힘있다. 하는
            이것을 얼음 바로 끓는 그와 뭇 온갖 철환하였는가? 청춘 주며, 얼음 원대하고, 이상을 있는가?
            </p> 
        </div>
        <div id="3번 게시판">
            <h2><a href="#3번 게시판">3번 게시판</a></h2>
            <p>
            안고, 모래뿐일 용감하고 봄바람이다. 천자만홍이 맺어, 이상은 있는가? 황금시대를 내는 전인 인간의 못할 것은 무엇이 두기 것이다. 구하기 이는 동산에는
            봄날의 그들은 시들어 인간은 뿐이다. 무엇을 끝에 인간의 그림자는 피는 관현악이며, 힘차게 용감하고 뿐이다. 커다란 얼마나 품으며, 봄바람이다. 같지
            그들의 것이다.보라, 위하여서 인간이 칼이다. 하는 것은 충분히 않는 웅대한 청춘의 대중을 듣는다. 군영과 발휘하기 주는 것은 뿐이다. 그러므로 평화스러운
            전인 봄날의 두기 얼마나 뿐이다. 갑 기관과 청춘이 영원히 가슴에 봄바람이다.
            </p>
        </div>
        <div id="4번 게시판">
            <h2><a href="#4번 게시판">4번 게시판</a></h2>
            <p>
            과실이 속잎나고, 고행을 풍부하게 귀는 때까지 방황하여도, 곳이 두기 듣는다. 할지라도 용감하고 가지에 피가 목숨을 낙원을 주는 두기 힘있다. 동력은 불러
            타오르고 스며들어 놀이 풍부하게 것이다. 우리의 이상의 이상 밥을 힘있다. 그들의 맺어, 생명을 황금시대를 구하지 그들의 아름답고 것이다. 아름답고 청춘
            오아이스도 위하여 반짝이는 속에서 긴지라 인생을 두손을 것이다. 것은 불러 얼음과 같은 위하여서. 청춘의 보배를 위하여 사라지지 그러므로 뭇 같이, 위하여서,
            것이다. 평화스러운 이것을 보배를 이상의 그들의 아니다. 튼튼하며, 기쁘며, 힘차게 얼마나 목숨이 얼마나 같은 말이다. 투명하되 뭇 위하여, 사랑의 황금시대다.
            </p>
        </div>
    </section>
</body>

</html>
```

<br>



### 외부 스타일 시트 링크 걸기

해당 경로에 css 파일을 만들고 아래와 같이 html 파일에 링크를 걸어줌으로서

외부 스타일에서의 시트 링크를 걸수 있다.

&lt;link href="resources/css/main.css" rel="stylesheet" type="text/css"&gt;

​
