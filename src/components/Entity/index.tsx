import { TransformControls, useTexture } from "@react-three/drei";
import { useEntityAssets } from "../../hooks/useEntityAssets";

export const Entity = (props: {id: string}) => {

    const url = useEntityAssets(props.id);
    const texture = useTexture(url);

    return <>
        <TransformControls mode='translate'> 
            <mesh>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial map={texture} />
            </mesh>
        </TransformControls>
    </>;
};

    // const url = suspend(async () => {
    //     // const res = await fetch(`https://hacker-news.firebaseio.com/${version}/item/${id}.json`)
    //     // return res.json()   
        
    //         const res = await hf.textToImage({
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

    //             return url;

    //             // const image = new Image();
    //             // image.src = url;
    //             // image.onload = function() { 

    //             //     const text = new Texture(image);
    //             //     text.needsUpdate = true;
    //             //     setTexture(text)
    //             // };
    //         });

    //         return res;
    //   }, [message])



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