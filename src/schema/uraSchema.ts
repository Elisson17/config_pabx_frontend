import { z } from "zod";

export const uraSchema = z.object({
  name: z.string().min(1, "O nome é obrigatorio."),
  extension: z.string().min(1, "A extensão é obrigatória."),
  timeout_time: z.coerce.number().optional(),
  timeout_append_announce: z.coerce.number().optional(),
  announcement: z.string().optional(),
  description: z.string().optional(),
  invalid_append_announce: z
    .preprocess((value) => value === true, z.boolean())
    .optional(),
  invalid_loops: z.string().optional(),
  invalid_announcement: z.string().optional(),
  default_destination: z.string().optional(),
  play_hold_music: z
    .preprocess((value) => value === true, z.boolean())
    .optional(),
  hold_music_audio: z.string().optional(),
  record_calls: z.preprocess((value) => value === true, z.boolean()).optional(),
});

export type UraType = z.infer<typeof uraSchema>;
