var RestModule = function () {
        var jsonURL = "https://api.myjson.com/bins/61hyo";
        
        function callRestService(successFn) {
            $.getJSON(jsonURL, successFn);
        }
        
        return {
            callRestService: callRestService
        }
}();

var mapHandler = function (){

        function createMap(container,latitude,longitude,zoomIn,width,height){
                map = new GMaps({
                        div:container,
                        lat:latitude,
                        lng:longitude,
                        zoom: zoomIn,
                        width: width,
                        height: height 
                });
                return map;
        };

        function deleteMap(map){
                map = null;
        }

        return{
                createMap : createMap,
                deleteMap : deleteMap  
        }
}();

        const $infobox = $('.col-md-6.info-box');
        const $listbox = $(".col-md-6.list-box");
        const div = "<div class='overlay'></div>";

        RestModule.callRestService(function(jsonObj){
                map = mapHandler.createMap("#map","42.7178439","11.192269",5,"100%","50%");
                for(var i=0;i<3;i++){
                        element = jsonObj[i];
                        $listbox.html($listbox.html()+"</br><button type='button' id='"+element.Name+"' class='btn btn-default'>"+element.Name+"</button>");
                }
                

                $("#Assago").on('focusin',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                        marker = map.addMarker(jsonObj[0]);   
                        map.drawOverlay({
                                lat: jsonObj[0].lat,
                                lng: jsonObj[0].lng,
                                content: "<div class='overlay'>"+jsonObj[0].description+"</div>",
                                verticalAlign: 'bottom'
                        });
                }).on('focusout',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                });
                        
                        
                $("#Parma").on('focusin',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                        marker = map.addMarker(jsonObj[1]);
                                        
                        map.drawOverlay({
                                lat: jsonObj[1].lat,
                                lng: jsonObj[1].lng,
                                content: "<div class='overlay'>"+jsonObj[1].description+"</div>",
                                verticalAlign: 'bottom'
                        });
                }).on('focusout',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                });
                        
                $('#Padova').on('focusin',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                        marker = map.addMarker(jsonObj[2]);
                                        
                        map.drawOverlay({
                                lat: jsonObj[2].lat,
                                lng: jsonObj[2].lng,
                                content: "<div class='overlay'>"+jsonObj[2].description+"</div>",
                                verticalAlign: 'bottom'
                        });
                }).on('focusout',()=>{
                        map.removeMarkers();
                        map.removeOverlays();
                });
        });




        