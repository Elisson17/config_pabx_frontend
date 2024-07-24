"use client";
import { audioAdd } from "@/service/audio";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface UploadFormAudioProps {
  title?: string;
}

export default function UploadFormAudio({ title }: UploadFormAudioProps) {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      await audioAdd(file);
      router.push("/audio");
    } catch (error) {
      console.error("There was an error uploading the file!", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold items-center justify-center">
        {title}
      </h1>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div className="mt-3 items-center justify-center flex flex-row gap-3">
        <button
          type="submit"
          aria-label="Salvar"
          onClick={handleUpload}
          className="p-3 bg-blue-500 rounded-lg text-white"
        >
          Salvar
        </button>
        <button
          type="button"
          aria-label="Cancelar"
          onClick={() => router.back()}
          className="p-3 bg-red-500 rounded-lg text-white"
        >
          Cancelar
        </button>
      </div>
    </>
  );
}
