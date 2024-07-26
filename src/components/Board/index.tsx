

import { useSnapshot } from 'valtio';
import {state} from '../../store'
import { Entity } from '../Entity';
import { Suspense } from "react";
import { Html } from "@react-three/drei";

const Loading = () => {

    return <Html center>
        LOADING...
    </Html>
}

export const Board = () => {

    const entities = useSnapshot(state).entities;

    return <>
        {entities.map(id => (
            <Suspense key={id+'susp'} fallback={<Loading />}> 
                <Entity key={id} id={id}/>
            </Suspense>
        ))}
    </>
};