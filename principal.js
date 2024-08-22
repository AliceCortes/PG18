var banners =["os melhores do Brasil", "qualidade e preço baixo"];
var banners
function trocaBanner(){
    banner = (banner +1) %2;
    document.querySelector("h2#mensagem").textContent = bannrs[banner];

}
setInterval(trocaBanner, 2000);