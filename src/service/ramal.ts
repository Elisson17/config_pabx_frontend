import { RamalProp, RamalsProp } from "@/models/ramal";
import baseApi from "./config";
import { RamalType } from "@/schema/ramalSchema";

export const getAllListRamal = () => baseApi.get<RamalsProp>("ramais");

export const ramalAdd = (data: RamalType) =>
  baseApi.post("ramais", { ramal: data });

export const updateRamal = (data: RamalType, id: number) =>
  baseApi.put(`ramais/${id}`, { ramal: data });

export const deleteRamal = (id: number) => baseApi.delete(`ramais/${id}`);

export const getRamalId = (id: number) => baseApi.get<RamalProp>(`ramais/${id}`);