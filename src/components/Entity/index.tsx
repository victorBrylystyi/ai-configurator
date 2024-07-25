import { useEffect, useState } from "react";
import { state } from "../../store";
import { useSnapshot } from "valtio";
import { DoubleSide, Texture } from "three";
import { hf } from "../../index";
import { TransformControls, useTexture } from "@react-three/drei";
import { useEntityAssets } from "../../hooks/useEntityAssets";

export const Entity = (props: {id: string}) => {

    const {message} = useSnapshot(state).msgs[props.id];

    const [texture, setTexture] = useState<Texture | null>(null);


    const img = useEntityAssets(props.id);

    useEffect(() => {
        if (img) {
            console.log(img);
            const text = new Texture(img);
            text.needsUpdate = true;
            setTexture(text)
        }
    }, [img])



    // useEffect(() => {
    //     if (image) return;
    //     console.log('useEffect')
    //     async function fetchData() {
    //         await hf.textToImage({
    //             inputs: message,
    //             model: 'stabilityai/stable-diffusion-2',
    //             parameters: {
    //                 negative_prompt: 'blurry',
    //             }
    //             }, {
    //                 wait_for_model: true
    //             })
    //             .catch(rej => console.error(rej))
    //             .then(res => {
    //             const url = URL.createObjectURL(res as Blob); 

    //             const image = new Image();
    //             image.src = url;
    //             image.onload = function() { 

    //                 const text = new Texture(image);
    //                 text.needsUpdate = true;
    //                 setTexture(text)
    //             };
    //         })
    //     }

    //     fetchData();

    // }, [image, message])

    return (<>
                <TransformControls mode='translate'> 
                <mesh
                >
                    <planeGeometry args={[10, 10]} />
                    {(texture ? <meshBasicMaterial needsUpdate map={texture} /> : <meshBasicMaterial color={'red'} map={null} />)}
                </mesh>
                </TransformControls>
    </>);
};