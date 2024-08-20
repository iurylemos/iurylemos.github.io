"use client";

import { useEffect, useRef } from "react";
import { HeaderComponent } from "../header";
import { SidebarComponent } from "../sidebar";
import { KnowledgeComponent } from "../knowledge";
import { ContactsComponent } from "../contacts";
import { BudgetsComponent } from "../budgets";
import { FooterComponent } from "../footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuHamburgerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Store the current value of the ref in a variable
    const menuHamburgerElement = menuHamburgerRef.current;
    const containerElement = containerRef.current;

    if (menuHamburgerElement && containerElement) {
      const handleClick = () => {
        containerElement.classList.toggle("show-menu");
      };

      // Add event listener to the stored element
      menuHamburgerElement.addEventListener("click", handleClick);

      // Cleanup event listener on unmount
      return () => {
        menuHamburgerElement.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <main className="container !max-w-full" ref={containerRef}>
      <div className="hamburguer" ref={menuHamburgerRef}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
        <span>Fechar</span>
      </div>

      <HeaderComponent />

      <SidebarComponent />

      <KnowledgeComponent />

      {children}

      <ContactsComponent />

      <BudgetsComponent />

      <FooterComponent />

      <a href="#" id="link-to-topo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </a>
    </main>
  );
}
