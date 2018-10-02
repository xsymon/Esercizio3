jsonObj = $.getJSON("https://api.myjson.com/bins/61hyo",(jsonFile)=>{
        jsonObj = jsonFile;
});
$('document').ready(()=>{

        const $infobox = $('.col-md-6.info-box');
        const $listbox = $(".col-md-6.list-box");
        const div = "<div class='overlay'></div>";
        let map = new GMaps({
                div:'#map',
                lat:'42.504154',
                lng:'12.646361',
                zoom: 5,
                width: '100%',
                height:'50%'
                
        });
        if(jsonObj.readyState != 4){
                setTimeout(()=>{
                        for(var i=0;i<3;i++){
                                element = jsonObj[i];
                                $listbox.html($listbox.html()+"</br><button type='button' id='"+element.Name+"' class='btn btn-default'>"+element.Name+"</button>");
                                //$listbox.html($listbox.html()+"</br><a href='#' id='"+element.Name+"'>"+element.title+"</a>");
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

        
});