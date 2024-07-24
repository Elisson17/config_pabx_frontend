import { getAllListUras } from "@/service/ura";
import React from "react";
import UraListManager from "./components/UraListManager";

export default async function Ura() {
  const getRequestUra = await getAllListUras();
  const URaList = getRequestUra.data.uras;
  return (
    <>
      <UraListManager uras={URaList} />
    </>
  );
}
