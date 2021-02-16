const menu_hamburguer = document.querySelector(".hamburguer");
const quantidade = document.querySelector("#qtde");
const js = document.querySelector("#js");
const needLayout = document.querySelector("#layout-sim");
const notNeedLayout = document.querySelector("#layout-nao");
const prazo = document.querySelector("#prazo");

(async () => {
    menu_hamburguer.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("show-menu");
    });

    quantidade.addEventListener("change", updatePrice);
    js.addEventListener("change", updatePrice);
    needLayout.addEventListener("change", updatePrice);
    notNeedLayout.addEventListener("change", updatePrice);
    prazo.addEventListener("change", () => {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo["value"]} ${ prazo["value"] > 1 ? "Semanas" : "Semana"}`;
        updatePrice();
    });
})();

function updatePrice() {
    const preco = document.querySelector("#preco");
    const prazoValue = prazo["value"];

    //Valor por página é 100 reais
    let valueTotal = quantidade["value"] * 100;

    //Acrescentando 10 porcento se quiser JS
    if(js["checked"]) valueTotal *= 1.1;

    //Se precisar de layout
    if(needLayout["checked"]) valueTotal += 500;

    //Taxa de urgência é o seguinte:
    //Se a pessoa cobrar 10 semanas, não vai ter taxa de urgência, por que não é urgente

    const taxa_urgencia = 1 - prazoValue*0.1;

    valueTotal *= 1 + taxa_urgencia;

    preco.innerHTML = `R$ ${valueTotal.toFixed(2)}`;
}