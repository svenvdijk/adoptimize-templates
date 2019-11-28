<?php 
header("Access-Control-Allow-Origin: *");

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
</head>
<body>
    <div class='automotive automotive-luxe automotive-luxe--slider automotive-slider'>
        <div class='container'>
            <div class="header-wrapper">
                <div class="logo-container">
                    <a class="logo-link" href="https://www.vwbedrijfswagens.nl">
                        <img src="./assets/logo.png" alt="logo" style="width: 40px; height: 40px;">
                    </a>
                </div>
                <div class="label-container">
                    <span class="adoptimize-label label--right">Uit je regio</span>
                </div>
            </div>
            <div class='image-wrapper'>
                <ul class='slider'>
                    <li class='slider-item'>
                        <img src="https://www.svenvandijk.com/test/assets/image01.png" height="110px" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="https://www.svenvandijk.com/test/assets/image02.png" height="110px" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="https://www.svenvandijk.com/test/assets/image03.png" height="110px" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="https://www.svenvandijk.com/test/assets/image04.png" height="110px" alt="">                        
                    </li>
                </ul>
            </div>
            <div class='content-wrapper'>
                <header class='teaser-title'>Alle modellen <br> vanaf € 12.950 excl. btw</header>
                <a href="https://ad.nl" class="btn btn-automotive btn-color">Shop nu</a>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script type="text/javascript" src="./js/script.js"></script>

</body>
</html>