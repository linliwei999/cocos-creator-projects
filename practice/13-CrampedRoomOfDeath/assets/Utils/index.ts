import { Node, UITransform, Layers, SpriteFrame } from 'cc';

export const createUINode = (name: string = '') =>{
    const node = new Node();
    const transform = node.addComponent(UITransform);
    transform.setAnchorPoint(0, 1);
    node.layer = 1 << Layers.nameToLayer("UI_2D");
    return node;
}

export const randomByRange = (start: number, end: number) =>{
    return Math.floor(start + (end - start) * Math.random());
}

const reg = /\((\d+)\)/;

const getNumberWithinString = (str: string) =>{
    return parseInt(str.match(reg)[1]) || 0;
}

export const sortSpriteFrame = (spriteFrames: SpriteFrame[]) =>{
    return spriteFrames.sort((a, b)=> getNumberWithinString(a.name) - getNumberWithinString(b.name));
}

export const randomStringByLength = (length: number) =>{
    return Array.from({ length }).reduce<string>((total, item)=> total + Math.floor(Math.random() * 10), '');
}