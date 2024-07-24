"use client";
import { createNewRamalAction, updateRamalAction } from "@/actions/RamalAction";
import { Input } from "@/components/Input";
import { useCustomForm } from "@/hooks/useCustomForm";
import { ramalSchema, RamalType } from "@/schema/ramalSchema";
import { useRouter } from "next/navigation";
import React from "react";

interface RamalFormProps {
  data: {
    ramal?: RamalType;
  };
  title?: string;
}

export default function RamalForm({ data: { ramal }, title }: RamalFormProps) {
  const { control, handleSubmit, errors } = useCustomForm({
    schema: ramalSchema,
    createNewAction: createNewRamalAction,
    updateAction: updateRamalAction,
    redirectUrl: "/ramal",
    defaultValues: ramal!,
  });
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <h1 className="text-2xl font-bold items-center justify-center">
          {title}
        </h1>
        <form>
          <div className="flex flex-col w-full h-full gap-5">
            <Input 
              id="id"
              type="text"
              name="id"
              label="Extensão"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ramal && ramal.id!}
            />
            <Input
              id="context"
              type="text"
              name="context"
              label="Contexto"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ramal && ramal.context}
            />
            <Input
              id="username"
              type="text"
              name="username"
              label="Usuário"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ramal && ramal.username}
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Senha"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ramal && ramal.password}
            />
            </div> 
        </form>
        <div className="mt-3 items-center justify-center flex flex-row gap-3">
          <button
            type="submit"
            aria-label="Salvar"
            onClick={handleSubmit}
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
      </div>
    </>
  );
}
