$(function () {
    var hotels = {};
    (function (app) {

        app.init = function () {
            app.Bindings(); // funcion donde se colocan las llamadas para el desarrollo
            app.CreateStarsList(); //fuerza carga de lista en el index. Auto-ejecutable
        };

        app.CreateStarsList = function () {

            $.getJSON("libs/js/json/categories.json", function (data) {
                var categoriesContent = '';
                $.each(data, function (index, category) {
                    categoriesContent += '<li><a href="#hotelsByCategory?id=' + category.id + '" data-transition="slide">' + category.name + '</a></li>';
                });

                $('#categoriesList').html(categoriesContent).listview('refresh');

            });
        };

        // Dentro de la funcion Bindings van las llamadas a las funciones del desarrollo integro
        app.Bindings = function () {

            $('body').pagecontainer({
                beforechange: function (event, ui) {
                    var nextPage = ui.absUrl.split('#')[1].split('?')[0];
                    var urlParam = ui.absUrl.split('#')[1].split('?')[1];
                    switch (nextPage) {
                        case "hotelsByCategory":
                            var categoryId = urlParam.split('=')[1];
                            app.ShowHotelsByCategory(categoryId);
                        case "hotelDetail":
                            var hotelId = urlParam.split('=')[1];
                            app.ShowHotelDetal(hotelId);
                    }
                }
            });
        };

        app.ShowHotelsByCategory = function (categoryId) {
            $.getJSON("libs/js/json/hotels.json", function (data) {
                var hotelContent = '';
                $.each(data, function (index, hotel) {
                    if (hotel.categoryId.toString() === categoryId.toString()) {
                        hotelContent += '<li><a href="#hotelDetail?id=' + hotel.id + '" data-transition="slide">' + hotel.name + '</a></li>';
                    }
                });
                $('#hotelsList').html(hotelContent).listview('refresh');
            });
        };
        
        app.ShowHotelDetal = function(hotelId){
            $.getJSON("libs/js/json/hotels.json", function (data) {
                var hotelContent = '';
                $.each(data, function (index, hotel) {
                    if (hotel.id.toString() === hotelId.toString()) {
                        $('#goToHotelsListBtn').attr('href','#hotelsByCategory?id='+hotel.categoryId);
                        $('#hotelName').html(hotel.name);
                        $('#mainImageContainer').html('<img style="max-width: 100%;height: auto" src="resources/images/hotelPictures/'+hotel.name+'.jpg"/>');
                        //hotelContent += '<li><a href="#hotelDetail?id=' + hotel.id + '" data-transition="slide">' + hotel.name + '</a></li>';
                    }
                });
            });
        };


        app.init();

    })(hotels);
});

