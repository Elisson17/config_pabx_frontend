import { z } from "zod";

export const uraOptionSchema = z.object({
  id: z.coerce.number().optional(),
  ivr_id: z.coerce
    .number()
    .transform((value) => (value === 0 ? null : value))
    .nullable()
    .optional(),
  dest: z.string().min(1, "O destino é obrigatorio"),
  selection: z.string().min(1, "O Digito é obrigatório."),
  ivr_ret: z.preprocess((value) => value === true, z.boolean()).optional(),
  spoken: z.string().optional(),
  schedules: z.array(z.any()).optional(),
});

export type UraOptionType = z.infer<typeof uraOptionSchema>;
