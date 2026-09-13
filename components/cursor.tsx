"use client";

import {useEffect,useState} from "react";


export function Cursor(){

const [pos,setPos]=useState({
x:0,
y:0
});


useEffect(()=>{

const move=(e:MouseEvent)=>{

setPos({
x:e.clientX,
y:e.clientY
})

}

window.addEventListener(
"mousemove",
move
)


return ()=>window.removeEventListener(
"mousemove",
move
)

},[])



return (

<div

style={{
transform:
`translate(${pos.x+20}px,${pos.y+20}px)`
}}

className="
fixed
pointer-events-none
z-50
hidden
md:block
rounded-full
border
border-black/20
w-14
h-14
items-center
justify-center
text-[8px]
tracking-widest
uppercase
"

>

VIEW

</div>

)

}
