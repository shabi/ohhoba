"use client";

import {motion} from "framer-motion";


export function Magnetic({
children
}:{
children:React.ReactNode
}){


return (

<motion.div

whileHover={{
scale:1.05
}}

transition={{
type:"spring",
stiffness:200
}}

>

{children}

</motion.div>

)

}
