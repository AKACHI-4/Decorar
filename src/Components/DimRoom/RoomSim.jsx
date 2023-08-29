import React, { Component, useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// function Model({ url }) {
//   const modelRef = useRef();

//   return <primitive object={modelRef.current} />;
// }

function RoomSim() {
  const containerRef = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const controls = useRef();

  // const selectedAccessory = useContext(AccessoryContext).selectedAccessory;

  useEffect(() => {
    const roomWidth = 3;
    const roomHeight = 2.5;
    const roomDepth = 5;

    camera.position.set(15, 4, 8);
    camera.lookAt(10, -35, 10);

    const fov =
      4 * Math.atan(roomHeight / 2 / camera.position.z) * (180 / Math.PI);
    camera.fov = fov;
    camera.updateProjectionMatrix();

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );

    containerRef.current.appendChild(renderer.domElement);
    renderer.setClearColor(0x99ccff);

    controls.current = new OrbitControls(camera, renderer.domElement);
    controls.current.update();

    const handleWindowResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    const wallsMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });

    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    const wallsGeometry = new THREE.BoxGeometry(
      roomWidth,
      roomHeight,
      roomDepth
    );
    const floorGeometry = new THREE.BoxGeometry(roomWidth, 0.1, roomDepth);

    const wallsMesh = new THREE.Mesh(wallsGeometry, wallsMaterial);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    wallsMesh.position.y = roomHeight / 2 - 0.05;
    floorMesh.position.y = 0;

    scene.add(wallsMesh, floorMesh);

    // if (selectedAccessory) {
    //   const loader = new THREE.GLTFLoader();

    //   loader.load(selectedAccessory.ModelUrl, (gltf) => {
    //     const accessoryModel = gltf.scene;

    //     accessoryModel.position.set(0, 0.1, 0);
    //     accessoryModel.scale.set(0.2, 0.2, 0.2);

    //     scene.add(accessoryModel);

    //     const handleMouseEvents = (event) => {
    //       if (accessoryModel) {
    //         const mouse = new THREE.Vector2(
    //           (event.clientX / window.innerWidth) * 2 - 1,
    //           -(event.clientY / window.innerHeight) * 2 + 1
    //         );

    //         const raycaster = new THREE.Raycaster();
    //         raycaster.setFromCamera(mouse, camera);

    //         const intersects = raycaster.intersectObject(floorMesh);

    //         if (intersects.length > 0) {
    //           const intersectionPoint = intersects[0].point;
    //           accessoryModel.position.copy(intersectionPoint);
    //         }
    //       }
    //     };

    //     document.addEventListener("mousemove", handleMouseEvents);
    //     document.addEventListener("touchmove", handleMouseEvents);

    //     animate();
    //   });
    // }

    animate();

    return () => {
      controls.current.dispose();
      window.removeEventListener("resize", handleWindowResize);
    };
    // }, [selectedAccessory]);
  }, []);

  const animate = () => {
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };

  return (
    <div
      className="w-full h-full rounded-md overflow-hidden p-auto"
      ref={containerRef}
    ></div>
  );
}

export default RoomSim;
