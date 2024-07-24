import { useEffect, useState } from "react";
import { state } from "../../store";
import { useSnapshot } from "valtio";
import { DoubleSide, Texture } from "three";
import { hf } from "../../index";
import { TransformControls } from "@react-three/drei";

export const Entity = (props: {id: string}) => {

    const {message, image} = useSnapshot(state).msgs[props.id];

    const [texture, setTexture] = useState<Texture | null>(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (image) return;
        console.log('useEffect')
        async function fetchData() {
            await hf.textToImage({
                inputs: message,
                model: 'stabilityai/stable-diffusion-2',
                parameters: {
                    negative_prompt: 'blurry',
                }
                }, {
                    wait_for_model: true
                })
                .catch(rej => console.error(rej))
                .then(res => {
                const url = URL.createObjectURL(res as Blob); 

                const image = new Image();
                image.src = url;
                image.onload = function() { 

                    const text = new Texture(image);
                    text.needsUpdate = true;
                    setTexture(text)
                };
            })
        }

        fetchData();

    }, [image, message])

    return (<>
        {hover ? 
                <TransformControls mode='translate'> 
                <mesh
                      onPointerOver={(event) => setHover(true)}
                      onPointerOut={(event) => setHover(false)}
                >
                    <planeGeometry args={[10, 10]} />
                    {(texture ? <meshBasicMaterial needsUpdate map={texture} /> : <meshBasicMaterial color={'red'} map={null} />)}
                </mesh>
                </TransformControls> : 
                                <mesh
                                onPointerOver={(event) => setHover(true)}
                                onPointerOut={(event) => setHover(false)}
                          >
                              <planeGeometry args={[10, 10]} />
                              {(texture ? <meshBasicMaterial needsUpdate map={texture} /> : <meshBasicMaterial color={'red'} map={null} />)}
                          </mesh>}
    </>);
};