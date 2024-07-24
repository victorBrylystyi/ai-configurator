import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.REACT_APP_MY_TOKEN);

await hf.textToImage({
  inputs: 'award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]',
  model: 'stabilityai/stable-diffusion-2',
  parameters: {
    negative_prompt: 'blurry',
  }
}, {
  wait_for_model: true
})
.catch(rej => console.error(rej))
.then(res => {console.log(res)})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

