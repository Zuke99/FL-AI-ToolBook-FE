import React from "react";

function FooterColumn({ title, children, className }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-start text-base leading-none text-white max-md:mt-10">
        <h2 className="text-lg font-bold text-sky-600">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default FooterColumn;
