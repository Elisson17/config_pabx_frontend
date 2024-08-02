import { UrasSchedule } from "@/models/uraSchedule";
import baseApi from "./config";

export const getUraSchedule = (ura_id: number) => baseApi.get<UrasSchedule>(`uras/${ura_id}/schedules`);

export const getUraOptionSchedule = (ura_id: number, schedule_id: number) =>
  baseApi.get<UrasSchedule>(`uras/${ura_id}/options/${schedule_id}/schedules`);

export const getUraOptionsSchedule = (ura_id: number, option_id: number,schedule_id: number) =>
  baseApi.get<UrasSchedule>(`uras/${ura_id}/options/${option_id}/schedules/${schedule_id}`);   

export const createUraSchedule = (ura_id: number, schedule: UrasSchedule) =>
  baseApi.post(`uras/${ura_id}/schedules`, {
    schedule,
  });

export const updateUraSchedule = (ura_id: number, schedule: UrasSchedule) =>
  baseApi.put(`uras/${ura_id}/schedules`, {
    schedule,
  });

export const deleteUraSchedule = (ura_id: number, schedule_id: number) =>
  baseApi.delete(`uras/${ura_id}/schedules/${schedule_id}`);