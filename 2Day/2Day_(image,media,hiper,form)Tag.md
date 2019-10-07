목차
===============
* [이미지 태그](#이미지-태그) </br> 
* [미디어 태그](#미디어-태그) </br> 
* [하이퍼링크 태그](#하이퍼링크-태그) </br> 
* [폼 태그](#폼-태그) </br> </br> 

## 이미지 태그

</br>

<b>&lt;img&gt;</b>  - 이미지 태그

</br>

```html
<img src="경로" alt="이미지가 없다.">
<!-- ""안에 상대/절대 경로를 넣어줌으로서 이미지를 표시, alt는 사진의 경로가 없거나 잘못 
기입하였을 경우 대체 텍스트의 용도-->

<img src="경로" width="px/%" height="px/%">
<!-- 사진의 높이와 넓이 지정 가능, px는 고정된 크기, %는 화면에 따라 변화하는 사이즈-->

<img src="경로" usemap="#이름">
<map name="이름">
    <area shape="모양" coords="좌표" href="주소" target="유형">
</map>
<!-- 이미지를 구역별로 나누어 링크 설정이 가능 모양에는 사용할 도형(rect/circle/default/poly)
 좌표에는 선택한 도형에 따른 적절한 좌표를 기입, href는 해당 좌표의 위치를 클릭할 경우
 어느 주소로 이동할 지에 대한 사이트를 
 target는 새로 여는 유형인데(새 창, 부모창, 현재창, 최상위창)값으로 설정이 가능하다.->
```

</br>

## 미디어 태그

</br>

<b>&lt;audio&gt;</b> - 오디오 태그

</br>

```html
<audio src="경로" controls="controls" 
autoplay="autoplay" loop="loop"></audio>
```

</br>

<b>&lt;video&gt;</b> - 비디오 태그

</br>

```html
<video src="경로" controls="controls" 
autoplay="autoplay" poster="재생 전 출력 이미지(경로)"></video>
```

</br>

## 하이퍼링크 태그

</br>

```html
<!-- a 태그 이용 -->
<ul>
    <li><a href="경로/혹은 하이퍼링크 주소" target="창 유형">이름</a></li>
</ul>
<!-- 이름을 클릭하면 경로.html 파일 / 하이퍼링크 주소로 이동됨 -->

<!-- 이미지를 이용해서 링크를 만들수도 있음 -->
<a href="https://www.naver.com" target="_blank">
    <img src="경로" width="크기" height="크기">
</a>

<!-- 한 페이지 내에서 점프하는 앵커 -->
<ul>
    <li><a href="#이름">이름</a></li>
</ul>

<h4 id="이름">이름<h4>
```

</br>

## 폼 태그

</br>

<b>&lt;form&gt;</b> - 폼 태그

</br>

[HTML : 폼(form) 이해](http://www.nextree.co.kr/p8428/)</br></br>

```html
<form action="" method="GET"> <!-- action과 method는 생략 가능 default 값이기 때문 -->
    <label>검색할 내용</label>
    <input type="text" size="20" name="search">
<!-- text = 입력을 의미, name = 검색 시 상단 URL ?search=검색한내용으로 표기
search이름을 다른 것으로 수정하면 ?수정한이름=검색내용으로 표기됨 -->

    <input type="submit" value="검색">
<!-- submit는 제출을 의미 검색할 내용에 아무값이나 넣고 검색을 누르면
상단 url에서 ?search=검색한 내용이 나오게 됨.
value = type의 들어갈 문자 -->
</from>

<br>
</hr>

<-- 필드셋을 이용하면 폼 요소를 그룹별로 묶을 수 있다. -->
<form>
   <fieldset>
        <legend>필드 셋 이름.</legend>
        <label>입력 1 : </label><input type="text" value="기본값" plcaeholder="입력하세요">
        <br>
        <label>입력 2 : </label><input type="text"><br>
    </fieldset>
</form>
<!-- value를 통해 텍스트 상자에 기본값을 넣을 수 있다. placeholder는 옅은 색으로 안내 문구를
작성할 수 있다. -->

<br>
</hr>

<!-- 숫자 input 태그 -->
<form method="get">
    <label>수량 : </label>
    <input type="number" name="num" min="0" max="100" value="0" step="5">
    <br>
    <inputy type=range name="ran" min="0" max="100" value="35" step="5"><br>
</form>

<br>
</hr>

<!-- 날짜 태그 -->
<form method="get">
    <input type+="date/month/week/time/datetime-local"><br>
</form>

<br>
</hr>

<!-- 라디오 버튼, 체크박스 태그 -->
<form>
   <input type="radio" id="num1" name="radio1" value="dchk" checked>
   <label for="num1">라이도 박스1</label>
   <input type="radio" id="num2" name="radio2" value="nchk">
   <label for="num2">라이도 박스2</label>
<!-- id를 줌으로서 텍스트를 클릭해서 체크박스가 선택됨, checked 옵션은 기본값으로 라디오 박스1
이 체크되게 설정함 -->
<br>

    <input type="checkbox" id="num1" name="ck1" value="dchk" checked>
    <label for="num1">체크박스1</label>
    <input type="checkbox" id="num2" name="ck2" value="nchk">
    <label for="num1">체크박스1</label>
</from>

<br>
</hr>

<-- 그외 input 태그 -->
<form>
    <label>색상 선택 : </label>
    <input type="color">

    <label>파일 선택 : </label>
    <input type="file">

    <label>안보이는 태그 : </label>
    <input type="hidden" value="1">

    <button type="button>button</button> <!-- button 태그 default는 submit임 -->
</form>

<br>
</hr>

<!-- select/option 태그 -->
<form>
    <label>선택 : /label>
    <select>
        <option value="1">1</option>
        <option value="2">1</option>
        <option selected>기본ㄱㅏㅄ</option>
    </select>
</form>

<br>
<hr>

<form>
    <textarea cols="20" rows="5" style="resize:none"></textarea>
</form>
```

</br>
