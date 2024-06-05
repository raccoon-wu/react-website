import React from 'react';
import * as Char3D from "./Characters/charactersExport";
import * as Obj3D from "./Objects/objectExport";
import * as Env3D from "./Environments/environmentsExport";

export const presetsOf3DCharacters = [
    { id: 4, name: 'Eldritch Witch', images: [Char3D.NF_1, Char3D.NF_2, Char3D.NF_4, Char3D.NF_3] },
    { id: 3, name: 'Eldritch Warlock', images: [Char3D.NM_1, Char3D.NM_2, Char3D.NM_3, Char3D.NM_4] },
    { id: 1, name: 'Desert Tribes Assassin Female', images: [Char3D.AF_1, Char3D.AF_2, Char3D.AF_3, Char3D.AF_4] },
    { id: 2, name: 'Desert Tribes Assassin Male', images: [Char3D.AM_1, Char3D.AM_2, Char3D.AM_3, Char3D.AM_4] },
    { id: 6, name: 'Dark Woods Warrior', images: [Char3D.MeM_1, Char3D.MeM_2, Char3D.MeM_3, Char3D.MeM_4] },
    { id: 5, name: 'Dark Woods Archer', images: [Char3D.MeF_1, Char3D.MeF_2, Char3D.MeF_3, Char3D.MeF_4] },
    { id: 7, name: 'Dwarf Pirate', images: [Char3D.BF_1, Char3D.BF_2, Char3D.BF_3, Char3D.BF_4] },
    { id: 8, name: 'Minotaur Pirate', images: [Char3D.BM_1, Char3D.BM_2, Char3D.BM_3, Char3D.BM_4] }
];

export const presetOf3DObjects = [
    { id: 1, name: 'Crab Lantern', images: [Obj3D.C_1, Obj3D.C_2, Obj3D.C_3, Obj3D.C_W] },
    { id: 2, name: 'Eel Lamp', images: [Obj3D.E_1, Obj3D.E_2, Obj3D.E_3, Obj3D.E_W] },
    { id: 3, name: 'Jellyfish Compass', images: [Obj3D.J_1, Obj3D.J_2, Obj3D.J_3, Obj3D.J_W] },
    { id: 4, name: 'Shark Lamp', images: [Obj3D.S_1, Obj3D.S_2, Obj3D.S_3, Obj3D.S_W] },
    { id: 5, name: 'Octopus Bottle', images: [Obj3D.T_1, Obj3D.T_2, Obj3D.T_3, Obj3D.T_W] },
    { id: 6, name: 'Faberge Egg', images: [Obj3D.Egg_1, Obj3D.Egg_W] }
];

export const presetOf3DEnvironments = [
    { id: 1, name: 'Frosted Cave', images: [Env3D.I_1] }
];