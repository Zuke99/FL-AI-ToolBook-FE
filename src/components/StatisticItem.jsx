import React from "react";

function StatisticItem({
  iconSrc,
  value,
  label,
  valueColor = "text-zinc-500",
}) {
  return (
    <div className="flex gap-1.5">
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-start my-auto w-3 aspect-square"
        />
      )}
      <span className={valueColor}>{value}</span>
      {label && <span className="text-zinc-800">{label}</span>}
    </div>
  );
}

export default StatisticItem;
