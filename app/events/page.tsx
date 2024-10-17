import * as React from "react"
import Card from "@/components/card"
export default function Events():React.JSX.Element{
    return(
    <main className="container mx-auto px-4 w-screen h-screen">
        <div className="flex flex-row justify-center items-center w-full">
            <h1>Eventos disponibles</h1>
        </div>
        <div className="w-full h-3/4 py-6 flex flex-col justify-center items-center">
            <Card desc="" event="" endDate="" img="https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197_1280.jpg" initialDate="" title=""/>
        </div>

    </main>
    )
}