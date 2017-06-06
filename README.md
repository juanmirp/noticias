# noticias

Página web de noticies que se actualitza fent scroll o pitjant el botó per carregar noticies utilizant HTML,CSS,Bootstrap,JQuery y Json.

RawGit:
https://rawgit.com/juanmirp/noticias/master/index.html

# Esbós de la pàgina en el desktop 

![esbós](https://rawgit.com/juanmirp/noticias/master/doc/IMG_20170606_182721.jpg)


# Esbós de la pàgina en el mòbil

![esbós](https://rawgit.com/juanmirp/noticias/master/doc/IMG_20170606_182711.jpg)


# Requisits del cliente
* La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
* Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
* Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).
* Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.

# Disseny 
* Es presenta un arxiu index.html amb 3 noticies precarregades i s´ha emmagatzemat 6 noticies més en fitxers Json(json/json1.json i json/json2.json) que s´aniran carregant mitjançant JQuery.
* S´ha codificat el js.js i jsnews.js , el primer per carregar les noticies json a partir del scroll o també mitjançant el botó de carga de noticies, també están codificats 3 botons (facebook , Twitter i google+)  per compartir la página.El segon només codifica els botons per compartir la página.
* S'ha codificat news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html.
* Inclou rss.xml.
* La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) conté una imatge i un vídeo de youtube responsive.
* Cada pàgina conté les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.
