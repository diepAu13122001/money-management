import React, { ReactNode } from "react"
export interface CardProps {
    title: string,
    status_icon: ReactNode,
    icon: ReactNode,
    amount: string,
}

export const Card = ({ title, status_icon, icon, amount }) => {
    return (
        <div className="drop-shadow-sm bg-white p-[25px] uppercase  w-full rounded-md transition ease-out delay-200 hover:drop-shadow-md hover:translate-y-[-2px] ">
            <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-[#A2A2A2]"> {title} </p>
                {status_icon}
            </div>
            <div className="flex justify-start items-center">
                {icon}
                <p className="font-bold text-2xl ml-2">{amount}</p>
            </div>
        </div>
    );
}