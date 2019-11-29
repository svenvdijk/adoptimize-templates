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

    <div class="adoptimize-container">
        <div class="image-wrapper">
            <div class="image"></div>
        </div>
        <div class="content-wrapper">
            <h2 class="ad-title">Hier een title</h2>
            <p class="ad-subtitle">Hier een subtitle</p>
        </div>
    </div>

    <script>
        document.getElementsByClassName('ad-title')[0].innerHTML = 'Deze titel is vervangen';
    </script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script type="text/javascript" src="./js/script.js"></script>

</body>
</html>