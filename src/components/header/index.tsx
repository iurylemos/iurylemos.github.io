import Image from "next/image";

export function HeaderComponent(): JSX.Element {
  return (
    <header>
      <div className="img-wrapper">
        <Image
          src="/assets/images/img-header.jpg"
          alt="Foto Header"
          className="object-cover"
          fill
        />
      </div>
      <div className="banner top-[15%] left-[10%] md:top-[30%] md:left-[15%]">
        <h1>Web Developer & Front End Designer</h1>
        <p>Claudio Iury Lemos Maia</p>
        <button>Saiba mais</button>
      </div>
    </header>
  );
}
