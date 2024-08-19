export function SidebarComponent(): JSX.Element {
  return (
    <aside className="sidebar shadow-xl">
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a href="#" className="menu-link">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#conhecimentos" className="menu-link">
              Conhecimento
            </a>
          </li>
          <li className="menu-item">
            <a href="#projetos" className="menu-link">
              Projetos
            </a>
          </li>
          <li className="menu-item">
            <a href="#contacts" className="menu-link">
              Contato
            </a>
          </li>
          <li className="menu-item">
            <a href="#orcamentos" className="menu-link">
              Orçamento
            </a>
          </li>
        </ul>
      </nav>

      <div className="social-media">
        <a href="">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </aside>
  );
}
