import React from "react";
import UraForm from "../components/UraForm";
import { getUraId } from "@/service/ura";
import { redirect } from "next/navigation";
import { getUraOptions } from "@/service/uraOption";
import { constants } from "buffer";

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

  const Ura = getRequestUra.data.ura;
  const UraOptions = getUraOptionsId.data.options;
  
  return (
    <div>
      <UraForm title="Editar URA" data={{ ura: Ura, uraOptions: UraOptions }} />
    </div>
  );
}
