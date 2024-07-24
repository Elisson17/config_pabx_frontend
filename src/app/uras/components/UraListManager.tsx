"use client";
import { Ura } from "@/models/ura";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUra } from "@/service/ura";
import ButtonDelete from "@/components/buttons/ButtonDelete";
import Link from "next/link";
import ButtonEdit from "@/components/buttons/ButtonEdit";

interface UraListManagerProps {
  uras: Ura[];
}

export default function UraListManager({ uras }: UraListManagerProps) {
  return (
    <>
      <section className="px-10">
        <div className="pb-8 p-2">
          <Link
            href="/uras/add"
            className="hover:bg-blue-200 bg-blue-400 rounded-lg p-3"
          >
            Adicionar URA
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Extensão</TableHead>
              <TableHead>Tempo de espera</TableHead>
              <TableHead>Tempo de espera após anúncio</TableHead>
              <TableHead>Áudio</TableHead>
              <TableHead>Ativo</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Anúncio inválido</TableHead>
              <TableHead>Repetição inválida</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {uras.map((ura) => (
              <TableRow key={ura.id}>
                <TableCell>{ura.name}</TableCell>
                <TableCell>{ura.extension}</TableCell>
                <TableCell>{ura.timeout_time}</TableCell>
                <TableCell>{ura.timeout_append_announce}</TableCell>
                <TableCell>{ura.announcement}</TableCell>
                <TableCell>{ura.is_active}</TableCell>
                <TableCell>{ura.description}</TableCell>
                <TableCell>{ura.invalid_append_announce}</TableCell>
                <TableCell>{ura.invalid_loops}</TableCell>
                <TableCell>
                  <Link href={`/uras/edit?type=ura&id=${ura.id}`}> 
                    <ButtonEdit />
                  </Link>
                </TableCell>
                <TableCell>
                  <ButtonDelete onClick={() => deleteUra(ura.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableDemo data={uras} /> */}
      </section>
    </>
  );
}
