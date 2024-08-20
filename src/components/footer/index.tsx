export function FooterComponent(): JSX.Element {
  return (
    <footer className="bg-dark-grey max-w flex text-white bg-transparent">
      <div className="mx-auto text-center">
        <div className="py-32">
          <h1 className="text-5xl text-neutral-800">
            {"Don't be shy. Say hi 👋"}
          </h1>
          <p className="text-2xl text-hairline py-6 text-neutral-800">
            Do you have a project or an idea that could use some help? <br />
            {"Let's work together"}
          </p>
        </div>
      </div>
    </footer>
  );
}
