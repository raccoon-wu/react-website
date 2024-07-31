import * as Min from "../2DGalleryRenders/Creatures/2DCreatureExport.js";
import * as Char from "../2DGalleryRenders/Characters/2DCharacterExport.js";
import * as CA from "../2DGalleryRenders/ConceptArt/ConceptArtExport.js";

export const presetsOf2DMinions = [
{ id: 'M1', name: 'Sand Basilisk', images: [Min.M_1], blur: [Min.M_1_blur] },
{ id: 'M2', name: 'Baby Wolverine', images: [Min.M_2], blur: [Min.M_2_blur]  },
{ id: 'M3', name: 'Sand Spirit', images: [Min.M_3], blur: [Min.M_3_blur]  },
{ id: 'M4', name: 'Hyena Pup', images: [Min.M_4], blur: [Min.M_4_blur]  },
{ id: 'M5', name: 'Manticore Hatchling', images: [Min.M_5], blur: [Min.M_5_blur] }
];

export const presetsOf2DCharacters = [
    { id: 'C1', name: 'Star Guardian Lux', images: [Char.C_1], blur: [Char.C_1_blur] },
    { id: 'C2', name: 'Star Guardian Soraka', images: [Char.C_2], blur: [Char.C_2_blur] },
    { id: 'C3', name: 'Star Guardian Miss Fortune', images: [Char.C_3], blur: [Char.C_3_blur] },
    { id: 'C4', name: 'Battle Bunny Miss Fortune', images: [Char.C_4], blur: [Char.C_4_blur] },
    { id: 'C5', name: 'Triad Leader', images: [Char.C_5], blur: [Char.C_5_blur] },
    { id: 'C6', name: 'Triad Thug', images: [Char.C_6], blur: [Char.C_6_blur] },
    { id: 'C7', name: 'Bewitching Janna & Miss Fortune', images: [Char.C_7], blur: [Char.C_7_blur] },
    { id: 'C8', name: 'Cosmic & Dark Star Lux', images: [Char.C_8], blur: [Char.C_8_blur] },
  ];

  export const presetsOfConceptArt = [
    {
      id: 'CA1',
      name: 'Eldritch Warlocks',
      images: [
        CA.N_F, 
        CA.N_B1,
        CA.N_B2,
        CA.N_C1
      ]
    },
    {
      id: 'CA2',
      name: 'Dark Woods Warriors',
      images: [
        CA.M_F, 
        CA.M_B1,
        CA.M_B2,
        CA.M_C1,
        CA.M_C2
      ]
    },
    {
      id: 'CA3',
      name: 'Pirates',
      images: [
        CA.B_F, 
        CA.B_B1,
        CA.B_B2,
        CA.B_B3,
        CA.B_B4
      ]
    },
    {
      id: 'CA4',
      name: 'Desert Tribes Assassins',
      images: [
        CA.A_F, 
        CA.A_B1,
        CA.A_B2,
        CA.A_B3,
        CA.A_C1
      ]
    },
    {
      id: 'CA5',
      name: 'Caramel Cheesecake',
      images: [CA.C1_F]
    },
    {
      id: 'CA7',
      name: 'Red Velvet Cakes',
      images: [CA.C3_F]
    },
    {
      id: 'CA6',
      name: 'Strawberry Shortcake',
      images: [CA.C2_F]
    },
    {
      id: 'CA8',
      name: 'Funfetti Cake',
      images: [CA.C4_F]
    },
    {
      id: 'CA9',
      name: 'Matcha Chiffon Cake',
      images: [CA.C5_F]
    },
    {
      id: 'CA10',
      name: 'Chocolate Mud Cake',
      images: [CA.C6_F]
    },
  ];