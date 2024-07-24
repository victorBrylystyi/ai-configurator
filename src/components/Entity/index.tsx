

export const Entity = () => {

    return (
        <mesh position={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshNormalMaterial />
        </mesh>
    );
};