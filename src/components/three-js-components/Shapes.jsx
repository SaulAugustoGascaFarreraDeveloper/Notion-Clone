"use client"
import { ContactShadows, Environment, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import * as THREE from "three";

export function Shapes(){
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
        <Canvas 
        shadows 
        className='z-20'
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}>

            <Suspense fallback={null}>
                {/* <group>
                    <mesh 

                      geometry={new THREE.IcosahedronGeometry(3)}
                    
                    />
                </group> */}
                <Geometries />
                <ContactShadows
                  position={[0, -3.5, 0]}
                  opacity={0.65}
                  scale={40}
                  blur={1}
                  far={9}
                />
                <Environment preset='sunset' /> 
            </Suspense>

        </Canvas>
    </div>
  )
}

function Geometries(){

  const geometries = [{
    position: [0,0,0],
    r: 0.3,
    geometry: new THREE.IcosahedronGeometry(3)
  },{
    position: [1,-0.75,4],
    r: 0.4,
    geometry: new THREE.CapsuleGeometry(0.5,1.6,2,16)
  }]

  const materials = [
    new THREE.MeshNormalMaterial(),
    //new THREE.MeshStandardMaterial({color:"0xe74c3e",roughness: 0.3})
  ]

  return geometries.map(({position,r,geometry}) => (
      <Geometry 

        key={JSON.stringify(position)}
        position={position.map((p) => p * 2)}
        geometry={geometry}
        materials={materials}
        r={r}

      />
  ))

}


const Geometry = ({r,position,geometry,materials}) => {


  const meshRef = useRef()

  return(
    <group position={position} ref={meshRef}>
        <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r} >
          <mesh 

            geometry={geometry}
            material={materials}
            visible={true}
          
          />
        </Float>
    </group>
  )

}

