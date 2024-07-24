import { UrasProp } from "@/models/ura";
import baseApi from "./config";
import { UraOptionType } from "@/schema/uraOptionSchema";
import { UrasOptionProp } from "@/models/uraOption";

export const getUraOptions = (ura_id: number) => baseApi.get<UrasOptionProp>(`uras/${ura_id}/options`);

export const getUraOption = (ura_id: number, option_id: number) =>
  baseApi.get<UraOptionType>(`uras/${ura_id}/options/${option_id}`);  

export const createUraOption = (ura_id: number, option: UraOptionType) =>
  baseApi.post(`uras/${ura_id}/options`, {
    option,
  });

export const updateUraOption = (ura_id: number, option: UraOptionType) =>
  baseApi.put(`uras/${ura_id}/options`, {
    option,
  });

export const deleteUraOption = (ura_id: number, option_id: number) =>
  baseApi.delete(`uras/${ura_id}/options/${option_id}`);