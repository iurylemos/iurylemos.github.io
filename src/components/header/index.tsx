export function HeaderComponent(): JSX.Element {
  return (
    <header>
      <div className="img-wrapper">
        <img src="assets/images/img-header.jpg" alt="Foto Header" />
      </div>
      <div className="banner">
        <h1>Web Developer & Front End Designer</h1>
        <p>Claudio Iury Lemos Maia</p>
        <button>Saiba mais</button>
      </div>
    </header>
  );
}
