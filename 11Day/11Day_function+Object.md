목차
=============
* [함수](#함수)<br>
  * [선언적 함수](#선언적-함수)<br>
  * [익명 함수](#익명-함수)<br>
  * [익명 함수를 리턴하는 함수](#익명-함수를-리턴하는-함수)<br>
  * [내장 함수](#내장-함수)<br>
    * [인코딩 디코딩 내장함수](#인코딩-디코딩-내장함수)<br>
* [객체](#객체) <br> <br>

## 함수

- 함수도 하나의 자료형이므로 매개변수로 전달이 가능하다.

<br>

### 선언적 함수

<br>

```html
    <button onclick="myRoom(test);">집</button>
    <script>
        function myRoom(test2){
            for(var i=10; i>0; i--){
                test2(i);
            }
            alert("10!!!!!");
        }

        function test(i){
            if(i>5){
                alert(i+"클릭!");
            }
        }
    </script>
```

<br>

### 익명 함수

<br>

```html
    <div id="test"></div>

    <script>
        function call(test){
            for(var i=0; i<10; i++){
                test(i);
            }
        }

        call(function(i){
            document.getElementById("test").innerHTML += (i) + "<br>";
        });
    </script>
</body>
</html>
```

<br>

### 익명 함수를 리턴하는 함수

<br>

```html
    <button onclick="test()();">익명함수</button>
    <script>
        function test() {
            return function () {
                alert("익명함수");
            }
        }
    </script>
```

<br>



### * 함수

선언 된 함수 내부에서 리턴하는 함수를 이용하면 생명 주기가 끝난 함수를 참조할 수 있다.

<br>

## 내장 함수

<br>

### 인코딩 디코딩 내장함수

-> 웹 통신 시 유니코드는 오작동을 일으킬 수 있으므로 인코딩이 필요하다.

- 가장 많이 사용되는 인코딩 방식은 encodeURIComponent 이다.

<br>


[[javascript] 3. 자바스크립트 내장 함수](https://doitnow-man.tistory.com/127)

<br>

```html
<button onclick="test();">인코딩 디코딩</button>
    <div id="test"></div>
    <script>
        function test(){
            var URI = "http://www.naver.com";

            var esURI = escape(URI);
            var enURI = encodeURI(URI);
            var enURIC = encodeURIComponent(URI);

            var test = document.getElementById("test");

            test.innerHTML = "";
            test.innerHTML += "원본 : " + URI + "<br>";
            test.innerHTML += "escape : " + esURI + "<br>";
            test.innerHTML += "encodeURI : " + enURI + "<br>";
            test.innerHTML += "encodeURICOmponent : " +enURIC + "<br>";

            test.innerHTML += "unescape : " + unescape(esURI) + "<br>";
            test.innerHTML += "decodeURI : " + decodeURI(enURI) + "<br>";
            test.innerHTML += "decodeURICOMPONENt : " + decodeURIComponent(enURIC) + "<br>";
        }
    </script>
```

<br>

## 객체
<br>

```html
<button onclick="test();">객체</button>
    <div id="test"></div>
    <script>
        function test() {
            var tet = document.getElementById("test");

            var test1 = {
                a: "a",
                b: "b",
                c: ['a', 'b'],
                "my Room": "my Room",
                '!@#()' : 123456,
                room : function(name){
                    tet.innerHTML += name + " 건물주가 나타났다!";
                }
            }

            tet.innerHTML = "";

            tet.innerHTML += test1.a + "<br>";
            tet.innerHTML += test1['a'] + "<br><br>";

            tet.innerHTML += test1.c[0] + "<br>";
            tet.innerHTML += test1['c'][1] + "<br><br>";

            tet.innerHTML += "공백이 있거나 특수 기호라면 대괄호를" 
            + " 이용해 접근해야 한다 <br>";
            tet.innerHTML += test1['my Room'] + "<br>";
            tet.innerHTML += test1['!@#()'] + "<br>";

            test1.room('김구구');

            tet.innerHTML += "<br><br><br>"

            tet.innerHTML += "반복문을 사용하기<br>";

            var test2 = {
                name : "김구구",
                type : "착함",
                male : "M",
                here : true
            }

            for(var key in test2){
                tet.innerHTML += key + " : " + test2[key] + "<br>";
            }

            tet.innerHTML += "건물주의 이름은 김구구인가? : " + ('김구구' in test2);
            tet.innerHTML += "<br><br><br>"

            with(test2){
                tet.innerHTML += "건물주 : " + name + "<br>";
                tet.innerHTML += "성격 : " + type + "<br>";
                tet.innerHTML += "성별 : " + male + "<br>";
                tet.innerHTML += "여기 있나? : " + here + "<br>";
            }
        }
    </script>
```

<br>
