목차
===============
* [CSS 선택자](#css-선택자) </br> 
* [선택자 우선순위](#선택자-우선순위) </br> 
* [글꼴 스타일](#글꼴-스타일) </br> </br>

ctrl + k + f - 드래그 후 사용하면 자동 줄맞춤

ctrl / - 주석 단축키

</br>

CSS선택자

- 스타일을 지정해주고자 할 때 사용하는 것을 선택자라 한다.

</br>

[반드시 기억해야 하는 CSS 선택자 30개](https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

</br></br>

### <태그 선택자> -  태그 이름 {}

<b>[=]</b> - 속성 값이 특정 값인 태그

<b>[~=]</b> - 속성 같이 특정 값을 단어로 포함하는 태그

<b>[|=]</b> - 앞의 단어가 포함("-"로 구분)

<b>[^=]</b> - 특정 값으로 시작하는 태그

<b>[$=]</b> - 특정 값으로 끝나는 태그

<b>[*=]</b> - 특정 값으로 끝나는 태그

<b>input[type='checkbox']:checked - input태그의 체크박스가 체크될 경우를 의미</b>

</br>

### <아이디 선택자> - #이름 {}

<b>></b> - 자손 의미(#id>ul>li 이런 방식으로도 사용 가능)

<b>아이디 후손이름</b> - 후손 의미

<b>+</b> - 선택자 바로 뒤의 요소

<b>~</b> - 선택자 뒤에 있는 모든 요소

<b>:active</b> - 클릭한 태그

<b>:hover</b> - 마우스 오버한 태그

<b>:focus</b> - 초점이 맞춰질 경우

<b>:disabled</b> - 사용 불가능 옵션

<b>:enabled</b> - 사용 가능 옵션

</br>

### <클래스 선택자>  - .클래스이름 {}

</br>

<b>#아이디 태그:first-child</b> - 아이디의 형재 태그의 첫 번째 태그 

<b>#아이디 태그:last-child</b> - 아이디의 형재 태그의 마지막 태그 선택

<b>#아이디 태그:nth-child(2n)</b> - 아이디의 형제 태그의 앞에서 2번째 태그 선택

<b>#아이디 태그:nth-last-child(2)</b> - 아이디의 형태 태그의 뒤에서 4번째 태그 선택

<b>#아이디 태그:first-of-type</b> - 첫 번째 태그

<b>#아이디 태그:last-of-type</b> -  마지막 태그

<b>#아이디 태그:nth-of-type(2n)</b> -  2번째 태그

<b>#아이디 태그:nth-last-of-type(2)</b> -  마지막에서 2번째 태그

<b>#아이디 태그:first-letter</b> - 첫 번재 글자

<b>#아이디 태그:first-line</b> - 첫 번째 줄

<b>#아이디 태그:after</b> - 태그 뒤의 공간 선택

<b>#아이디 태그:before</b> - 태그 앞 공간 선택

<b>#아이디 태그::selection</b> - 드래그 의미

<b>#아이디 태그:nth-child(2n-1)</b> - 홀수 의미

<b>#아이디 태그:not(:nth-child(2n-1))</b> - 홀수 아닌 것을 의미 부정 선택자

</br>

* child는 일반 구조 선택자

* type는 형태 구조 선택자

</br>

## 선택자 우선순위

* 태그선택자 < 클래스선택자 < 아이디선택자 < 인라인스타일 <!important 순서로 우선순위를 가진다

</br>

## 글꼴 스타일

font-family : "글꼴"; 

</br>

외부 글꼴 적용도 가능 

ex)<link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" rel="stylesheet">

</br>

<b>font-size:</b> - 사이즈 지정 ex) 10px, 2em, 10%

<b>font-weitht:</b>  - 두꺼운 글꼴 스타일 ex)bold, lighter, bolder, 500

<b>font-varient:</b> - 작은 대문자로 변경 ex)small-cap

<b>font-style:</b> - 기울임꼴 지정 ex)italic, oblique

<b>font</b> - 스타일 한 번에 지정 ex) font : italic bold 16px/25p "고딕체"

</br>
