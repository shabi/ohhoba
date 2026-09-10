"use client";

import { motion } from "framer-motion";


const worlds = [
  {
    title:"CREATE",
    text:"Art, AI, experiments and impossible ideas."
  },
  {
    title:"EXPLORE",
    text:"Discover unusual minds and hidden worlds."
  },
  {
    title:"CONNECT",
    text:"Meet creators building differently."
  }
];


export default function WorldPage(){


return (

<main
className="
min-h-screen
bg-black
text-white
overflow-hidden
"
>


<div
className="
absolute
inset-0
bg-gradient-to-b
from-green-950/40
via-black
to-black
"
/>



<div
className="
relative
z-10
flex
min-h-screen
flex-col
items-center
justify-center
px-8
"
>


<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

className="
text-7xl
font-light
tracking-[0.2em]
"

>

OHHOBA WORLD

</motion.h1>



<p
className="
mt-8
max-w-xl
text-center
text-white/50
tracking-widest
uppercase
"
>

A place for unusual minds

</p>




<div
className="
mt-24
grid
gap-8
md:grid-cols-3
"
>


{worlds.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:60
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.2
}}

whileHover={{
scale:1.05
}}

className="
w-72
rounded-3xl
border
border-white/10
bg-white/5
p-10
backdrop-blur-xl
"

>


<h2
className="
text-2xl
tracking-widest
"
>

{item.title}

</h2>


<p
className="
mt-5
text-sm
text-white/50
"
>

{item.text}

</p>


</motion.div>


))}


</div>



</div>



</main>

)

}
