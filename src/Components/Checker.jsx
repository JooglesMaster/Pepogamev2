/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 checker.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/checker.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.Checkered} position={[4.913, 0, 4.996]} receiveShadow/>
      <mesh geometry={nodes.Plane002.geometry} material={materials.Checkered} position={[-19.3, 11.2, -10.44]} receiveShadow/>
    </group>
  )
}

useGLTF.preload('/checker.glb')