import { z } from "zod";

export const uraSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  announcement: z.string().min(1, "O anúncio é obrigatório."),
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
  timeout_recording: z
    .string()
    .min(1, "O audio de tentativas de tempo maximo é obrigatório."),
  timeout_retry_recording: z
    .string()
    .min(1, "Áudio de instrução após o tempo máximo alcançado é obrigatorio"),
  timeout_destination: z
    .string()
    .min(1, "O destino após o tempo máximo alcançado é obrigatório."),
  timeout_loops: z
    .string()
    .min(1, "O número de tentativas do tempo máximo é obrigatório."),
  extension: z.string().min(1, "O apontamento é obrigatório."),
  directdial: z.preprocess((value) => value === true, z.boolean()).optional(),
});

export type UraType = z.infer<typeof uraSchema>;
