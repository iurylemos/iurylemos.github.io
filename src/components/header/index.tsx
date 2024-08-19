import Image from "next/image";

export function HeaderComponent(): JSX.Element {
  return (
    <header>
      <div className="img-wrapper">
        <Image
          src="/assets/images/img-header.jpg"
          alt="Foto Header"
          objectFit="contain"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="banner">
        <h1>Web Developer & Front End Designer</h1>
        <p>Claudio Iury Lemos Maia</p>
        <button>Saiba mais</button>
      </div>
    </header>
  );
}
