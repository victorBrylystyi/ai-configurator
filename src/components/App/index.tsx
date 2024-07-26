import { Environment, Grid, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";
import { Overlay } from "../Overlay"
import { Board } from "../Board";
import { useSnapshot } from "valtio";
import { state } from "../../store";

const Controls = () => {

    const selected = useSnapshot(state).selected;
    const scene = useThree(state => state.scene);

    return (
        <>
            {selected && <TransformControls object={scene.getObjectByName(selected)} />}
            <OrbitControls makeDefault />
        </>
    );
}

export const App = () => {

    const colorRef = useRef(new Color(0.5, 0.5, 1));

    return <>
        <Canvas 
            eventSource={document.getElementById('root')} 
            eventPrefix="client"
        >
            <Controls />
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
            <Board />
        </Canvas>
        
        <Overlay />
    </>

};