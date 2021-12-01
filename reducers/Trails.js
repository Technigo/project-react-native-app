import { createSlice } from '@reduxjs/toolkit';

const TrailData = [
  {
    id: 1,
    title: 'Norra Sverige (fjällen)',
    trail: [],
    description: [],
  },
  {
    id: 2,
    title: 'Norra Sverige (icke fjällen)',
    trail: [],
    description: [],
  },

  {
    id: 3,
    title: 'Mellersta Sverige',
    trail: [
      '7-torpsleden',
      'Danderyds kyrka – Såstaholm',
      'Grövelsjön – Storrödtjärn',
      'Gåsvik – Sandviken',
    ],
    description: [
      '7-torpsleden är en 7,9 kilometer lång vandring i gränslandet mellan Sverige och Norge. Precis som namnet antyder passerar leden sju torp, och den följer de gamla stigar som trampats av finska nybyggare under århundraden.',
      'Vandringen går från Danderyds kyrka, bara en kilometer från Mörby Centrum, in i Rinkebyskogen. Här går du på vältrampade stigar, och längre norrut passerar du mängder av fornlämningar och runstenar. Mellan Rösjön och Vallentunasjön går du till stor del längs de gamla vikingalederna. Det är 15 kilometer lätt vandring, och vill du bo bra så tar du in på Såstaholms hotell i slutet på etappen.',
      'Från STF Grövelsjön Fjällstation går du åt nordost över Långfjället. På Långfjället passerar du en informationstavla om Linnés möte med falkfångare 1734. Här finns lämningar från ett gammalt falkfångarläger. Sträckans högsta punkt ligger redan efter fem kilometer, söder om Jakobshöjden. Härifrån får du storslagna vyer över Storvätteshogna – Svealands högsta fjäll som reser sig 1 204 meter över havet. Därefter sluttar leden svagt utför mot Hävlingen.',
      'På Roslagsledens kortaste sträcka, etapp 10 mellan Gåsvik och Sandviken, hinner du med både museibesök och en avstickare till Väddö gårdsmejeri.',
    ],
    Etappens längd: ['7,9km', '15km', '21km', '9km'],
  },

  { id: 4, title: 'Södra Sverige', trail: [], description: [], Etappens längd: [] },
];

export const TrailData = createSlice({
  name: 'trails',
  initialState: TrailData,
});
