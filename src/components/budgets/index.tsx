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
    <section className="bg-transparent text-white p-7 md:p-24" id="orcamentos">
      <div className="mx-auto w-full p-10 bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Faça um orçamento</h1>
        <form action="">
          <div className="mb-4">
            <label htmlFor="qtde" className="block text-lg">
              Quantidade de páginas
            </label>
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
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="js" className="block text-lg">
              Preciso de um script JS
            </label>
            <input
              type="checkbox"
              name="js"
              id="js"
              checked={needJs}
              onChange={(e) => {
                setNeedJs(e.target.checked);
                updatePrice();
              }}
              className="ml-2"
            />
          </div>
          <fieldset className="mb-4">
            <legend className="block text-lg">Layout</legend>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="layout"
                  id="layout-sim"
                  onChange={() => {
                    setNeedLayout(true);
                    updatePrice();
                  }}
                  className="mr-2"
                />
                Preciso de um layout
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="layout"
                  id="layout-nao"
                  onChange={() => {
                    setNeedLayout(false);
                    updatePrice();
                  }}
                  className="mr-2"
                />
                Já tenho um layout
              </label>
            </div>
          </fieldset>
          <div className="mb-4">
            <label htmlFor="prazo" className="block text-lg">
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
              className="w-full h-2 bg-gray-700 accent-gray-500"
            />
          </div>
          <div className="mb-4">
            <label id="preco" className="block text-xl font-bold">
              R$ {price}
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
