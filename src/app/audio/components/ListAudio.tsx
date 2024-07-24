"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Audio } from "@/models/audio";
import React from "react";
import ButtonDelete from "@/components/buttons/ButtonDelete";
import { deleteAudio } from "@/service/audio";
import Link from "next/link";

interface ListAudioProps {
  audios: Audio[];
}

export default function ListAudio({ audios }: ListAudioProps) {
  return (
    <>
       <div className="pb-8 p-2">
          <Link
            href="/audio/add"
            className="hover:bg-blue-200 bg-blue-400 rounded-lg p-3"
          >
            Adicionar Áudio
          </Link>
        </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {audios.map((audio) => (
            <TableRow key={audio.id}>
              <TableCell>{audio.name}</TableCell>
              <TableCell>
                <ButtonDelete onClick={() => deleteAudio(audio.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
