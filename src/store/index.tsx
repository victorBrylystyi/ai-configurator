import { PromptType, StoreType } from "@/helpers/types";
import { proxy } from "valtio";

export const state = proxy<StoreType>({
    // currentMsg: '',
    msgs: {},
    entities: []
});

let a = 1;

export const createEntity = (id:string) => {
    state.entities.push(id);
};

export const createNewMsg = (newMsg:Partial<PromptType>) => {
    state.msgs[newMsg.id] = {
        id: newMsg.id,
        message: newMsg.message,
        name: `pic ${a}`,
        image: null
    };
    createEntity(newMsg.id);
    a++;
};



