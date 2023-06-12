function validarCampoTexto() {
    
    var dato = document.getElementById("nombre").value;
    var abecedario = "abcdefghijklmnñopqrstuvwxyz áéíóúàèìòù";
     dato = dato.toLowerCase();
    var nombresino = document.getElementById('nombre');
    if (dato.length === 0) {
       
        document.getElementById("mensaje_nombre").innerHTML = "Rellene este campo";
        document.getElementById("mensaje_nombre").style.color = "#DC5A5A";
        document.getElementById("nombre").style.borderColor = "#DC5A5A";
        nombresino.classList.remove("acierto");
        nombresino.classList.add("error");
        return false;
    }

    for (var i = 0; i < dato.length; i++) {
        var letra = dato.charAt(i);
        if (abecedario.indexOf(letra, 0) == -1) {
             
           
            document.getElementById("mensaje_nombre").innerHTML = "Carácteres no permitidos";
            document.getElementById("mensaje_nombre").style.color = "#DC5A5A";
            document.getElementById("nombre").style.borderColor = "#DC5A5A";
            nombresino.classList.add("error");
            nombresino.classList.remove("acierto");
            return false;
        }
    }
    nombresino.classList.add("acierto");
    nombresino.classList.remove("error");
    
    document.getElementById("nombre").style.borderColor = "#6ECF77";

    document.getElementById("mensaje_nombre").innerHTML = " ";
    return true;
}
 

function validarprimerapellido() {
    
    var dato = document.getElementById("apellido1").value;
    var abecedario = "abcdefghijklmnñopqrstuvwxyz áéíóúàèìòù";
    dato = dato.toLowerCase();
    var nombresino = document.getElementById('apellido1');
    if (dato.length === 0) {

        document.getElementById("mensaje_apellido1").innerHTML = "Rellene este campo";
        document.getElementById("mensaje_apellido1").style.color = "#DC5A5A";
        document.getElementById("apellido1").style.borderColor = "#DC5A5A";
        nombresino.classList.remove("acierto");
        nombresino.classList.add("error");
        return false;
    }
        for (var i = 0; i < dato.length; i++) {
            var letra = dato.charAt(i);
            if (abecedario.indexOf(letra, 0) == -1) {

                document.getElementById("mensaje_apellido1").innerHTML = "Carácteres no permitidos";
                document.getElementById("mensaje_apellido1").style.color = "#DC5A5A";
                document.getElementById("apellido1").style.borderColor = "#DC5A5A";
                nombresino.classList.add("error");
                nombresino.classList.remove("acierto");
                return false;
            }
            }
        nombresino.classList.add("acierto");
        nombresino.classList.remove("error");
        
        document.getElementById("apellido1").style.borderColor = "#6ECF77";
    
        document.getElementById("mensaje_apellido1").innerHTML = " ";
        return true;

    }


    function validarsegundoapellido() {

    var dato = document.getElementById("apellido2").value;
    var abecedario = "abcdefghijklmnñopqrstuvwxyz áéíóúàèìòù";
     dato = dato.toLowerCase();
    var nombresino = document.getElementById('apellido2');
    if (dato.length === 0) {
       
       
        document.getElementById("mensaje_apellido2").innerHTML = "Rellene este campo";
        document.getElementById("mensaje_apellido2").style.color = "#DC5A5A";
        document.getElementById("apellido2").style.borderColor = "#DC5A5A";
        nombresino.classList.remove("acierto");
        nombresino.classList.add("error");
        return false;
    }

    for (var i = 0; i < dato.length; i++) {
        var letra = dato.charAt(i);
        if (abecedario.indexOf(letra, 0) == -1) {
             
            document.getElementById("mensaje_apellido2").innerHTML = "Carácteres no permitidos";
            document.getElementById("mensaje_apellido2").style.color = "#DC5A5A";
            document.getElementById("apellido2").style.borderColor = "#DC5A5A";
            nombresino.classList.add("error");
            nombresino.classList.remove("acierto");
            return false;
        }
    }
    nombresino.classList.add("acierto");
    nombresino.classList.remove("error");
    
    document.getElementById("apellido2").style.borderColor = "#6ECF77";

    document.getElementById("mensaje_apellido2").innerHTML = " ";
    return true;
}

