import { UraSchedule } from "./uraSchedule";

export interface UrasProp {
  uras: {
    id: number;
    name: string;
    description: string;
    announcement: string;
    invalid_loops: string;
    invalid_retry_recording: string;
    invalid_destination: string;
    invalid_recording: string;
    retvm: string;
    timeout_time: number;
    timeout_recording: string;
    timeout_retry_recording: string;
    timeout_destination: string;
    timeout_loops: string;
    timeout_append_announce: boolean;
    invalid_append_announce: boolean;
    timeout_ivr_ret: boolean;
    invalid_ivr_ret: boolean;
    extension: string;
    directdial: boolean;
    timeout_enabled: boolean;
    invalid_enabled: boolean;
    options: Option[];
    schedules: UraSchedule[];
  }[];
}

export interface UraProp {
  ura: {
    id: number;
    name: string;
    description: string;
    announcement: string;
    invalid_loops: string;
    invalid_retry_recording: string;
    invalid_destination: string;
    invalid_recording: string;
    retvm: string;
    timeout_time: number;
    timeout_recording: string;
    timeout_retry_recording: string;
    timeout_destination: string;
    timeout_loops: string;
    timeout_append_announce: boolean;
    invalid_append_announce: boolean;
    timeout_ivr_ret: boolean;
    invalid_ivr_ret: boolean;
    extension: string;
    directdial: boolean;
    timeout_enabled: boolean;
    invalid_enabled: boolean;
    options: Option[];
    schedules: UraSchedule[];
  };
}

export interface Ura {
  id: number;
  name: string;
  description: string;
  announcement: string;
  invalid_loops: string;
  invalid_retry_recording: string;
  invalid_destination: string;
  invalid_recording: string;
  retvm: string;
  timeout_time: number;
  timeout_recording: string;
  timeout_retry_recording: string;
  timeout_destination: string;
  timeout_loops: string;
  timeout_append_announce: boolean;
  invalid_append_announce: boolean;
  timeout_ivr_ret: boolean;
  invalid_ivr_ret: boolean;
  extension: string;
  directdial: boolean;
  timeout_enabled: boolean;
  invalid_enabled: boolean;
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

