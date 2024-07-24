import React from 'react'
import RamalForm from '../components/RamalForm';
import { redirect } from 'next/navigation';
import { getRamalId } from '@/service/ramal';

export default async function RamalEditPage({
  searchParams,
}: {
  searchParams: { type: string,id: number };
})  {
  if (!searchParams) {
    redirect("/ramais");
  }
  const getRequestRamal = await getRamalId(searchParams?.id!);
  const Ramal = getRequestRamal.data.ramal;

  return (
    <div>
      <RamalForm title="Editar Ramal" data={{ ramal: Ramal }} />
    </div>
  )
}
