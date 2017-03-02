
// modal-body
$(window).load(function() {
	
        $("#nom").val(localStorage.getItem("valNom"));
        $("#prenom").val(localStorage.getItem("valPrenom"));
        $("#dateNaissance").val(localStorage.getItem("valNaissance"));
        $("#adresse").val(localStorage.getItem("valAdresse"));
        $("#mail").val(localStorage.getItem("valMail"));
})



$(document).ready(function () {
    $("#myBtn").click(function () {


        var errorHtml = "";
        var valNom = $("#nom").val();
        var valPrenom = $("#prenom").val();
        var valNaissance = $("#dateNaissance").val();
        var valAdresse = $("#adresse").val();
        var valMail = $("#mail").val();

        var formulaireValide = true;

        if (valNom == "")
        {

            formulaireValide = false;
            errorHtml = errorHtml + "<br>La saisie du nom est obligatoire.";
        } else
        {
            if (valNom.length < 5)
            {

                formulaireValide = false;
                errorHtml = errorHtml + "<br>Le nom doit contenir au moins 5 caractères.";
            }
        }

        if (valPrenom == "")
        {
            formulaireValide = false;
            errorHtml = errorHtml + "<br>La saisie du prénom est obligatoire.";
        } else
        {
            if (valPrenom.length < 5)
            {
                formulaireValide = false;
                errorHtml = errorHtml + "<br>Le prénom doit contenir au moins 5 caractères.";
            }
        }

        if (valNaissance == "")
        {
            formulaireValide = false;
            errorHtml = errorHtml + "<br>La date de naissance est obligatoire.";
        } else
        {
            if (valNaissance.length != 10)
            {
                formulaireValide = false;
                errorHtml = errorHtml + "<br>La date doit avoir le format JJ/MM/AAAA .";
            }
        }

        if (valAdresse == "")
        {
            formulaireValide = false;
            errorHtml = errorHtml + "<br>L'adresse est obligatoire.";
        } else
        {
            if (valAdresse.length < 5)
            {
                formulaireValide = false;
                errorHtml = errorHtml + "<br>L'adresse  doit contenir au moins 5 caractères.";
            }
        }

        if (valMail == "")
        {
            formulaireValide = false;
            errorHtml = errorHtml + "<br>Le mail est obligatoire.";
        } else
        {
            if (valMail.length < 5)
            {
                formulaireValide = false;
                errorHtml = errorHtml + "<br>Le mail  doit contenir au moins 5 caractères.";
            }
        }


        if (formulaireValide)
        {

            $("#messageValidationA").css("display", "none");
            $("#messageValidation").css("display", "inline-block");
            $("#messageValidationTexte").html(" <strong>Bravo</strong>! Le formulaire est sauvegardé");
         
            localStorage.setItem("valNom", valNom);
            localStorage.setItem("valPrenom", valPrenom);
            localStorage.setItem("valNaissance", valNaissance);
            localStorage.setItem("valAdresse", valAdresse);
            localStorage.setItem("valMail", valMail);
            
            
            


        } else
        {
            $("#messageValidation").css("display", "none");
            $("#messageValidationA").css("display", "inline-block");

            $("#messageValidationTexteA").html(" <strong>Sorry</strong>! Il y a des champs manquants");

        }
    });




});
function initMap() {
    var uluru = {lat: 48.866667, lng: 2.33333};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        map: map
    });
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
            $("#adresse").val(position.coords.latitude + "," + position.coords.longitude);
            $("#adresse_car").text(document.getElementById("adresse").value.length + " car");

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

$(document).ready(function () {

    $("#nom").keyup(function () {
        $("#nom_car").text(document.getElementById("nom").value.length + " car");



    });
    $("#prenom").keyup(function () {
        $("#prenom_car").text(document.getElementById("prenom").value.length + " car");


    });
    $("#dateNaissance").keyup(function () {
        $("#dateNaissance_car").text(document.getElementById("dateNaissance").value.length + " car");


    });


    $("#adresse").keyup(function () {
        $("#adresse_car").text(document.getElementById("adresse").value.length + " car");


    });
    $("#mail").keyup(function () {
        $("#mail_car").text(document.getElementById("mail").value.length + " car");


    });
});

$(function () {
    $("#dateNaissance").datepicker({
        onSelect: function () {
            $("#dateNaissance_car").text(document.getElementById("dateNaissance").value.length+ " car");
        },
    });
});


      