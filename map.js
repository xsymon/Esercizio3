//obj restService's definition
function restService(jsonURL){
        this.jsonURL = jsonURL;
        let jsonObj = $.getJSON(jsonURL,(jsonFile)=>{
                jsonObj = jsonFile;
        });
        return{
                setURL : function(jsonURL){
                        this.jsonURL = jsonURL;
                },
                getJsonObj : function(){
                        return jsonObj;
                }
        }
}

//obj mapHandler definition
function mapHandler(div,zoom,lat,lng,width,height){
        this.div = div;
        this.zoom = zoom;
        this.lat = lat;
        this.lng = lng;
        this.width = width;
        this.height = height;
        var map;

        return{
                //Getter Methods
                getDiv : function(){
                        return div;
                },
                getZoom : function(){
                        return zoom;
                },
                getLat : function(){
                        return lat;
                },
                getLng : function(){
                        return lng;
                },
                getWidth : function(){
                        return Width;
                },
                getHeight : function(){
                        return height;
                },
                //Setter Methods
                setDiv:function(div){
                        this.div = div;
                },
                setZoom : function(zoom){
                        this.zoom = zoom;
                },
                setLat : function(lat){
                        this.lat = lat;
                },
                setLng : function(lng){
                        this.lng = lng;
                },
                setWidth : function(width){
                        this.width = width;
                },
                setHeight : function(){
                        this.height = height;
                },
                //Other methods
                createMap : function(){
                        map = new GMaps({
                                div:div,
                                lat:lat,
                                lng:lng,
                                zoom: zoom,
                                width: width,
                                height: height 
                        });
                        return map;
                },
                deleteMap : function(){
                        map = null;
                }
        }
}

        const $infobox = $('.col-md-6.info-box');
        const $listbox = $(".col-md-6.list-box");
        const div = "<div class='overlay'></div>";
        handler = new mapHandler('#map',5,'42.504154','12.646361','100%','50%');
        map = handler.createMap();
        rest = new restService("https://api.myjson.com/bins/61hyo");
        jsonObj = rest.getJsonObj();

        if(jsonObj.readyState != 4){
                setTimeout(()=>{
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
                

                },1000);
        }