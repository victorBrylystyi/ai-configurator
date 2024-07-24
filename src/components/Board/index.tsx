

import { useSnapshot } from 'valtio';
import {state} from '../../store'
import { Entity } from '../Entity';
import { TransformControls } from '@react-three/drei';

export const Board = () => {

    const entities = useSnapshot(state).entities;

    return <>

            {entities.map(id => (<Entity key={id} id={id}/>))}
    </>
};