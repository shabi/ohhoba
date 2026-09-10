"use client";

import { Artifact } from "../components/artifact";
import { motion } from "framer-motion";


export default function Home(){

return (

<main
className="
bg-[#f5f1e8]
text-[#111]
min-h-screen
overflow-visible
relative
"
>


{/* HEADER */}

<div
className="
absolute
top-8
left-8
right-8
flex
justify-between
text-[10px]
tracking-[0.45em]
uppercase
text-neutral-400
"
>

<span>
OHHOBA ARCHIVE
</span>


<span>
COLLECTION 001
</span>

</div>



{/* HERO */}

<section

className="
h-screen
relative
px-16
pt-40
"

>


<div
className="
text-[11px]
tracking-[0.6em]
uppercase
text-neutral-400
mb-16
"
>

Museum Of Future Imagination

</div>



<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-[clamp(90px,15vw,230px)]
leading-[0.8]
font-light
tracking-[-0.05em]
"

>

OHHOBA

</motion.h1>



<div

className="
mt-24
max-w-md
"

>

<p

className="
text-3xl
leading-relaxed
font-light
text-neutral-600
"

>

A place where impossible ideas are preserved.

</p>


<button

className="
mt-12
border
border-neutral-300
rounded-full
px-10
py-4

text-[11px]
tracking-[0.45em]
uppercase

hover:bg-black
hover:text-white
transition

"

>

Open Archive

</button>


</div>



{/* ARTIFACT */}

<div
className="
fixed
right-[12%]
top-1/2
-translate-y-1/2

z-[100]

pointer-events-none

"
>

<Artifact />

</div>




{/* SIDE DATA */}

<div

className="
absolute
right-16
bottom-40

text-[10px]
tracking-[0.35em]
uppercase
text-neutral-400

"

>

ARTIFACT 001

<br/>

UNKNOWN SEED

<br/>

ORIGIN : UNDEFINED

<br/>

STATE : ALIVE

</div>



</section>





{/* ARCHIVE SECTION */}


<section

className="
min-h-screen
px-16
pt-32
border-t
border-neutral-200

"

>


<div

className="
text-[10px]
tracking-[0.5em]
uppercase
text-neutral-400
"

>

Latest Discoveries

</div>



<div className="mt-20">


{
[
"Unknown Seed / Living Object",
"Silent Language",
"Memory Machine"

].map((item,index)=>(


<div

key={item}

className="
border-t
border-neutral-200
py-12

grid
grid-cols-3

"

>


<span

className="
text-xs
tracking-widest
text-neutral-400
"

>

ARCHIVE00{index+1}

</span>


<span

className="
text-3xl
font-light

"

>

{item}

</span>



<span

className="
text-sm
text-neutral-500

"

>

A discovered object without a known purpose.

</span>



</div>


))

}


</div>


</section>



</main>

)

}
