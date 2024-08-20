import ClientWrapper from "@/components/clientwrapper";
import ProjectsComponent from "@/components/projects";
import React, { Suspense } from "react";

export default function Home(): JSX.Element {
  return (
    <ClientWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <ProjectsComponent />
      </Suspense>
    </ClientWrapper>
  );
}
