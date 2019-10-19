```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        header,nav,section,article,aside,footer {
            border: 1px solid red;
            box-sizing: border-box;
        }

        body {
            width: 1000px;
            height: 800px;
            margin: auto;
        }

        header {
            width: 100%;
            height: 20%;
        }

        nav {
            width: 100%;
            height: 5%;
            border: 3px solid deepskyblue;
        }

        #content {
            width: 100%;
            height: 55%;
        }

        footer {
            width: 100%;
            height: 20%;
        }

        header>section{
            float: left;
        }

        #header-1{
            width: 25%;
            height: 100%;
            border: 2px solid orange;
        }

        #header-2{
            width: 50%;
            height: 100%;
            border: 2px solid orange;
        }

        #header-3{
            width: 25%;
            height: 100%;
            border: 2px solid orange;
        }

        #content>aside{
            width: 25%;
            height: 100%;
            float: left;
            border: 2px solid orange;
        }

        #content-1{
            width: 50%;
            height: 100%;
            float: left;
            border: 2px solid orange;
        }

        #content-2{
            width: 25%;
            height: 100%;
            float: left;
            border: 2px solid orange;
        }

        #content>#content-2>header{
            width: 100%;
            height: 30%;
            border: 3px solid green;
        }

        #content>#content-2>article{
            width: 100%;
            height: 70%;
            border: 3px solid green;
        }
        
        
    </style>
</head>

<body>
    <header>
        <section id="header-1"></section>
        <section id="header-2"></section>
        <section id="header-3"></section>
    </header>

    <nav></nav>

    <section id="content">
        <aside></aside>
        <section id="content-1"></section>
        <section id="content-2">
            <header></header>
            <article></article>
        </section>
    </section>
    <footer></footer>
</body>

</html>
```
