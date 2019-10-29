목차
=============
* [이벤트](#이벤트)<br>
* [이벤트 선택자](#이벤트-선택자)<br>
* [메소드](#메소드)<br>
  * [Trigger 메소드](#trigger-메소드)<br><br>

## 이벤트

<br>

```html
    <button onclick="test1(event);">실행확인</button>
    <script>
        function test1(e){
            console.log(e,e.target);
        }
    </script>

    <h1 id="test">이벤트</h1>

    <script>
        $("#test").on({"mouseenter":function(){
            $(this).css("background","yellowgreen");
        }, 'mouseleave':function(){
            $(this).css("background","black");
        }});
    </script>
```

<br>

```html
    <div id="wrap">
        <h1>태그 추가</h1>
    </div>
 
    <h1>여기서도 클릭시 태그 추가</h1>
    
    <script>
        $(document).on('click','h1',add);

        function add(e){
            console.log(e.target);
            $("#wrap").append("<h1>추가</h1>");
        }
    </script>
```

<br>
<hr>
<br>

## 이벤트 선택자

<br>

<b>one()</b> - 이벤트가 한 번만 실행됨

<br>
<hr>
<br>

## 메소드

<br>

<b>mouseenter/mouseleave</b> - 마우스 오버시(자식 요소에도 접근 시 적용X)

<b>mouseover/moueout</b> - 마우스 오버시(자식 요소에도 접근 시 적용)

<b>keydown</b> -  키보드가 눌려질 때

<b>keypress</b> -  글자가 입력될 때 

<b>keyup</b> -  키보드가 떼어질 때

<b>focus</b> -  요소가 focus를 받았을 때

<b>blur</b>  -  focus 해제 시

<b>change</b> -   값이 변경되어쓸 때

<b>select</b> -   테스트 영역 블럭 시(글을 커서로 드래그 한 경우를 의미)

<b>focusin</b> -  해당 요소와 자식 요소가 포커스 시

<b>focusout</b> -  위와 반대 의미

<b>submit</b> - 제출 될 경우

<b>event.preventDefault();</b> - 이벤트 전송 막기

<br>

### Trigger 메소드

<br>

```html
    <h1>여길 누르면 숫자가 늘어남 count : <span>0</span></h1>
    <h3>여기서도 클릭 가능</h3>

    <script>
        var ct = 0;
        $(document).ready(function(){
            $("h1").on('click',function(){
                ct++;
                $("span").text(ct);
            });

            $("h3").click(function(){
                $("h1").trigger('click') 
            })
        })
    </script>
```

<br>

<b>show()</b>  - 보여주기 ()안에 숫자 혹은 'slow', 'fast' 가 들어갈 수 있음 (1000은 1초를 의미)

<b>hide()</b>  - 사라지기

<b>toggle()</b>  - 보여주고 사라지기 누를때마다 달라짐

<br>

<b>slideUp()</b>  - 숨겨주기

<b>slideDown()</b>  - 열어주기

<b>slideToggle()</b>  - 숨겨주고 열어주기

<br>
