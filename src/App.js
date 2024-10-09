/**
 * Special thanks to FireShip for helping me get things kicked off with thier
 * Three.js beginner tutoial on space and geometry.
 * 
 */
import { useEffect } from 'react';
import './App.css';

import * as THREE from 'three';

// Move around the 3D scene
import { OrbitControls } from 'three/examples/jsm/Addons.js';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#space')
    });
    
    const controls = new OrbitControls(camera, renderer.domElement);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const createTorus = () => {
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshBasicMaterial( { color: 'red' });
      const torus = new THREE.Mesh(geometry, material);
      return torus;
    }

    const spinTorus = () => {
      requestAnimationFrame(spinTorus);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      torus.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }

    const addLighting = () => {
      const pointLight = new THREE.PointLight(0xfff);
      pointLight.position.set(5, 5, 5);
      const ambientLight = new THREE.AmbientLight(0xfff);
      const gridHelper = new THREE.GridHelper(200);
      scene.add(pointLight, ambientLight, gridHelper);
    }

    addLighting();
  
    const addStar = () => {
      const  geometry = new THREE.SphereGeometry(0.25, 25, 25);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(window.innerWidth));
      star.position.set(x, y, z);
      scene.add(star);
    }

    // Generate 1000 stars
    Array(1000).fill().forEach(addStar);

    const torus = createTorus();
    scene.add(torus);
    spinTorus();
   
    renderer.render(scene, camera);
  }, []);
  return (
    <>
      <canvas id='space'></canvas>
      <main>
        <section>
        </section>
        <section>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
          <p>THIETSH a=sdf=lk asjdfl kaj eflkajs dflkja sdflkj aweflkj  asdf</p>
        </section>
      </main>
    </>
  );
}

export default App;
