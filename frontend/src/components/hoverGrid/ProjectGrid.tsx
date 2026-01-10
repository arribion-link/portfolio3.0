import React from "react";
import HoverCard from "./HoverCard";

const ProjectGrid: React.FC = () => {
    return (
      <section className="mt-[15em] ">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 p-6 auto-rows-[200px]">
          {/* Hero Card */}
          <div className="">
            <HoverCard
              title="Main Feature"
              description="This is the hero card"
              imageUrl="https://images.unsplash.com/photo-1764957078063-887a403c681c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="">
            <HoverCard
              title="Main Feature"
              description="This is the hero card"
              imageUrl="https://images.unsplash.com/photo-1761839258657-457dda39b5cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          {/* Smaller Cards */}
          <div className="md:col-span-2 row-span-2">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://images.unsplash.com/photo-1761872936156-9a41f014754e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://images.unsplash.com/photo-1762656669479-496d6291ef64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="md:col-span-2 row-span-2">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://images.unsplash.com/photo-1767528137321-870256e722b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="md:col-span-2 row-span-2">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://plus.unsplash.com/premium_photo-1732730224458-4082b9285435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="md:col-span-2 ">
            <HoverCard
              title="Secondary"
              description="Smaller highlight"
              imageUrl="https://images.unsplash.com/photo-1767622398131-c9c782b25d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    );
};

export default ProjectGrid;
