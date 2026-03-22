import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { Acueducto2 } from './components/Acueducto2'
import { Demo } from './components/demo'

export default function App() {
  return (
    <div className='h-dvh'>
      <Demo/>
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <Suspense fallback={null}> {/* Para manejar la carga del archivo */}
          <Stage intensity={0.7}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} />
            <Environment
              files="/industrial_sunset_puresky_4k.exr"
              background />
            <Acueducto2 />
          </Stage>
        </Suspense>
        <OrbitControls
          enableZoom={false} // Evita zoom infinito al hacer scroll
          makeDefault
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div >
  )
}