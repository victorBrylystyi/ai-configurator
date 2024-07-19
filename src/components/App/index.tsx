import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";
import { Overlay } from "../Overlay"

const App = () => {

    const colorRef = useRef(new Color(0.5, 0.5, 1));

    return <>
        <Canvas 
            eventSource={document.getElementById('root')} 
            eventPrefix="client"
        >
            <OrbitControls makeDefault />
            <Environment background preset="sunset" backgroundBlurriness={0.8} />
            <Grid 
                renderOrder={-1} 
                position={[0, -0.4, 0]} 
                infiniteGrid 
                cellSize={0.6} 
                cellThickness={0.6} 
                sectionSize={3.3} 
                sectionThickness={1.5} 
                sectionColor={colorRef.current} 
                fadeDistance={30} 
            />
        </Canvas>
        <Overlay />
    </>

}

export default App;