var RestModule = function () {
        var jsonURL = "https://api.myjson.com/bins/61hyo";
        
        function callRestService(successFn) {
            $.getJSON(jsonURL, successFn);
        }
        
        return {
            callRestService: callRestService
        }
}();
 
var MapHandler = function (){
 
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
 
        return{
                createMap : createMap
        }
}();
 //Const declaration
const $listbox = $(".col-md-6.list-box")
        divId = "#map",
        lat = "42.7178439",
        lng = "11.192269",
        zoom = 5,
        width = "100%",
        height = "50%";

RestModule.callRestService(function(jsonObj){
        map = MapHandler.createMap(divId,lat,lng,zoom,width,height);
        for(var i=0;i<jsonObj.length;i++){
                element = jsonObj[i];
                $listbox.append("</br><button type='button' id='"+element.Name+"' class='btn btn-default btn-gmaps'>"+element.Name+"</button>");
                
                $("#" + element.Name).data("name", element.Name);
                $("#" + element.Name).data("lat", element.lat);
                $("#" + element.Name).data("lng", element.lng);
                $("#" + element.Name).data("description", element.description);
        } 

        $(".btn").on('click',function(){
                map.removeMarkers();
                map.removeOverlays();  
                map.addMarker({
                        lat: $(this).data("lat"),
                        lng: $(this).data("lng")    
                }); 
                map.drawOverlay({
                        lat: $(this).data("lat"),
                        lng: $(this).data("lng"),
                        content: "<div class='overlay'>"+$(this).data("description")+"</div>",
                        verticalAlign: 'bottom'
                });
        }).on('focusout',()=>{
                map.removeMarkers();
                map.removeOverlays();
        });         
});       