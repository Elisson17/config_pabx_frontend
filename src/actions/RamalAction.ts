import { RamalType } from "@/schema/ramalSchema";
import { ramalAdd, updateRamal } from "@/service/ramal";
import { revalidateTag } from "next/cache";


export async function createNewRamalAction(data: RamalType) {
  if (!data) return;
  try {
    const response = await ramalAdd(data);
    if (response.status !== 200) {
      return { success: false, message: `Error: ${response.statusText}` };
    }
    if (response.status === 200) {
      revalidateTag("ramais");
      return { success: true, message: "Dados cadastrados com sucesso!" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updateRamalAction(
  data: RamalType,
  id: number
) {
  if (!data || !id) return;
  try {
    const response = await updateRamal(data, id);
    if (response.status !== 200) {
      return { success: false, message: `Error: ${response.statusText}` };
    }
    if (response.status === 200) {
      revalidateTag("ramais");
      return { success: true, message: "Dados atualizados com sucesso!" };
    }

  } catch (error) {
    return { error };
  }
}