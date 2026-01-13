import React from "react";

interface HoverCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative bg-slate-200 shadow-lg rounded-lg overflow-hidden group cursor-pointer h-full">
      {/* Text Content */}
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Hidden Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity "
      />
    </div>
  );
};

export default HoverCard;
