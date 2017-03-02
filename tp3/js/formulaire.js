 
// modal-body
 
 
 
 
$(document).ready(function(){
    $("#myBtn").click(function(){
        
        
         var errorHtml = "";
         var valNom= $("#nom").val();
         var valPrenom=$("#prenom").val();
         var valNaissance=$("#dateNaissance").val();
         var valAdresse= $("#adresse").val();
         var valMail=$("#mail").val();
                
        var formulaireValide = true;

        if (valNom =="")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La saisie du nom est obligatoire.";
        }else
        { 
            if (valNom.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le nom doit contenir au moins 5 caractères.";
            }
        }

        if (valPrenom == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La saisie du prénom est obligatoire.";
        }else
        { 
            if (valPrenom.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le prénom doit contenir au moins 5 caractères.";
            }
        }

        if (valNaissance == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La date de naissance est obligatoire.";
        }else
        { 
            if (valNaissance.length != 10) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>La date doit avoir le format JJ/MM/AAAA .";
            }
        }

        if (valAdresse == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>L'adresse est obligatoire.";
        }else
        { 
            if (valAdresse.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>L'adresse  doit contenir au moins 5 caractères.";
            }
        }

        if (valMail == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>Le mail est obligatoire.";
        }else
        { 
            if (valMail.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le mail  doit contenir au moins 5 caractères.";
            }
        }

        
        if(formulaireValide)
        {
            
            var model= $("#myModalMaps");
            model.find('.modal-title').text('Bonjour '+valNom +'  '+valPrenom);
            model.find('#resulatDateNaissance').text('Vous êtes nés le '+valNaissance+' et vous habitez');
            $("#myModalMaps").modal();  
        }else
        {
               $("#myModal").modal();     
     }  
    });
});


$(function () {
    $("#dateNaissance").datepicker( {
            maxDate: '0'});
});