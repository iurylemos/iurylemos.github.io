import { constants } from "@/modules/constants";
import { getUserData } from "@/server/server";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsComponent(): Promise<JSX.Element> {
  const githubToken: string = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
  const username = "iurylemos";
  const userResponse = await getUserData(username, githubToken);

  const starProjects = constants.starProjects;

  return (
    <section className="bg-gray-800 pattern py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>

        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {starProjects.map((it) => (
              <div key={it.name} className="max-w-xs w-full">
                <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover h-8"
                      src={it.image}
                      alt="background image projects"
                      fill
                    />
                  </div>
                </div>

                <Link
                  href={it.link}
                  target="_blank"
                  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div className="py-2 px-3 text-center text-sm">
                    <p className="text-gray-300">{it.description}</p>

                    <span className="block text-gray-500 mt-2">{it.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link
            className="flex items-center text-white hover:underline hover:text-gray-200"
            target="_blank"
            href={userResponse.html_url}
          >
            <span>View More On Github</span>

            <svg
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
