"use client"

import { useMemo, useEffect } from 'react'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color('#FFFFFF'),
    bgColor: new THREE.Color('#121212'),
    trailColor: new THREE.Color('#FFC300'),
    mouseTrail: null,
    render: 0,
    rotation: 0,
    gridSize: 50,
    dotOpacity: 0.05
  },
  /* glsl */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform vec3 trailColor;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 rotatedUv = rotate(uv, rotation);

      // Create a grid
      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

      // Calculate distance from the center of each cell
      float baseDot = sdfCircle(gridUv, 0.25);

      // Screen mask
      float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y); // 0 at the top, 1 at the bottom
      vec2 centerDisplace = vec2(0.7, 1.1);
      float circleMaskCenter = length(uv - centerDisplace);
      float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);
      
      float combinedMask = screenMask * circleMaskFromCenter;
      float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

      // Mouse trail effect
      float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      
      float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);

      // Create dots with animated scale, influenced by mouse
      float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

      float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

      float smoothDot = smoothstep(0.05, 0.0, sdfDot);

      float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

      // Mix background color with dot color
      // If mouseInfluence is high, we shift towards trailColor
      vec3 finalDotColor = mix(dotColor, trailColor, mouseInfluence);
      
      vec3 composition = mix(bgColor, finalDotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));

      gl_FragColor = vec4(composition, 1.0);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
)

// Extend Three.js with the custom material
import { extend } from '@react-three/fiber'
extend({ DotMaterial })

// Add type definition for the custom material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      dotMaterial: any
    }
  }
}

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)
  const { theme } = useTheme()
  
  const rotation = 0
  const gridSize = 100

  const getThemeColors = () => {
    // Pironi Colors
    // Cream: #F8F4EF
    // Dark: #050509
    // Yellow: #FFC300
    // Muted: #E4DFD7
    
    return {
      dotColor: '#050509', // Pironi Dark dots for contrast on light bg
      bgColor: '#F8F4EF',  // Pironi Cream background
      trailColor: '#FFC300', // Pironi Yellow for trail
      dotOpacity: 0.15
    }
  }

  const themeColors = getThemeColors()

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: 0.08,
    maxAge: 350,
    interpolate: 1,
    ease: function easeInOutCirc(x) {
      return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    }
  })

  const dotMaterial = useMemo(() => {
    return new DotMaterial()
  }, [])

  useEffect(() => {
    dotMaterial.uniforms.dotColor.value.setHex(parseInt(themeColors.dotColor.replace('#', ''), 16))
    dotMaterial.uniforms.bgColor.value.setHex(parseInt(themeColors.bgColor.replace('#', ''), 16))
    dotMaterial.uniforms.trailColor.value.setHex(parseInt(themeColors.trailColor.replace('#', ''), 16))
    dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
  }, [theme, dotMaterial, themeColors])

  useFrame((state) => {
    dotMaterial.uniforms.time.value = state.clock.elapsedTime
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    onMove(e)
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={handlePointerMove}>
      <planeGeometry args={[2, 2]} />
      <dotMaterial
        ref={dotMaterial}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        rotation={rotation}
        gridSize={gridSize}
        mouseTrail={trail}
        render={0}
        transparent
      />
    </mesh>
  )
}

export const DotScreenShader = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping,
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
