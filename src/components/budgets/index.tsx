"use client";

import { useState } from "react";

export function BudgetsComponent(): JSX.Element {
  const [quantidade, setQuantidade] = useState<number>(1);
  const [needJs, setNeedJs] = useState<boolean>(false);
  const [needLayout, setNeedLayout] = useState<boolean>(false);
  const [deadline, setPrazo] = useState<number>(1);
  const [price, setPrice] = useState<string>("");

  // Function to update price
  const updatePrice = (): void => {
    let valueTotal = quantidade * 100;

    if (needJs) valueTotal *= 1.1;
    if (needLayout) valueTotal += 500;

    const taxaUrgencia = 1 - deadline * 0.1;
    valueTotal *= 1 + taxaUrgencia;

    setPrice(valueTotal.toFixed(2));
  };

  // Update prazo label dynamically
  const handlePrazoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPrazo(parseInt(event.target.value, 10));
    updatePrice();
  };

  return (
    <section className="sessao-orcamento" id="orcamentos">
      <div className="orcamento-wrapper w-5/6 md:w-2/3 md:h-4/5">
        <h1>Faça um orçamento</h1>
        <form action="">
          <label htmlFor="qtde">Quantidade de páginas</label>
          <input
            type="number"
            min="1"
            name="qtde"
            id="qtde"
            value={quantidade}
            onChange={(e) => {
              setQuantidade(parseInt(e.target.value, 10));
              updatePrice();
            }}
          />
          <label htmlFor="js">Preciso de um script JS</label>
          <input
            type="checkbox"
            name="js"
            id="js"
            checked={needJs}
            onChange={(e) => {
              setNeedJs(e.target.checked);
              updatePrice();
            }}
          />
          <label>Layout</label>
          <div className="group-layout">
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="layout"
                id="layout-sim"
                onChange={() => {
                  setNeedLayout(true);
                  updatePrice();
                }}
              />
              <label htmlFor="layout-sim">Preciso de um layout</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="layout"
                id="layout-nao"
                onChange={() => {
                  setNeedLayout(false);
                  updatePrice();
                }}
              />
              <label htmlFor="layout-nao">Já tenho um layout</label>
            </div>
          </div>
          <label htmlFor="prazo">
            Prazo: {deadline} {deadline > 1 ? "Semanas" : "Semana"}
          </label>
          <input
            type="range"
            name="prazo"
            id="prazo"
            min="1"
            max="10"
            value={deadline}
            onChange={handlePrazoChange}
          />
          <label id="preco">R$ {price}</label>
          <button type="submit" className="btn-global btn-orcamento font-bold">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
