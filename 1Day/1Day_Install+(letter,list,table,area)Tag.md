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

### 확장 기능 설치

korean - 한국어 패치

html snippets - 태그 자동 완성

auto rename - 시작 태그 수정시 종료 태그도 자동 수정

live html previewer - 실시간 코드 작성 결과물 확인 가능 - f1단축키 후 preview 검색으로 확인 가능

</br> 

### HTML5 기본 형태

html만 입력 후 5에 맞게 엔터를 치면 자동 완성이 되는 기능도 있음.

&lt;html&gt; : html 문서의 내용을 정의

lang : 페이지의  언어를 표시

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<!-- 주석을 적을때 사용한다.-->
    
</body>
</html>
```

</br> 

## 글자 태그

</br> 

<b>&lt;hn&gt;</b> - 글 크기

<b><></b> - <>를 의미

<b>&lt;br&gt;</b> - 줄 바꿈

<b>&lt;hr&gt;</b> - 문단 나눔

<b>&lt;b&gt;</b> - 글자를 굵게 만들기

<b>&lt;strong&gt;</b> - 글자를 굵게 만들기 (스크린 리더를 사용하는 경우 음성에서도 강조가 됨)

<b>&lt;i&gt;</b> - 글자 기울이기

<b>&lt;em&gt;</b> - 글자 기울이기(음성에서 강조)

<b>&lt;blockquote&gt;</b> - 인용 문구를 나타내는 

<b>&lt;blocakquote cite=""&gt;</b> - 인용된 사이트 주소를 나타냄 (직접 표시는 안되나 검색 엔진에 노출)

<b>&lt;q&gt;</b> - ""으로 인용 문구를 나타냄

<b>&lt;mark&gt;</b> - 형광펜 마킹 효과

<b>&lt;u&gt;</b> - 밑줄을 그어줌

<b>&lt;small&gt;</b> - 글자를 작게 표시함

<b>&lt;sup&gt;</b> - 윗첨자

<b>&lt;sub&gt;</b> - 아래첨자

<b>&lt;s&gt;</b> - 취소선

<b>&lt;abbr title=""&gt;</b> - 마우스 오버 시 튤팁 형태로 출력

<b>&lt;cite&gt;</b> - 참고한 문서를 이텔릭채로 나타냄

<b>&lt;pre&gt; &lt;code&gt;</b> - 컴퓨터 인식을 위한 소스코드를 담는 

<b>&lt;kdb&gt;</b> -   입력 내용을 표시

</br> 

## 목록 태그

</br> 

<b>&lt;ul&gt;&lt;li&gt;</b> - 순서 없는 목록 태그 (ul>li*n로 한 번에 n개 생성해서 작성 가능)

<b>&lt;ol&gt;&lt;li&gt;</b> - 순서 있는 목록 태그 (ol>li*n으로 한 번에 n개 생성해서 작성 가능)

type = "" - a,b,i,I

reversed="reversed"

</br> 

## 표 태그

<b>&lt;table&gt;&lt;caption&gt;&lt;tr&gt;&lt;th&gt;</b> - 테이블, tr은 한 개의 행을 만듬, th는 한 개의 열을 만듬(가운데 정렬 및 굵게 표시됨), caption은 제목을 추가함

<b>&lt;figure&gt;&lt;figcaption&gt;</b> - 테이블의 설명 혹은 img 설명에 사용

<b>&lt;table&gt;&lt;thead&gt;&lt;tbody&gt;lt;tfoot&gt;</b> - 테이블의 구조를 설정

</br> 

## 영역 태그

</br> 

<b>&lt;div&gt;</b> - 영역 태그(줄 바꿈 형태로 영억이 설정)

<b>&lt;span&gt;</b> - 영역 태그(옆으로 영역이 설정됨)

<b>&lt;iframe&gt;</b> - 웹 문서 안에 다른 웹 페이지나 동영상을 추가하는 태그

</br> 

```html
    <h3>iframe</h3>
    <p>웹 문서 안에 다른 웹 페이지를 추가하는 태그(inline 형식)</p>
    <iframe width="400" height="300" src="https://www.youtube.com/embed/yx7cCPUIe0c"></iframe>
    <br>
    <iframe width="1200px" height="800px" src="https://www.naver.com" frameborder="0"></iframe>
```

<br>

네이버나 구글과 같은 사이트는 페이지를 가져오는게 불가능한 듯. -> 메인 페이지들은 대부분이 거부됨

</br> 
