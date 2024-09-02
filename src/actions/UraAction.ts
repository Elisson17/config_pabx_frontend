import { UraType } from "@/schema/uraSchema";
import { updateUra, uraAdd } from "@/service/ura";
import { revalidateTag } from "next/cache";

export async function createNewUraAction(data: UraType) {
  if (!data) return;
  try {
    // const response = await uraAdd(data);
    // if (response.status !== 200) {
    //   return { success: false, message: `Error: ${response.statusText}` };
    // }
    // if (response.status === 200) {
    //   revalidateTag("uras");
    //   return { success: true, message: "Dados cadastrados com sucesso!" };
    // }
  } catch (error) {
    return { error };
  }
}

export async function updateUraAction(
  data: UraType,
  id: number
) {
  if (!data || !id) return;
  try {
    const response = await updateUra(data, id);
    if (response.status !== 200) {
      return { success: false, message: `Error: ${response.statusText}` };
    }
    if (response.status === 200) {
      revalidateTag("uras");
      return { success: true, message: "Dados atualizados com sucesso!" };
    }

  } catch (error) {
    return { error };
  }
}
