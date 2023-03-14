import { OrbitControls } from "@react-three/drei";
import { BoxGeometryProps, Canvas, MeshProps } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BoxGeometry, Color, DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, SphereGeometry } from "three";
import * as dat from "dat.gui";
import { BoxProps, Debug, Physics, PlaneProps, useBox, usePlane } from "@react-three/cannon";


export default function WalkWorld() {
  const sphereRef = useRef<any>();
  useEffect(() => {
    const gui = new dat.GUI({
      width: 400
    });

    const options = {
      sphereColor: "#fafafa"
    };

    gui.addColor(options, "sphereColor").onChange(() => {
      sphereRef.current?.material?.color?.set(options.sphereColor);
    })
      .name("Sphere Color");

    return () => {
      gui.destroy();
    }
  });

  const Cube = (props: BoxProps) => {
    const [ref] = useBox<Mesh>(() => ({ mass: 1, position: [0, 5, 0], ...props }));
    return (
      <mesh ref={ref} castShadow={true}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  const Plane = (props: PlaneProps) => {
    const [ref] = usePlane<Mesh>(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref} receiveShadow={true}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    );
  }

  return (
    <Canvas shadows={true} style={{ width: "100vw", height: "100vh" }}>
      <ambientLight color="#000000" />
      <directionalLight intensity={1} position={[10, 10, 10]} castShadow={true} />
      <Physics>
        <Debug color="black" scale={1.1}>
          <Cube position={[0, 5, 0]} />
          <Cube position={[0, 10, 0]} />
          <Plane position={[0, 0, 0]} />
        </Debug>
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}
