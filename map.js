//Functions Definition
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

var ButtonHandler = function(){
        function listBtn(array){
                for(var i=0;i<array.length;i++){
                        element = array[i];
                        //$hiddenBtn.clone().attr("id",element.Name).appendTo($listbox).show().text(element.Name);
                        $btn = $hiddenBtn.clone().attr('id',element.Name).appendTo($listbox).show();
                        rendered = Mustache.render($btn.html(),{
                                nome : element.Name
                        });
                        $btn.html(rendered);
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
        }

        return{
                listBtn : listBtn
        }
}();
//End of Functions Definition

//Main 
//Const declaration
const $listbox = $(".col-md-6.list-box")
        divId = "#map",
        lat = "42.7178439",
        lng = "11.192269",
        zoom = 5,
        width = "100%",
        height = "50%",
        $hiddenBtn = $(".btn.btn-default.btn-gmaps");

RestModule.callRestService(function(jsonObj){
        map = MapHandler.createMap(divId,lat,lng,zoom,width,height);
        ButtonHandler.listBtn(jsonObj);       
});       