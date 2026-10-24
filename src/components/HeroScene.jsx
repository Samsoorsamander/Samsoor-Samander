import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const RED = "#E50913";
const OFFWHITE = "#F8F3F3";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function usePointerTarget(enabled) {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return undefined;

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      target.current.x = x;
      target.current.y = y;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return target;
}

function AccentKnot({ reducedMotion, pointer }) {
  const group = useRef();
  const mesh = useRef();
  const accent = useRef();
  const tilt = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    tilt.current.x = THREE.MathUtils.damp(
      tilt.current.x,
      pointer.current.y * 0.35,
      4,
      delta
    );
    tilt.current.y = THREE.MathUtils.damp(
      tilt.current.y,
      pointer.current.x * 0.45,
      4,
      delta
    );

    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.32;
    }

    group.current.rotation.x =
      (reducedMotion ? 0.2 : Math.sin(t * 0.35) * 0.1) - tilt.current.x;
    group.current.rotation.z = tilt.current.y * 0.35;

    if (mesh.current?.material) {
      mesh.current.material.emissiveIntensity =
        0.08 + (reducedMotion ? 0 : Math.sin(t * 1.4) * 0.04);
    }
    if (accent.current?.material) {
      accent.current.material.emissiveIntensity =
        0.55 + (reducedMotion ? 0 : Math.sin(t * 2.1) * 0.15);
    }
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.35}
      floatIntensity={reducedMotion ? 0 : 0.6}
    >
      <group ref={group} scale={1.05}>
        <mesh ref={mesh}>
          <torusKnotGeometry args={[1, 0.28, 180, 28]} />
          <meshStandardMaterial
            color={OFFWHITE}
            metalness={0.85}
            roughness={0.28}
            emissive="#2a1818"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh ref={accent} scale={1.02}>
          <torusKnotGeometry args={[1, 0.08, 120, 12, 2, 3]} />
          <meshStandardMaterial
            color={RED}
            metalness={0.4}
            roughness={0.35}
            emissive={RED}
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </Float>
  );
}

function DustField({ reducedMotion, count = 140 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current || reducedMotion) return;
    points.current.rotation.y += delta * 0.04;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={OFFWHITE}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function DemandPaint({ active }) {
  const { invalidate } = useThree();

  useEffect(() => {
    if (active) invalidate();
  }, [active, invalidate]);

  return null;
}

function SceneContent({ reducedMotion, pointer, demand }) {
  return (
    <>
      <DemandPaint active={demand} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 3, 5]}
        intensity={1.1}
        color={OFFWHITE}
      />
      <pointLight position={[-3, 1, 2]} intensity={1.4} color={RED} distance={10} />
      <pointLight position={[2, -2, -2]} intensity={0.5} color="#fff5f5" />
      <AccentKnot reducedMotion={reducedMotion} pointer={pointer} />
      <DustField reducedMotion={reducedMotion} />
    </>
  );
}

const HeroScene = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const reducedMotion = usePrefersReducedMotion();
  const pointer = usePointerTarget(!reducedMotion);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = visible && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative z-10 h-[260px] w-full sm:h-[320px]"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop={animate ? "always" : "demand"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        style={{ width: "100%", height: "100%" }}
      >
        <SceneContent
          reducedMotion={reducedMotion}
          pointer={pointer}
          demand={!animate}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;
