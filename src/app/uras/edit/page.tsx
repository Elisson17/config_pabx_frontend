import React from "react";
import UraForm from "../components/UraForm";
import { getUraId } from "@/service/ura";
import { redirect } from "next/navigation";
import { getUraOptions } from "@/service/uraOption";
import { constants } from "buffer";
import { getUraSchedule } from "@/service/uraSchedule";

export default async function UraEditPage({
  searchParams,
}: {
  searchParams: { type: string; id: number };
}) {
  if (!searchParams) {
    redirect("/uras");
  }
  const getRequestUra = await getUraId(searchParams?.id!);
  const getUraOptionsId = await getUraOptions(searchParams?.id!);
  const getUraSchedules = await getUraSchedule(searchParams?.id!);

  const Ura = getRequestUra.data.ura;
  const UraOptions = getUraOptionsId.data.options;
  const UraSchedules = getUraSchedules.data.schedules;
  
  return (
    <div>
      <UraForm title="Editar URA" data={{ ura: Ura, uraOptions: UraOptions, uraSchedules: UraSchedules }} />
    </div>
  );
}
