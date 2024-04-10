import { useState } from "react";

// interface IconeProps {
//     visivel: boolean,
//     setVisivel: function(params:type) {

//     }
// }

export default function Icone(props: any) {
    //    const [visivel, setVisivel] = useState(false)
    return (
        <div
            className={'flex flex-col fixed top-0 right-0 z-40 p-5'}
            onClick={() => { console.log(props.visivel); props.setVisivel(!props.visivel); }}>
            <div className={`${props.visivel && "rotate-45 translate-y-2"} h-1 w-8 mb-1 bg-white transition duration-500`} />
            <div className={`${props.visivel && "rotate-_45"} h-1 w-8 mb-1 bg-white transition duration-500`} />
            <div className={`${props.visivel ? "hidden" : "flex"} h-1 w-8 mb-1 bg-white transition duration-500`} />
        </div>
    )
}