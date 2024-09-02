import { z } from "zod";

export const uraSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  invalid_loops: z.string().min(1, "O número de tentativas é obrigatório."),
  invalid_retry_recording: z
    .string()
    .min(1, "Áudio de instrução após tentativa invalida é obrigatorio"),
  invalid_destination: z
    .string()
    .min(1, "O destino de tentativas invalidas é obrigatorio."),
  invalid_recording: z
    .string()
    .min(1, "O audio de tentativa máxima invalida é obrigatório."),
  timeout_time: z.number().min(1, "O tempo máximo de espera é obrigatório."),
  directdial: z.preprocess((value) => value === true, z.boolean()).optional(),
});

export type UraType = z.infer<typeof uraSchema>;
