import { UraProp, UrasProp } from "@/models/ura";
import baseApi from "./config";
import { UraType } from "@/schema/uraSchema";

export const getAllListUras = () => baseApi.get<UrasProp>("uras");

export const deleteUra = (id: number) => baseApi.delete(`uras/${id}`);

export const uraAdd = (data: UraType) =>
  baseApi.post("uras", {
    ura: data,
  });

export const updateUra = (data: UraType, id: number) =>
  baseApi.put(`uras/${id}`, {
    ura: data,
  });

export const getUraId = (id: number) => baseApi.get<UraProp>(`uras/${id}`);
