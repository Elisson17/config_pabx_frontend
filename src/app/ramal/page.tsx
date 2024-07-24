import React from "react";
import RamalListManager from "./components/RamalListManager";
import { getAllListRamal } from "@/service/ramal";

export default async function RamalPage() {
  const getRequestRamal = await getAllListRamal();
  const ramalList = getRequestRamal.data.ramais;
  return (
    <>
      <RamalListManager ramals={ramalList} />
    </>
  );
}
