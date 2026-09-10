"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function Core(){

  const mesh = useRef<THREE.Mesh>(null);


  useFrame((state)=>{

    if(!mesh.current) return;


    mesh.current.rotation.y =
      state.clock.elapsedTime * 0.12;


    mesh.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.5
      ) * 0.15;


    const scale =
      1 +
      Math.sin(
        state.clock.elapsedTime * 1.5
      ) * 0.04;


    mesh.current.scale.set(
      scale,
      scale,
      scale
    );

  });



  return (

    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={1.5}
    >

      <mesh
        ref={mesh}
        position={[0,-2.2,-3]} scale={0.32}
      >

        <icosahedronGeometry
          args={[1,5]}
        />


        <meshPhysicalMaterial

          color="#8BC34A"

          transmission={1}

          thickness={3}

          roughness={0.15}

          metalness={0}

          transparent

          opacity={0.75}

          emissive="#315B22"

          emissiveIntensity={1.5}

        />

      </mesh>

    </Float>

  );
}



function CameraMotion(){

  const { camera } = useThree();


  useFrame((state)=>{

    const x =
      state.pointer.x * 0.15;

    const y =
      state.pointer.y * 0.15;


    camera.position.x +=
      (x-camera.position.x)*0.02;


    camera.position.y +=
      (y-camera.position.y)*0.02;


    camera.lookAt(0,0,0);

  });


  return null;

}



export default function World(){


return (

<Canvas

style={{
width:"100vw",
height:"100vh"
}}

camera={{
position:[0,0,5],
fov:45
}}

>


<CameraMotion/>


<color
attach="background"
args={["#000000"]}
/>


<ambientLight
intensity={0.4}
/>



<pointLight

position={[3,3,3]}

intensity={15}

color="#9BE15D"

/>



<pointLight

position={[-3,-2,-3]}

intensity={8}

color="#22d3ee"

/>





<pointLight

position={[0,-3,2]}

intensity={5}

color="#8BC34A"

/>


<pointLight
position={[0,-2,1]}
intensity={8}
color="#8BC34A"
/>

<Core/>



<Stars

radius={120}

depth={80}

count={6000}

factor={5}

fade

speed={0.4}

/>


<Environment preset="night"/>


</Canvas>

);

}
