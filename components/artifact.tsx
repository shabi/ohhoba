"use client";

import { motion } from "framer-motion";

export function Artifact(){

return (

<div
style={{
width:"240px",
height:"240px",
position:"relative",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>


<motion.div

style={{
position:"absolute",
width:"220px",
height:"220px",
borderRadius:"50%",
background:"#9acb52",
filter:"blur(75px)",
opacity:.2
}}

animate={{
scale:[1,1.2,1],
opacity:[.15,.28,.15]
}}

transition={{
duration:10,
repeat:Infinity,
ease:"easeInOut"
}}

/>



<motion.div

style={{
position:"absolute",
width:"150px",
height:"150px",
borderRadius:"50%",
border:"1px solid rgba(154,203,82,.12)"
}}

animate={{
scale:[1,1.04,1]
}}

transition={{
duration:8,
repeat:Infinity,
ease:"easeInOut"
}}

/>



<motion.div

style={{
width:"90px",
height:"90px",
borderRadius:"50%",
background:
"radial-gradient(circle at 35% 35%, #d4f28a, #9acb52 55%, #6fa83d)",
boxShadow:
"0 0 90px rgba(154,203,82,.45)"
}}

animate={{
scale:[1,1.06,1],
y:[0,-4,0]
}}

transition={{
duration:7,
repeat:Infinity,
ease:"easeInOut"
}}

/>


</div>

)

}
