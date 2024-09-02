import { UraSchedule } from "./uraSchedule";

export interface UrasProp {
  uras: {
    id: number;
    name: string;
    description: string;
    invalid_loops: string;
    invalid_retry_recording: string;
    invalid_destination: string;
    invalid_recording: string;
    retvm: string;
    timeout_time: number;
    directdial: boolean;
    options: Option[];
    schedules: UraSchedule[];
  }[];
}

export interface UraProp {
  ura: {
    id: number;
    name: string;
    description: string;
    invalid_loops: string;
    invalid_retry_recording: string;
    invalid_destination: string;
    invalid_recording: string;
    retvm: string;
    timeout_time: number;
    directdial: boolean;
    options: Option[];
    schedules: UraSchedule[];
  };
}

export interface Ura {
  id: number;
  name: string;
  description: string;
  invalid_loops: string;
  invalid_retry_recording: string;
  invalid_destination: string;
  invalid_recording: string;
  retvm: string;
  directdial: boolean;
  options: Option[];
  schedules: UraSchedule[];
}

export interface Option {
  id: number;
  ivr_id: number;
  dest: string;
  selection: string;
  ivr_ret: string;
  spoken: string;
}

