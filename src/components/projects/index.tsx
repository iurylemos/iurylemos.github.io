import Image from "next/image";

export function ProjectsComponent(): JSX.Element {
  return (
    <section className="sessao-projetos" id="projetos">
      <div className="sessao-header">
        <h1>Projetos</h1>
      </div>
      <div className="projetos flex flex-col gap-8 sm:flex-row sm:gap-0">
        <div className="card md:w-72 h-96">
          <div className="card-image-wrapper">
            <Image
              src="/assets/images/img-project01.jpg"
              alt="imagem projeto01"
              className="object-cover"
              fill
            />
          </div>
          <div className="card-info">
            <h2>ToDo List</h2>
            <h3>JavaScript</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusamus aperiam soluta reiciendis. Sequi est sed
            </p>
            <button className="btn-global">Saiba Mais</button>
          </div>
        </div>
        <div className="card md:w-72 h-96">
          <div className="card-image-wrapper">
            <Image
              src="/assets/images/img-project02.jpg"
              alt="imagem projeto02"
              className="object-cover"
              fill
            />
          </div>
          <div className="card-info">
            <h2>List Compras</h2>
            <h3>JavaScript</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusamus aperiam soluta reiciendis. Sequi est sed
            </p>
            <button className="btn-global">Saiba Mais</button>
          </div>
        </div>
        <div className="card md:w-72 h-96">
          <div className="card-image-wrapper">
            <Image
              src="/assets/images/img-project03.jpg"
              alt="imagem projeto03"
              className="object-cover"
              fill
            />
          </div>
          <div className="card-info">
            <h2>Carrinho</h2>
            <h3>JavaScript</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusamus aperiam soluta reiciendis. Sequi est sed
            </p>
            <button className="btn-global">Saiba Mais</button>
          </div>
        </div>
      </div>
    </section>
  );
}
