

import { useSnapshot } from 'valtio';
import {state} from '../../store'
import { Entity } from '../Entity';

export const Board = () => {

    const entities = useSnapshot(state).entities;

    return <>
        {entities.map(id => (<Entity key={id} />))}
    </>
};