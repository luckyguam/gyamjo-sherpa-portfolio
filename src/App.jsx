import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import CartoonAvatar from './CartoonAvatar'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <Environment preset="sunset" />
          <CartoonAvatar />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
