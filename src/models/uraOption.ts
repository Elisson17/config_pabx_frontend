export interface UrasOptionProp {
  options: {
    id: number;
    ura_id: number;
    digit: string;
    audio: string;
    destination: string;
    schedule_group: string;
  }[];
}

export interface UraOptionProp {
  options: {
    id: number;
    ura_id: number;
    digit: string;
    audio: string;
    destination: string;
    schedule_group: string;
  };
}

export interface UraOption {
  id: number;
  ura_id: number;
  digit: string;
  audio: string;
  destination: string;
  schedule_group: string;
}