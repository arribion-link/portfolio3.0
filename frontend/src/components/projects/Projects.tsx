
const Projects = () => {
  return (
    <section className="mx-4 my-[5em] ">
      <h1 className="text-[clamp(2em,10vw,4em)] text-slate-700 font-bold py-2 text-center">
       FEATURED  PROJECTS
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-500 min-w-[20vw] min-h-[90vh] rounded"></div>
        <div className="border border-slate-500 min-w-[20vw] min-h-[90vh] rounded"></div>
        <div className="border border-slate-500 min-w-[20vw] min-h-[90vh] rounded"></div>
        <div className="border border-slate-500 min-w-[20vw] min-h-[90vh] rounded"></div>
      </div>
    </section>
  );
}

export default Projects
