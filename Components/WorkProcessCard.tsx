import React from "react";

const WorkProcessCard = (props: any) => {
  const { title, number, des, bg } = props;
  return (
    <div
      className={`flex-1 p-4 ${bg} text-white rounded flex flex-col shadow-xl md:h-40 `}
    >
      <div className="flex  justify-between items-center ">
        <h4 className="font-bold my-4 text-xl poppins ">{title}</h4>
        <h4 className=" text-2xl md:text-4xl text-green-100 font-bold opacity-30">
          {number}
        </h4>
      </div>
      <p className="">{des}</p>
    </div>
  );
};

export default WorkProcessCard;
