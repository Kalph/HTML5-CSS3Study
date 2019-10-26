목차
=============
* [객체 속성 추가, 제거](#객체-속성-추가-제거)<br>
* [객체 배열](#객체-배열)<br>
* [생성자 함수](#생성자-함수)<br>
* [Instanceof 키워드](#Instanceof-키워드)<br>
* [캡슐화와 상속](#캡슐화와-상속)<br>
  * [캡슐화](#캡슐화)<br>
  * [상속](#상속)<br>
* [내장객체](#내장객체) <br> <br>


## 객체 속성 추가, 제거

<br>

```html
    <button onclick="test();">test</button>

    <script>
        function test(){
            var student = {} // 객체 선언 {} 

            // 객체 속성 추가
            student.a = "a"; 
            
            // 객체 속성 제거
            delete(student.a);
        }
    </script>
```

<br>

## 객체 배열

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function test() {
            var a = { a: "a", b: 1, c: 2 };
            var b = { a: "b", b: 1, c: 2 };

            var test = [];
            test.push(a, b);
            console.log(test);

            for (var i in test) {
                test[i].getAll = function () {
                    return this.b + this.c;
                }
            }

            console.log(test);
            var all = document.getElementById("test1");

            for (var i in test) {
                with (test[i]) {
                    all.innerHTML += a + " " + b + " " + c + " " + getAll() + "<br>";
                }
            }
        }
    </script>
```

<br>

## 생성자 함수

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function tet(a,b,c){
            this.a = a;
            this.b = b;
            this.c = c;

            this.getAll = function(){
                return this.a + this.b + this.c;
            }

            this.toString = function(){
                return this.a + " " +  this.b + " " + this.c;
            }
        }

        var obTest = [];

        function test(){
            var test1 = new tet('김구구',10,20);

            // toString 부분이 없으면 object object로 출력이 된다.
            document.getElementById("test1").innerHTML += test1;
        }
    </script>
```

<br>

## Instanceof 키워드

<br>

- 비교 연산자로 전자가 후자의 인스턴스인지를 비교한다. 맞을경우 true, 틀린 경우 false를 반환

<br>

방금 만든 생성자 코드를 이용하여 instanceof 키워드를 이용해 해당 test1이 tet의 인스턴스인지를 비교한다.

<br>

```html
document.getElementById("test1").innerHTML += " " + (test1 instanceof tet);
```

<br>

## 캡슐화와 상속

<br>

## 캡슐화

- 캡슐화를 함으로서 재사용성/가독성이 증가된다.

- 은닉화 -> 변수의 중복을 걱정할 필요가 없다.

- 지역변수를 이용하는 것으로 캡슐화를 할 수 있다.

<br>

[JavaScript 캡슐화의 필요성](https://m.blog.naver.com/PostView.nhn?blogId=andwise&logNo=221029134065&proxyReferer=https%3A%2F%2Fwww.google.com%2F)

<br>


```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function cap(a, b) {
            var aa = a;
            var bb = b;

            this.getaa = function () {
                return aa;
            }

            this.getbb = function () {
                return bb;
            }

            this.setaa = function (a) {
                aa = a;
            }

            this.setbb = function (b) {
                bb = b;
            }
        }

        function test() {
            var a = '1';
            var b = 123;

            var capsul = new cap(a, b);
            var test1 = document.getElementById("test1");

            capsul.setaa(capsul.getaa() + 1);
            
            with (capsul) {
                test1.innerHTML += getaa() + "<br>";
                test1.innerHTML += getbb() + "<br>";
            }
        }
    </script>
```

<br>

## 상속

<br>

- 자바 스크립트는 프로토타입 기반의 언어이다.

- 자바스크립트에는 Class가 존재하지 않는다. -> 일반적인 상속은 불가

- 대신  prototype라는 것이 존재함.

<br>

[상속과 프로토타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        function cap(a, b) {
            var aa = a;
            var bb = b;

            this.getaa = function () {
                return aa;
            }

            this.getbb = function () {
                return bb;
            }

            this.setaa = function (a) {
                aa = a;
            }

            this.setbb = function (b) {
                bb = b;
            }
        }


        cap.prototype.getAll = function () {
            return this.getaa() + this.getbb();
        }

        function extend(a, b, c) {
            this.base = cap;

            this.base(a, b);

            var cc = c;

            this.getcc = function () {
                return c;
            }

            this.setcc = function () {
                cc = c;
            }
        }

        // 상속 받음
        extend.prototype = new cap();
        console.log(extend.prototype);

        function test() {
            var ext = new extend('1', 123, 1234);
            document.getElementById("test1").innerHTML = ext.getAll() + " " +
                ext.getcc();
        }
    </script>
```

<br>

## 내장객체

<br>

Object 생성하는 방법

<br>

```html
// obj = {};
obj = new Object();
// 둘 중 아무 방법이나 이용하면 오브젝트 객체를 생성할 수 있다.
```

<br>

<b>hasOwnProperty()</b> - 해당 속성을 가지고 있는지 확인

<b>propetyIsEnumerable()</b> - 해당 속성은 for in문을 사용할 수 있는지 확인

<br>

```html
// 열거할 수 있는 프로퍼티란 내부적으로 enumerable 플래그가
// true로 설정 된 프로퍼티를 의미 -> for in 문으로 접근할 수 있음
// 다음과 같이 작성함으로서 enumerable을 false 설정함으로, 
// for in 문으로 접근할 수 없게 만들 수 있다.
// propertyIsEnumerable() 이용하면 false 출력 됨
Object.defineProperty(object, 'a', { enumerable: false });
console.log(object.propertyIsEnumerable('a'); // -> false 출력
```

<br>

<b>constructor()</b> - 자료형을 검사할 때 사용

<b>toFixed()</b> - 숫자를 고정 소수점 자리로 나타낸 문자열로 만든다

<br>

<b>Date()</b> - 날씨를 관리할 때 사용한다.

<br>

```html
    <button onclick="test();">test</button>
    <div id="test1"></div>

    <script>
        var test1 = document.getElementById("test1");

        var date1 = new Date(); // 현재 시간
        var date2 = new Date("Jan 5, 2019 00:00:00");

        var date3 = new Date(2019,6,31,00,00,00); // mon은 +1이 되므로 실제로는 7월을 의미


        test1.innerHTML+= date2 + "<br>";
        test1.innerHTML+= date3 + "<br>";
    </script>
```

<br>

<b>&lt;Date()&gt;</b>
<b>- getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTimezoneoffset(), getTime()</b>

<br>
