import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Enable transparency
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 1;

    // Create multiple star layers with different colors
    const createStarLayer = (count, color, size, speed) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );

      const material = new THREE.PointsMaterial({
        color: new THREE.Color(color),
        size: size,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);

      return {
        stars,
        geometry,
        material,
        speed,
      };
    };

    // Create multiple star layers with theme colors
    const starLayers = [
      createStarLayer(1000, "#5C78FF", 0.003, 0.0005), // Primary color
      createStarLayer(800, "#28B9FF", 0.002, 0.001), // Secondary color
      createStarLayer(500, "#FFFFFF", 0.001, 0.0015), // White stars
    ];

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      starLayers.forEach((layer) => {
        layer.stars.rotation.x += layer.speed;
        layer.stars.rotation.y += layer.speed;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      // Dispose of all resources
      starLayers.forEach((layer) => {
        layer.geometry.dispose();
        layer.material.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full fixed inset-0 z-[1] bg-gradient-to-b from-primary-background/80 to-secondary-background/80"
    />
  );
};

export default StarsCanvas;
