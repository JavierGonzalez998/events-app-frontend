import * as React from "react";

interface props{
    img: string
    title: string
    desc: string
    initialDate: string
    endDate: string
    event:string
}

/**
 * box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 */

export default function Card({img, title, desc, initialDate, endDate, event}:props):React.JSX.Element{
    return(
        <section className="w-full h-32 max-h-80 rounded-md shadow-xl flex flex-row">
            <div className="w-40 h-full">
                <img src={img} className="object-cover w-full h-full"></img>
            </div>
        </section>
    )
}