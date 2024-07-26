import { HfInference } from "@huggingface/inference";
import { state } from "../store";
import { suspend } from "suspend-react";

const hf = new HfInference(process.env.REACT_APP_MY_TOKEN);

const loadingFn = () => 
    (id:string) => {
        const {message, } = state.msgs[id];
        console.log('loadingFn', id)
        return new Promise<string>((res, reject) => {
            hf.textToImage({
                inputs: message,
                model: 'stabilityai/stable-diffusion-2',
                parameters: {
                    negative_prompt: 'blurry',
                }
                }, {
                    // wait_for_model: true,
                }
            )
            .catch(msg => reject(msg))
            .then(blob => {
                const url = URL.createObjectURL(blob as Blob); 
                res(url);
                // const image = new Image();
                // image.src = url;
                // image.onload = (e) => res(e.target as HTMLImageElement);
            }); 
        });
    }



export const useEntityAssets = (entityId: string) =>
    suspend(loadingFn(), [entityId]);


 
	//parameters?: {
		/**
		 * An optional negative prompt for the image generation
		 */
		//negative_prompt?: string;
		/**
		 * The height in pixels of the generated image
		 */
		//height?: number;
		/**
		 * The width in pixels of the generated image
		 */
		//width?: number;
		/**
		 * The number of denoising steps. More denoising steps usually lead to a higher quality image at the expense of slower inference.
		 */
		//num_inference_steps?: number;
		/**
		 * Guidance scale: Higher guidance scale encourages to generate images that are closely linked to the text `prompt`, usually at the expense of lower image quality.
		 */
		//guidance_scale?: number;
	//};
