// import { useState } from "react";

// export default function Nav(props: any) {
//     const [visivel, setVisivel] = useState(false)
//     const opcoes = ['Início', 'Categorias', 'Filtros', 'Sobre', 'FAQ']

//     return (
//         <div className="flex relative">
//             {opcoes.map((op, index) =>
//                 <ul key={index} className={`${visivel ? "flex" : "hidden"} text-white hover:text-salmon w-full sm:v-32 m-1 p-5 justify-center`}>
//                     {op}
//                 </ul>)}
//         </div>
//     )
// }