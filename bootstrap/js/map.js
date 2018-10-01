$('document').ready(()=>{
        let map = new GMaps({
                div:'#map',
                lat:'42.504154',
                lng:'12.646361',
                zoom: 7
        });

        map.addMarker({
                lat:'45.3985562',
                lng:'9.1458339',
                title:'Sede Assago',
                click: function(){
                        alert('Hai cliccato sulla sede Sopra Steria di Assago');
                }
        });

        map.addMarker({
                lat:'45.4086681',
                lng:'11.9119778',
                title:'Sede Padova',
                click: function(){
                        alert('Hai cliccato sulla sede Sopra Steria di Padova');
                }                
        });

        map.addMarker({
                lat:'44.7486823',
                lng:'10.2009757',
                title:'Sede Parma',
                click: function(){
                        alert('Hai cliccato sulla sede Sopra Steria di Parma');
                }                
        });

        map.addMarker({
                lat:'41.83542',
                lng:'12.4985713',
                title:'Sede Roma',
                click: function(){
                        alert('Hai cliccato sulla sede Sopra Steria di Roma');
                }                
        });
        
        map.addMarker({
                lat:'44.8894267',
                lng:'8.2093538',
                title:'Sede Roma',
                click: function(){
                        alert('Hai cliccato sulla sede Sopra Steria di Asti');
                }                
        });
});