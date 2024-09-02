import { z } from "zod";

export const audioSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, "O nome é obrigatorio."),
});

export type AudioType = z.infer<typeof audioSchema>;