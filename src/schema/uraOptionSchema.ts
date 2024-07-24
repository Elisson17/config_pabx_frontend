import { z } from "zod";

export const uraOptionSchema = z.object({
  id: z.coerce.number().optional(),
  ura_id: z.coerce
    .number()
    .transform((value) => (value === 0 ? null : value))
    .nullable()
    .optional(),
  digit: z.string().min(1, "O dígito é obrigatório."),
  audio: z.string().min(1, "O áudio é obrigatório."),
  destination: z.string().min(1, "O destino é obrigatório."),
  schedule_group: z.string().optional(),
});

export type UraOptionType = z.infer<typeof uraOptionSchema>;
