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
 
const $listbox = $(".col-md-6.list-box");
 
RestModule.callRestService(function(jsonObj){
        map = mapHandler.createMap("#map","42.7178439","11.192269",5,"100%","50%");
        for(var i=0;i<3;i++){
                element = jsonObj[i];
                $listbox.append("</br><button type='button' id='"+element.Name+"' class='btn btn-default btn-gmaps'>"+element.Name+"</button>");
                
                $("#" + element.Name).data("name", element.Name);
                $("#" + element.Name).data("lat", element.lat);
                $("#" + element.Name).data("lng", element.lng);
                $("#" + element.Name).data("description", element.description);
        } 

        $(".btn").on('click',function(){
                //map.removeMarkers();
                map.removeOverlays();  
                // TODO - da verificare gestione marker
                // map.addMarker(element); 
                map.drawOverlay({
                        lat: $(this).data("lat"),
                        lng: $(this).data("lng"),
                        content: "<div class='overlay'>"+$(this).data("description")+"</div>",
                        verticalAlign: 'bottom'
                });
        }).on('focusout',()=>{
                //map.removeMarkers();
                map.removeOverlays();
        });         
});       