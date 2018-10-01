$('document').ready(()=>{

        $infobox = $('.col-md-6.info-box');

        let map = new GMaps({
                div:'#map',
                lat:'42.504154',
                lng:'12.646361',
                zoom: 5
        });

        $("#assago").on('mouseenter',()=>{
                marker = map.addMarker({
                        lat:'45.3985562',
                        lng:'9.1458339',
                        title:'Sede Assago'
                });      
                $infobox.text("Varie info sulla sede di Assago");          
        }).on('mouseleave',()=>{
                map.removeMarker(marker);
                $infobox.text("");
        });


        $("#parma").on('mouseenter',()=>{
                marker = map.addMarker({
                        lat:'44.7486823',
                        lng:'10.2009757',
                        title:'Sede Parma'              
                });
                $infobox.text("Varie info sulla sede di Parma");
        }).on('mouseleave',()=>{
                map.removeMarker(marker);
                $infobox.text("");
        });;

        $('#padova').on('mouseenter',()=>{
                marker = map.addMarker({
                        lat:'45.4086681',
                        lng:'11.9119778',
                        title:'Sede Padova'              
                });
                $infobox.text("Varie info sulla sede di Padova");
        }).on('mouseleave',()=>{
                map.removeMarker(marker);
                $infobox.text("");
        });;

        $('#roma').on('mouseenter',()=>{
                marker = map.addMarker({
                        lat:'41.83542',
                        lng:'12.4985713',
                        title:'Sede Roma'          
                });
                $infobox.text("Varie info sulla sede di Roma");
        }).on('mouseleave',()=>{
                map.removeMarker(marker);
                $infobox.text("");
        });;

        $('#asti').on('mouseenter',()=>{
                marker = map.addMarker({
                        lat:'44.8894267',
                        lng:'8.2093538',
                        title:'Sede Asti'           
                });
                $infobox.text("Varie info sulla sede di Asti");
        }).on('mouseleave',()=>{
                map.removeMarker(marker);
                $infobox.text("");
        });;
        
});