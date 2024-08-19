export function ContactsComponent(): JSX.Element {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50"
      id="contacts"
    >
      <div className="bg-white mx-auto w-full p-7 md:p-24">
        <div className="flex flex-col md:grid grid-cols-6 h-full">
          <div className="bg-purple-900 p-10 col-span-2 rounded-lg">
            <h2 className="mb-10 font-bold text-2xl text-purple-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Informações de contato
            </h2>
            <p className="font-bold text-purple-100 py-8 border-b border-purple-700">
              Endereço
              <span className="font-normal text-xs text-purple-300 block">
                {"Fortaleza/CE, BR"}
              </span>
            </p>
            <p className="font-bold text-purple-100 py-8 border-b border-purple-700">
              Telefone
              <span className="font-normal text-xs text-purple-300 block">
                +55 (85) 9 8930 2273
              </span>
            </p>
            <p className="font-bold text-purple-100 py-8 border-b border-purple-700">
              Email
              <span className="font-normal text-xs text-purple-300 block">
                iurylemos4@gmail.com
              </span>
            </p>
            <p className="font-bold text-purple-100 py-8 border-b border-purple-700">
              Linkedin
              <span className="font-normal text-xs text-purple-300 block">
                linkedin.com/in/iurylemos
              </span>
            </p>
          </div>
          <div className="bg-purple-50 p-14 col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-purple-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Entre em contato
            </h2>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Nome"
                  placeholder="Nome"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Telefone"
                  placeholder="Telefone"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Assunto"
                  placeholder="Assunto"
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                placeholder="Digite mais detalhes sobre a proposta"
                name=""
                id=""
                rows={8}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="rounded-full bg-purple-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-purple-800 transition-all">
                Enviar proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
