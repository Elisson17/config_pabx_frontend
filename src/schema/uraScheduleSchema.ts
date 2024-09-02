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
  days_of_week: z.array(z.number()).min(1, "É obrigatório selecionar pelo menos uma semana."),
  month: z.array(z.number()).min(1, "É obrigatório selecionar pelo menos um mês."),
  day_of_month: z.array(z.number()).min(1, "É obrigatório selecionar pelo menos um dia."),
  time: z.array(z.string()).min(1, "É obrigatório selecionar pelo menos uma hora."),
  destination: z.string().min(1, "É obrigatório selecionar um destino."),
});

export type UraScheduleType = z.infer<typeof uraScheduleSchema>;
