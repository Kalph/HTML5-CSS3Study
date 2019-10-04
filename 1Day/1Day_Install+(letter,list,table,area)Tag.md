목차
===============
* [설치](#설치) </br> 
* [글자 태그](#글자-태그) </br> 
* [목록 태그](#목록-태그) </br> 
* [표 태그](#표-태그) </br> 
* [영역 태그](#영역-태그) </br> </br> 

## 설치

</br> 

[Visual Studio Code] (https://code.visualstudio.com/)

</br> 

해당 링크 이동 후 updates -> User의 1.28버전 다운로드

</br> 

User - 해당 OS만 설치

Systeml - 해당 전체 설치

</br> 

#### 확장 기능 설치

korean - 한국어 패치

html snippets - 태그 자동 완성

auto rename - 시작 태그 수정시 종료 태그도 자동 수정

live html previewer - 실시간 코드 작성 결과물 확인 가능 - f1단축키 후 preview 검색으로 확인 가능

</br> 

#### HTML5 기본 형태

html만 입력 후 5에 맞게 엔터를 치면 자동 완성이 되는 기능도 있음.

<html> : html 문서의 내용을 정의

lang : 페이지의  언어를 표시

```html5
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<!-- 주석을 적으려면 <!-- -->를 사용하면 된다.-->
    
</body>
</html>
```

</br> 

## 글자 태그

</br> 

<hn> - 글 크기

&lt;&gt; - <>를 의미

<br> - 줄 바꿈

<hr> - 문단 나눔

<b> - 글자를 굵게 만들기

<strong> - 글자를 굵게 만들기 (스크린 리더를 사용하는 경우 음성에서도 강조가 됨)

<i> - 글자 기울이기

<em> - 글자 기울이기(음성에서 강조)

<blockquote> - 인용 문구를 나타내는 

<blocakquote cite="">- 인용된 사이트 주소를 나탸냄 (직접 표시는 안되나 검색 엔진에 노출)

<q> - ""으로 인용 문구를 나타냄

<mark> - 형광펜 마킹 효과

<u> - 밑줄을 그어줌

<small> - 글자를 작게 표시함

<sup> - 윗첨자

<sub> - 아래첨자

<s> - 취소선

<abbr title=""> - 마우스 오버 시 튤팁 형태로 출력

<cite> - 참고한 문서를 이텔릭채로 나타냄

<pre><code> - 컴퓨터 인식을 위한 소스코드를 담는 

<kdb> -   입력 내용을 표시

</br> 

## 목록 태그

</br> 

<ul><li> - 순서 없는 목록 태그 (ul>li*n로 한 번에 n개 생성해서 작성 가능)

<ol><li> - 순서 있는 목록 태그 (ol>li*n으로 한 번에 n개 생성해서 작성 가능)

type = "" - a,b,i,I

reversed="reversed"

</br> 

## 표 태그

<table><caption><tr><th> - 테이블, tr은 한 개의 행을 만듬, th는 한 개의 열을 만듬(가운데 정렬 및 굵게 표시됨), caption은 제목을 추가함

<figure><figcaption> - 테이블의 설명 혹은 img 설명에 사ㅛ용

<table><thead><tbody><tfoot> - 테이블의 구조를 설정

</br> 

## 영역 태그

</br> 

div - 영역 태그(줄 바꿈 형태로 영억이 설정)

span - 영역 태그(옆으로 영역이 설정됨)

iframe - 웹 문서 안에 다른 웹 페이지나 동영상을 추가하는 태그

</br> 

```html5
    <h3>iframe</h3>
    <p>웹 문서 안에 다른 웹 페이지를 추가하는 태그(inline 형식)</p>
    <iframe width="400" height="300" src="https://www.youtube.com/embed/yx7cCPUIe0c"></iframe>
    <br>
    <iframe width="1200px" height="800px" src="https://www.naver.com" frameborder="0"></iframe>
```

네이버나 구글과 같은 사이트는 페이지를 가져오는게 불가능한 듯. -> 메인 페이지들은 대부분이 거부됨

</br> 
