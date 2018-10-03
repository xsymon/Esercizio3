//obj restService's definition
var RestModule = function () {
    
        var jsonURL = "https://api.myjson.com/bins/61hyo";
        
        function callRestService(successFn) {
            $.getJSON(jsonURL, successFn);
        }
        
        return {
            callRestService: callRestService
        }
}();

//obj mapHandler definition
function mapHandler(div,zoom,lat,lng,width,height){
        this.div = div;
        this.zoom = zoom;
        this.lat = lat;
        this.lng = lng;
        this.width = width;
        this.height = height;
        var map;

        //Getter Methods
        function getDiv(){
                return div;
        };
        function getZoom(){
                return zoom;
        };
        function getLat(){
                return lat;
        };
        function getLng(){
                return lng;
        };
        function getWidth(){
                return Width;
        };
        function getHeight(){
                return height;
        };
        //Setter Methods
        function setDiv(div){
                this.div = div;
        };
        function setZoom(zoom){
                this.zoom = zoom;
        };
        function setLat(lat){
                this.lat = lat;
        };
        function setLng(lng){
                this.lng = lng;
        };
        function setWidth(width){
                this.width = width;
        };
        function setHeight(){
                this.height = height;
        };
        //Other methods
        function createMap(){
                map = new GMaps({
                        div:div,
                        lat:lat,
                        lng:lng,
                        zoom: zoom,
                        width: width,
                        height: height 
                });
                return map;
        };
        function deleteMap(){
                map = null;
        }

        return{
                getDiv : getDiv,
                getZoom : getZoom,
                getLat : getLat,
                getLng :getLng,
                getWidth : getWidth,
                getHeight : getHeight,
                setDiv : setDiv,
                setZoom : setZoom,
                setLat : setLat,
                setLng : setLng,
                setWidth : setWidth,
                setHeight : setHeight
        }
}

        const $infobox = $('.col-md-6.info-box');
        const $listbox = $(".col-md-6.list-box");
        const div = "<div class='overlay'></div>";
        handler = new mapHandler('#map',5,'42.504154','12.646361','100%','50%');
        rest = new restService("https://api.myjson.com/bins/61hyo");
        map = handler.createMap();
        jsonObj = rest.getJsonObj();

        
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