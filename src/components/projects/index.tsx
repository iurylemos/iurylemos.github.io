import { constants } from "@/modules/constants";
import { getRepoData } from "@/server/server";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsComponent(): Promise<JSX.Element> {
  const githubToken: string = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
  const username = "iurylemos";
  const response = await getRepoData(username, githubToken);

  const starProjects = response.filter((project) => project.description);

  console.log(
    "starProjects",
    response.filter((project) => project.description)
  );

  return (
    <section
      className="bg-[url('/assets/images/banner_projects.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center h-full"
      id="projetos"
    >
      <div className="m-8 md:mx-24 md:my-12 p-4 bg-transparent rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">Meus projetos:</h2>
        </div>
        <div className="w-full flex justify-center p-1 mb-4">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {starProjects.map((project) => (
            <Link
              key={project.name}
              href={project.svn_url}
              target="_blank"
              className="bg-white p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
              <span className="text-gray-700">{project.description ?? ""}</span>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <div className="w-6 h-6 relative">
                    <Image
                      src={project.owner.avatar_url}
                      alt=""
                      className="rounded-full bg-black object-cover"
                      loading="lazy"
                      fill
                    />
                  </div>
                </dd>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
