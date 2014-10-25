<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- <link rel="stylesheet" href="resources/css/jquery.mobile-1.4.4.css"/>-->
        <link rel="stylesheet" type="text/css" href="resources/css/flat-ui/jquery.mobile.flatui.css" />
        <title></title>
    </head>
    <body>

        <!-- *************************** PAGINA 1 -->
        <div data-role="page" id="index"  >
            <div data-role="header">
                <h1>Hoteles </h1>
            </div>
            <div role="main" class="ui-content">
                <ul data-role="listview" id="categoriesList" data-inset="true"></ul>
            </div>
            <div data-role="footer" data-position="fixed">
                <h1>Footer</h1>
            </div>    
        </div>

        <!-- *************************** PAGINA 2/ Listado hoteles -->
        <div data-role="page" id="hotelsByCategory" data-add-back-btn="true">
            <div data-role="header">
                <a href="#index" data-role="button" data-transition="slide">Volver</a>
                <h1>Hoteles <span id="categoryName"></span></h1>
            </div>
            <div data-role="content">
                <ul data-role="listview" id="hotelsList" data-inset="true"></ul>
            </div>
        </div> 

        <!-- *************************** PAGINA 3/ Ficha Jugadores -->
        <div data-role="page" id="hotelDetail" data-add-back-btn="true">
            <div data-role="header">
                <a id="goToHotelsListBtn" data-role="button" data-transition="slide">Volver</a>
                <h1 id="hotelName" style="text-align: center"></h1>
            </div>
            <div data-role="content">       
                <div id="mainImageContainer">
                </div>
            </div>
        </div>




        <script src="libs/js/jquery/jquery-2.1.1.js"></script>
        <script src="libs/js/jqueryMobile/jquery.mobile-1.4.4.js"></script>
        <script src="libs/js/index.js"></script>
    </body>
</html>