function validarPassword() {
    var password0sino = document.getElementById('password');
    var dato = document.getElementById("password").value;

    if (dato.length === 0) {
        password0sino.classList.remove("acierto");
        password0sino.classList.add("error");
        document.getElementById("mensaje_password").innerHTML = "Rellene este campo";
        document.getElementById("mensaje_password").style.color = "#DC5A5A";
        document.getElementById("password").style.borderColor = "#DC5A5A";
        return false;

    }
   
    if (dato.length >8) {
        password0sino.classList.remove("acierto");
        password0sino.classList.add("error");
        document.getElementById("mensaje_password").innerHTML = "No debe tener más de 8 caracteres";
        document.getElementById("password").style.borderColor = "#DC5A5A";
        document.getElementById("mensaje_password").style.color = "#DC5A5A";
        return false;

    }
    
    password0sino.classList.remove("error");
    password0sino.classList.add("acierto");
   
    document.getElementById("mensaje_password").innerHTML = " ";

    return true;
}

  
function validarEmail() {
    var correo = document.getElementById('email').value;
    var correosino = document.getElementById('email');
    
    if (correo.length === 0) {
        correosino.classList.remove("acierto");
         correosino.classList.add("error");
         document.getElementById("mensaje_email").innerHTML = "Rellene este campo";
         document.getElementById("email").style.borderColor = "#DC5A5A";
        
        document.getElementById("mensaje_email").style.color = "#DC5A5A";
        return false;
    }
    if (!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo))) {
        correosino.classList.remove("acierto");
        correosino.classList.add("error");
        document.getElementById("mensaje_email").style.color = "#DC5A5A";
        document.getElementById("mensaje_email").innerHTML = "Email invalido";
        document.getElementById("email").style.borderColor = "#DC5A5A";
        

        return false;
    }
    correosino.classList.remove("error");
    correosino.classList.add("acierto");

    document.getElementById("nombre").style.borderColor = "#6ECF77";

    document.getElementById("mensaje_email").innerHTML = " ";
    
    return true;

}

function validarlogin() {
    var password0sino = document.getElementById('login');
var dato = document.getElementById("login").value;

    if (dato.length === 0) {
        password0sino.classList.remove("acierto");
        password0sino.classList.add("error");
        document.getElementById("mensaje_password").innerHTML = "Rellene este campo";
        document.getElementById("mensaje_password").style.color = "#DC5A5A";
        document.getElementById("password").style.borderColor = "#DC5A5A";
        return false;

    }
   
    if (dato.length >8) {
        password0sino.classList.remove("acierto");
        password0sino.classList.add("error");
        document.getElementById("mensaje_password").innerHTML = "";
        document.getElementById("password").style.borderColor = "#DC5A5A";
        document.getElementById("mensaje_password").style.color = "#DC5A5A";
        return false;

    }
    
    password0sino.classList.remove("error");
    password0sino.classList.add("acierto");

    document.getElementById("nombre").style.borderColor = "#6ECF77";
   
    document.getElementById("mensaje_password").innerHTML = " ";

    return true;
}


function validarFormulario() {
    var v1 = validarCampoTexto();
    var v2 = validarprimerapellido();
    var v3 = validarsegundoapellido();
    var v4 = validarPassword();
    var v5 = validarEmail();
    
        console.log(v1);
        console.log(v2);
        console.log(v3);
        console.log(v4);
        console.log(v5);
      
    if (v1 === true && v2 === true && v3 === true && v4 === true && v5 === true ) {
        
        alert("Su registro ha sido enviado");
    } else {
        return false;
    }

}