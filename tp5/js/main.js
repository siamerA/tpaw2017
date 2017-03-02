var latitude;
var longiture;
function recherche(choix) {
    event.preventDefault(); // pour annuler le rechargement de la page
    var city = document.getElementById("city").value;
    
    if(choix==0){
        searchCity(city,choix,0,0);
    }else{
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
        function showPosition(position) {
             searchCity("",1, position.coords.longitude,position.coords.latitude);
               
               
           }
    }
    }
        
    }
    
function searchCity(_city,_choix,_lon,_lat) {
    var request = new XMLHttpRequest();
    
    

    if(_choix==0){
        request.open('GET', ' https://demo.bilelz.fr/owmap/?q='+_city+'&appid=e0c5699f772b215c86af11bd1b7a41d1', true);
        
        
 
 


    }else {
         
         request.open('GET', ' https://demo.bilelz.fr/owmap/?lat='+_lat+'&lon='+_lon +'&appid=e0c5699f772b215c86af11bd1b7a41d1', true);
         
    }
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
             
            
             
            var reponse= JSON.parse(request.responseText);

           
            var name=reponse.name;
            var icon="http://openweathermap.org/img/w/"+reponse.weather[0].icon+".png";
            var temperature = Math.round(reponse.main.temp - 273.15);
            var description=reponse.weather[0].description;
            var humidity= reponse.main.humidity;    
            var nuage= reponse.clouds.all;
            var vent=reponse.wind.speed;
            var lon=reponse.coord.lon;
            var lat=reponse.coord.lat;
                 
                  
               
               $("#city").val(name); 
                $("#name").text(name); 
                $("#icon").attr( 'src', icon );
                $("#icon").text(icon); 
                $("#temperature").text(temperature+"°"); 
                $("#description").text(description);  
                $("#humidity").text(humidity+"%"); 
                $("#nuage").text(nuage+"%");
                $("#vent").text(vent+"m/s");  
                $("#lon").text(lon); 
                $("#lat").text(lat);
                
                if(_choix==0){
                      myFcontionLonLat(lon, lat);
                }else {
                     
                    myFcontionLonLat(_lon,_lat);
                }
              
                
           


            //VOTRE CODE JS pour afficher les données météo sur votre page
            // en mettant à jour la DIV “result”
        } else {
            alert("c pas bon");
            // We reached our target server, but it returned an error
        }
    };
    request.onerror = function () {
        // There was a connection error of some sort
    };
    request.send();
}
function searchLatLng(_lat, _lng) {
    console.log(searchLatLng, 'Hello from' + _lat + ',' + _lng);
    //A compléter dans la suite du TP
}

function myFcontion() {

 
// Position par défaut
    var centerpos = new google.maps.LatLng(48.579400, 7.7519);

    // Ansi que des options pour la carte, centrée sur latlng
    var optionsGmaps = {
        center: centerpos,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15
    };

    // Initialisation de la carte avec les options
    var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);

    if (navigator.geolocation) {

        // Fonction de callback en cas de succès
        function affichePosition(position) {
           // $("#adresse").val(position.coords.latitude + "," + position.coords.longitude);
           // $("#adresse_car").text(document.getElementById("adresse").value.length + " car");

            // On instancie un nouvel objet LatLng pour Google Maps
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            // Ajout d'un marqueur à la position trouvée
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: "Vous êtes ici"
            });

            map.panTo(latlng);

        }

        // Fonction de callback en cas d’erreur
        function erreurPosition(error) {
            var info = "Erreur lors de la géolocalisation : ";
            switch (error.code) {
                case error.TIMEOUT:
                    info += "Timeout !";
                    break;
                case error.PERMISSION_DENIED:
                    info += "Vous n’avez pas donné la permission";
                    break;
                case error.POSITION_UNAVAILABLE:
                    info += "La position n’a pu être déterminée";
                    break;
                case error.UNKNOWN_ERROR:
                    info += "Erreur inconnue";
                    break;
            }
            document.getElementById("maposition").innerHTML = info;
        }

        navigator.geolocation.getCurrentPosition(affichePosition, erreurPosition);

    } else {

        alert("Ce navigateur ne supporte pas la géolocalisation");

    }

}
function myFcontionLonLat(_lont, _latt) {

 
// Position par défaut
    var centerpos = new google.maps.LatLng(48.579400, 7.7519);

    // Ansi que des options pour la carte, centrée sur latlng
    var optionsGmaps = {
        center: centerpos,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15
    };

    // Initialisation de la carte avec les options
    var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);

    if (navigator.geolocation) {

        // Fonction de callback en cas de succès
        function affichePosition() {
           // $("#adresse").val(position.coords.latitude + "," + position.coords.longitude);
           // $("#adresse_car").text(document.getElementById("adresse").value.length + " car");

            // On instancie un nouvel objet LatLng pour Google Maps
            var latlng = new google.maps.LatLng(_latt, _lont);

            // Ajout d'un marqueur à la position trouvée
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: "Vous êtes ici"
            });

            map.panTo(latlng);

        }

        // Fonction de callback en cas d’erreur
        function erreurPosition(error) {
            var info = "Erreur lors de la géolocalisation : ";
            switch (error.code) {
                case error.TIMEOUT:
                    info += "Timeout !";
                    break;
                case error.PERMISSION_DENIED:
                    info += "Vous n’avez pas donné la permission";
                    break;
                case error.POSITION_UNAVAILABLE:
                    info += "La position n’a pu être déterminée";
                    break;
                case error.UNKNOWN_ERROR:
                    info += "Erreur inconnue";
                    break;
            }
            document.getElementById("maposition").innerHTML = info;
        }

        navigator.geolocation.getCurrentPosition(affichePosition, erreurPosition);

    } else {

        alert("Ce navigateur ne supporte pas la géolocalisation");

    }

}
 
