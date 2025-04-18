import { useGLTF } from '@react-three/drei'

export default function CartoonAvatar() {
  const { scene } = useGLTF('/avatar.glb')
  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
}
