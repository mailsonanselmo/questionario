const express =  require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));


app.get("/:nome/:lang", (req, res) => {

    var nome = req.params.nome;
    var lang = req.params.lang;

    res.render("index",{
        nome: nome,
        lang: lang,
        teste: "Teste"
    });
});

app.listen(8080, ()=>{console.log("App rodando!")});