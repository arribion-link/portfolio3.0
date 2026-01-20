import plp_cert from "../../assets/certs/plp-cert.png"
import simplilearn_cert from "../../assets/certs/simplilearn.png"
const Learning_Certs = () => {
  return (
    <section className="my-20 px-4 min-h-screen">
      <h1 className="font-bold text-center text-slate-800 text-[clamp(1.5rem,4vw,2.5rem)]">
        LEARNING CERTIFICATIONS
      </h1>
      <p className="text-center text-slate-600 my-4">
        Discover the latest certifications and learning achievements.
      </p>
      <div className="flex justify-center">
        {/* Certification items will go here */}
        <div className="flex flex-wrap gap-4">
          <div>
            <img src={plp_cert} alt="" className="max-w-[15em] hover:scale-100" />
          </div>
          <div>
            <img src={simplilearn_cert} alt="" className="max-w-[15em] " />
          </div>
          <div>
            <img src={plp_cert} alt="" className="max-w-[15em] " />
          </div>
          <div>
            <img src={simplilearn_cert} alt="" className="max-w-[15em] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning_Certs;
