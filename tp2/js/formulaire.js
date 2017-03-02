 function validation()
    {        
        var errorHtml = "";
        var valNom= document.getElementById("nom").value;
        var valPrenom= document.getElementById("prenom").value;
        var valNaissance= document.getElementById("dateNaissance").value;
        var valAdresse= document.getElementById("adresse").value;
        var valMail= document.getElementById("mail").value;
        var formulaireValide = true;

        if (valNom == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "La saisie du nom est obligatoire.<br>";
        }else
        { 
            if (valNom.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "Le nom doit contenir au moins 5 caractères.<br>";
            }
        }

        if (valPrenom == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "La saisie du prénom est obligatoire.<br>";
        }else
        { 
            if (valPrenom.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "Le prénom doit contenir au moins 5 caractères.<br>";
            }
        }

        if (valNaissance == null)
        {
            formulaireValide = false;
            errorHtml= errorHtml + "La date de naissance est obligatoire.<br>";
        }else
        { 
            if (valNaissance.length != 10) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "La date doit avoir le format JJ/MM/AAAA .<br>";
            }
        }

        if (valAdresse == null)
        {
            formulaireValide = false;
            errorHtml= errorHtml + "L'adresse est obligatoire.<br>";
        }else
        { 
            if (valAdresse.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "L'adresse  doit contenir au moins 5 caractères.<br>";
            }
        }

        if (valMail == null)
        {
            formulaireValide = false;
            errorHtml= errorHtml + "Le mail est obligatoire.<br>";
        }else
        { 
            if (valMail.length < 5) 
            {
                formulaireValide = false;
                errorHtml= errorHtml + "Le mail  doit contenir au moins 5 caractères.<br>";
            }
        }

        
        if(formulaireValide)
        {
            document.getElementById("resultat").innerHTML="Bienvenue " + valNom + ".";
            document.getElementById("resultat").style.display="block";
            document.getElementById("error").style.display="none";
        }else
        {
            document.getElementById("error").innerHTML=errorHtml;
            document.getElementById("error").style.display="block";
            document.getElementById("resultat").style.display="none";
        }

    }