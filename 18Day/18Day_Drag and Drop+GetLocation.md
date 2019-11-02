목차
=============
* [Drag and Drop](#Drag-and-Drop)<br>
* [GetLocation](#GetLocation)<br>

<br>

## Drag and Drop

<br>

### 끌기 이벤트

<b>dragstart</b> - 끌기 시작

<b>drag</b> - 끌기 도중

<b>dragend</b> - 끌기 끝

<br>

### 놓기 이벤트

<b>dragenter</b> - 놓기 영역으로 들어왔을 때

<b>dragover</b> - 놓기 영역에 있을 때

<b>dragleave</b> - 놓기 영역을 떠날 때

drop - 놓기할 때

<br>

```html
<div id="originList">
        <img id="item1" class="items" src="images/test1.jpg" draggable="true">
        <img id="item2" class="items" src="images/test2.jpg" draggable="true">
    </div>
    <div id="myList"></div>

    <script>
        var src1 = document.getElementById("originList"); 
        var src2 = document.getElementById("myList"); 
        var target1 = document.getElementById("myList"); 
        var target2 = document.getElementById("originList") 

        var srcId1, srcId2; // item의 id 저장용

        src1.ondragstart = function (e) {
            srcId1 = e.target;
        }

        // target1.ondragenter = function (e) {
        //     e.preventDefault();
        // }

        target1.ondragover = function (e) {
            e.preventDefault();
        }

        target1.ondrop = function (e) {
            $("#myList").append(srcId1);
        }


        src2.ondragstart = function (e) {
            srcId2 = e.target.id;
        }

        // target2.ondragenter = function (e) {
        //     e.preventDefault();
        // }

        target2.ondragover = function (e) {
            e.preventDefault();
        }

        target2.ondrop = function (e) {
            $("#originList").append($("#" + srcId2));
        }

    </script>
```

<br>
<hr>
<br>

## GetLocation

<br>

### 지원 여부 확인

```html
            if(window.navigator.geolocation){
                console.log("geolocation을 지원.");
            }else{
                console.log("geolocation을 지원 X.");
            }
        
```

<br>

```html
    <button>test</button>
    <div id="test1"></div>
    <script>
        $(function(){
            $("button").on("click",getGeolocation);
        });
        function getGeolocation(){
            // window.navigator.getGeolocation
            navigator.geolocation.getCurrentPosition(show,error);
        }

        function show(position){
            $("#test1").append("위도 : " + position.coords.latitude + 
            "<br>경도 : " + position.coords.longitude);
        }

        function error(test){
            if(test.code == test.PERMISSION_DENIED){
                alert('위치정보에 대한 접근 막힘');
            }

            else if(test.code == test.POSITION_UNAVAILABLE){
                alert('네트워크/GPS 연결 불가');
            }

            else if(test.code == test.TIMEOUT){                
                alert('위치 정보를 계산 시간 초과');
            }

            else if(test.code == test.UNKNOWN_ERROR){
                alert('그 외 문제');
            }
        }
    </script>
```

<br>
