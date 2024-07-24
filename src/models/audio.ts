export interface Audio {
  id: number;
  name: string;
}

export interface AudioProp {
  audios: {
    id: number;
    name: string;
  }[];
}
