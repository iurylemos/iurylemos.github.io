import { HeaderComponent } from "@/components/header";
import { HeroComponent } from "@/components/hero";
import { AboutMeComponent } from "@/components/about";
import { KnowledgeComponent } from "@/components/knowledge";
import { FooterComponent } from "@/components/footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-sans bg-white">
      <div>
        <HeaderComponent />

        <HeroComponent />

        <AboutMeComponent />

        <KnowledgeComponent />

        {children}

        <FooterComponent />
      </div>
    </main>
  );
}
