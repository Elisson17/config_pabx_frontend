export interface InputGlobalProps {
  email: string;
  password: string;
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
  options: any;
  context: string;
  username: string;
  option: string;
  digit: string;
  audio: string;
  destination: string;
  invalid_announcement: string;
  default_destination: string;
  play_hold_music: boolean;
  hold_music_audio: string;
  record_calls: boolean;
}
