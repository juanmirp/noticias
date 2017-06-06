/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cont = 0;
var ficheros = ["json1.json", "json2.json"];


$(document).ready( function() {
    //leer y parsear
    
    $("#boton").click(function () {
        cargarNoticias();

    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
          cargarNoticias();
        }
    });
    
  
});


function pintar(json) {
    $.each(json, function (i, noticia) {
        /* $("#out").append( "<li id='" + i + "'>" +empleado.comandas.segundacomanda.articulo + "</li>" );*/
        $("#noticias").append("<div class='main-container col-sm-8 well noticia' >" +
                "<h1><strong>" + noticia.titulo + "</strong></h1>" +
                "<br>"
                + "<p>" + noticia.descripcion + "</p>"
                +"<br><br>"
                + '<img src="' + noticia.imagenGrande + '"' + "alt='imagen'" + "class='img-responsive'>"+
                
                "<br>"+
               " <p class='text-right'>"+noticia.data+"</p>"
                +"<br>"
                + "</div>"
                );
    });
    
};

function cargarNoticias() {

    if (cont < ficheros.length) {

        var nombre = ficheros[cont];
        cont++;
        $.getJSON( "https://rawgit.com/juanmirp/noticias/master/json/" + nombre, function (aux) {
            pintar(aux); });
    }
    else {
        
        alert("Todas las noticias cargadas");
    }
};





