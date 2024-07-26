

export type Txt2ImgResp = Blob | undefined | null
// export type Img2ModelResp = Blob | undefined | null

export type PromptType = {
    id: string
    message: string
    image: Txt2ImgResp
    name: string
    // model: Img2ModelResp
}

export type MsgsCacheType = {
    [key: string]: PromptType
}

export type StoreType = {
    // currentMsg: string
    selected: string | null
    msgs: MsgsCacheType
    entities: string[]
}