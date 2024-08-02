import { z } from "zod";

export const uraScheduleSchema = z.object({
  id: z.coerce.number().optional(),
  ivr_id: z.coerce
    .number()
    .transform((value) => (value === 0 ? null : value))
    .nullable()
    .optional(),
  ivr_option_id: z.coerce
    .number()
    .transform((value) => (value === 0 ? null : value))
    .nullable()
    .optional(),
  init_day_of_week: z.string().min(1, "O dia inicial é obrigatório."),
  end_day_of_week: z.string().min(1, "O dia final é obrigatório."),
  start_time: z.string().min(1, "O horário inicial é obrigatório."),
  end_time: z.string().min(1, "O horário final é obrigatório."),
  recording_schedule: z.string().min(1, "O horário de gravação é obrigatório."),
  destination: z.string().min(1, "O destino é obrigatório."),
});

export type UraScheduleType = z.infer<typeof uraScheduleSchema>;
