import { atom } from "recoil";
export const countAtom=atom({
    key:"countAtom",//must be unique for all atoms
    default:0//initial value 
});