import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    // Set the position of the camera
    camera.position.z = 5;

    // Create a new Three.js renderer and set its size
    if (canvasRef.current == null) throw new Error('Could not get canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(400, 400);

    // Create a new Three.js cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animate the cube by rotating it on each frame
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingCube;
