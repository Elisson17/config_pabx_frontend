"use client";
import ButtonDelete from "@/components/buttons/ButtonDelete";
import ButtonEdit from "@/components/buttons/ButtonEdit";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ramal } from "@/models/ramal";
import { deleteRamal } from "@/service/ramal";
import Link from "next/link";
import React from "react";

interface RamalListManagerProps {
  ramals: Ramal[];
}

export default function RamalListManager({ ramals }: RamalListManagerProps) {
  return (
    <>
      <div className="pb-8 p-2">
        <Link
          href="/ramal/add"
          className="hover:bg-blue-200 bg-blue-400 rounded-lg p-3"
        >
          Adicionar Ramal
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Contexto</TableHead>
            <TableHead>Usuário</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ramals.map((ramal) => (
            <TableRow key={ramal.id}>
              <TableCell>{ramal.id}</TableCell>
              <TableCell>{ramal.context}</TableCell>
              <TableCell>{ramal.username}</TableCell>
              <TableCell>
                <Link href={`/ramal/edit?type=ramal&id=${ramal.id}`}>
                  <ButtonEdit />
                </Link>
              </TableCell>
              <TableCell>
                <ButtonDelete onClick={() => deleteRamal(+ramal.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
