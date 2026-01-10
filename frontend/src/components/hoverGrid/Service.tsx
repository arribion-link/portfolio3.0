import React from "react";
import HoverCard from "./HoverCard";

const ServiceGrid
: React.FC = () => {
    return (
      <section className="my-[15em] flex">
        <div className="flex-1"></div>
        <div className="flex-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-6 auto-rows-[200px]">
            {/* Hero Card */}
            <div className="col-span-2 row-span-2" data-aos="zoom-in-right">
              <HoverCard
                title="Landing Page Development"
                description="Craft high-converting landing pages that blend sleek design with optimized user journeys. From engaging layouts to responsive performance, I build pages that capture attention and drive measurable results."
                imageUrl="https://images.unsplash.com/photo-1764957078063-887a403c681c"
              />
            </div>
            <div className="col-span-2" data-aos="zoom-out-up">
              <HoverCard
                title="Cross-Platform Mobile develoment (Flutter / React Native)"
                description="Deliver seamless mobile experiences across iOS and Android. I create fast, scalable apps that feel native and keep users engaged everywhere."
                imageUrl="https://images.unsplash.com/photo-1763641302132-d27dad02a19a"
              />
            </div>
            <div className="" data-aos="fade-left">
              <HoverCard
                title="Web Design"
                description="Design modern, responsive websites that balance aesthetics with usability."
                imageUrl="https://plus.unsplash.com/premium_photo-1762927744544-f1ef4eb5951b"
              />
            </div>
            <div className="col-span-3" data-aos="zoom-out-up">
              <HoverCard
                title="Software Design & Development With AI Intergrations"
                description="Build intelligent software solutions powered by AI. From automation to predictive analytics, we integrate cutting-edge machine learning into your workflows to unlock efficiency and innovation"
                imageUrl="https://images.unsplash.com/photo-1767867102530-b757e80a55c9"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default ServiceGrid
;
