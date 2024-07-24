export interface UrasProp {
  uras: {
    id: number;
    name: string;
    extension: string;
    timeout_time: number;
    timeout_append_announce: number;
    announcement: string;
    is_active: boolean;
    description: string;
    invalid_append_announce: boolean;
    invalid_loops: string;
    options: Option[];
  }[];
}

export interface UraProp {
  ura: {
    id: number;
    name: string;
    extension: string;
    timeout_time: number;
    timeout_append_announce: number;
    announcement: string;
    is_active: boolean;
    description: string;
    invalid_append_announce: boolean;
    invalid_loops: string;
    options: Option[];
  };
}

export interface Ura {
  id: number;
  name: string;
  extension: string;
  timeout_time: number;
  timeout_append_announce: number;
  announcement: string;
  is_active: boolean;
  description: string;
  invalid_append_announce: boolean;
  invalid_loops: string | null;
  options: Option[];
}

export interface Option {
  id: number;
  ura_id: number;
  digit: string;
  audio: string;
  destination: string;
  schedule_group: string;
}
