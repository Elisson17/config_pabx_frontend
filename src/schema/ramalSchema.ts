
import { optional, z } from "zod";

export const ramalSchema = z.object({
id: z.string().min(1, "Extensão é obrigatório."),
context: z.string().min(1, "Contexto é obrigatório."),
password: z.string().min(1, "Senha é obrigatória."),
username: z.string().min(1, "Usuário é obrigatório."),
});

export type RamalType = z.infer<typeof ramalSchema>;