export function FooterComponent(): JSX.Element {
  return (
    <footer className="bg-dark-grey max-w flex text-white bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027]">
      <div className="mx-auto text-center">
        <div className="py-32">
          <h1 className="text-5xl">{"Don't be shy. Say hi 👋"}</h1>
          <p className="text-2xl text-hairline py-6">
            Do you have a project or an idea that could use some help? <br />
            {"Let's work together"}
          </p>
        </div>
      </div>
    </footer>
  );
}
