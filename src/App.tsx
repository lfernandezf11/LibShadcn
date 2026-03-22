import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Acueduct } from './components/Acueduct'
import { Button } from "@/components/ui/button"
import FuzzyText from './components/FuzzyText'

export default function App() {
  return (
    <div className='relative h-dvh w-full overflow-hidden bg-background'>
      <Navbar />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
          ies albarregas
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-widest text-white/80 uppercase mt-2">
          la excelencia como estándar
        </p>
        
   
        <Button className="p-5 m-5 pointer-events-auto" variant="outline">
          Explora
        </Button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="pointer-events-auto"> 
          <FuzzyText 
            baseIntensity={0.12} 
            hoverIntensity={0.5} 
            enableHover
            fontSize={30} 
            className="text-sm md:text-base text-white/60 tracking-[0.2em] uppercase"
          >
            Tu futuro empieza aquí
          </FuzzyText>
        </div>
      </div>
     
  

      <Canvas camera={{ position: [10, 3, 3], fov: 90 }}>
        <Suspense fallback={null}> {/* Para manejar la carga del archivo */}
          <Stage intensity={0.7}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} />
            <Environment
              files="/qwantani_moon_noon_puresky_2k.exr"
              background />
            <Acueduct />
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