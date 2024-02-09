/**** LIBRARY ***************************
 * Express :  server management         *
 * Path : path manager                  *
 * fs : file Stream                     *
 * Handlebars :  Template management    *
 * json file :                          *
 ****************************************/

const express = require("express");
const app = express();
path = require("path");
fs = require("fs");
const Handlebars = require("handlebars");
const json_exp = require("./public/json/exp.json");

/*** creation du template ******
 *  on lit le fichier et on met
 *  la chaine dans un variable
 *  pour le compiler avec hbs
 ********************************/
let template_exp;
fs.readFile("./templates/index.hbs", "utf8", (err, data) => {
  if (err) throw err;

  template_exp = data;
});

/*** PORT : 80 ***********/
/**/ const port = process.env.PORT || 8080; /**/
/*************************/

/** reclamation of template ***********************************
 *  templatePropriete : give the html of template in a buffer.*
 *  Same for templatedetail.                                  *
 **************************************************************/

app.get("/", (request, response) => {
  const template = Handlebars.compile(template_exp);
  response.send(template(json_exp));
});

/*** Listen PORT : 80 ****/
/**/ app.listen(port); /**/
/*************************/

// donne les acésses aux fichiers public dans le repertoir courant.
// mise en place :
app.use(express.static(__dirname + "/public"));
