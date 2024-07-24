"use client";
import React, { useState } from "react";
import { uraSchema, UraType } from "@/schema/uraSchema";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { createNewUraAction, updateUraAction } from "@/actions/UraAction";
import { useCustomForm } from "@/hooks/useCustomForm";
import { UraOptionType } from "@/schema/uraOptionSchema";
import Switch from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

interface UraFormProps {
  data: {
    ura?: UraType;
    uraOptions?: UraOptionType[];
  };
  title?: string;
}

export default function UraForm({
  data: { ura, uraOptions },
  title,
}: UraFormProps) {
  const { control, handleSubmit, errors, watch } = useCustomForm({
    schema: uraSchema,
    createNewAction: createNewUraAction,
    updateAction: updateUraAction,
    redirectUrl: "/uras",
    defaultValues: ura!,
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const Watchinvalid_append_announce = watch("invalid_append_announce");
  const Watchplay_hold_music = watch("play_hold_music");
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <h1 className="text-2xl font-bold items-center justify-center">
          {title}
        </h1>
        <form className="">
          <div className="grid grid-cols-3 gap-4">
            <Input
              id="name"
              type="text"
              name="name"
              label="Nome"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.name}
            />
            <Input
              id="extension"
              type="text"
              name="extension"
              label="Extensão"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.extension}
            />
            <Input
              id="timeout_time"
              type="number"
              name="timeout_time"
              label="Tempo Máximo apos áudio"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_time}
            />

            <Input
              id="timeout_append_announce"
              type="number"
              name="timeout_append_announce"
              label="Repetições de anúncio"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_append_announce}
            />

            <Input
              id="announcement"
              type="text"
              name="announcement"
              label="Áudio Inicial"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.announcement}
            />

            <Input
              id="description"
              type="text"
              name="description"
              label="Descrição"
              className="rounded-full "
              control={control}
              errors={errors}
              defaultValue={ura && ura.description}
            />
          </div>
          <Switch
            label="Ativar Fila Padrão"
            handleToggle={() => setIsChecked(!isChecked)}
            checked={isChecked}
            disabled={false}
          />
          {isChecked && (
            <div className="flex flex-row gap-4">
              <Input
                id="default_destination"
                type="text"
                name="default_destination"
                label="Destino Padrão"
                className="rounded-full "
                control={control}
                errors={errors}
                defaultValue={ura && ura.default_destination}
              />
            </div>
          )}
          <div className="gap-4">
            <Checkbox
              id="invalid_append_announce"
              name="invalid_append_announce"
              label="Ativar invalidade após anúncio"
              control={control}
              defaultChecked={ura && ura.invalid_append_announce}
            />
          </div>

          {Watchinvalid_append_announce && (
            <div className="flex flex-row gap-4">
              <Input
                id="invalid_loops"
                type="text"
                name="invalid_loops"
                label="Quantidade de tentativas"
                className="rounded-full "
                control={control}
                errors={errors}
                defaultValue={ura && ura.invalid_loops}
              />
              <Input
                id="invalid_announcement"
                type="text"
                name="invalid_announcement"
                label="Mensagem de após invalidade"
                className="rounded-full "
                control={control}
                errors={errors}
                defaultValue={ura && ura.invalid_announcement}
              />
            </div>
          )}
          <div className="gap-4">
            <Checkbox
              id="play_hold_music"
              name="play_hold_music"
              label="Ativar toque de música de espera"
              control={control}
              defaultChecked={ura && ura.play_hold_music}
            />
          </div>
          {Watchplay_hold_music && (
            <div className="flex flex-row gap-4">
              <Input
                id="hold_music_audio"
                type="text"
                name="hold_music_audio"
                label="Áudio de espera"
                className="rounded-full "
                control={control}
                errors={errors}
                defaultValue={ura && ura.hold_music_audio}
              />
            </div>
          )}
          <div className="gap-4">
            <Checkbox
              id="record_calls"
              name="record_calls"
              label="Ativar gravação de chamadas"
              control={control}
              defaultChecked={ura && ura.record_calls}
            />
          </div>
          <div className="">
            <h1 className="text-3xl py-4 font-semibold">Opções da ura</h1>
            {uraOptions?.map((option) => {
              return (
                <div key={option.id} className="flex flex-row gap-4">
                  <Input
                    id="digit"
                    type="number"
                    name="digit"
                    label="Digito"
                    className="rounded-full"
                    control={control}
                    errors={errors}
                    defaultValue={option.digit}
                  />
                  <Input
                    id="audio"
                    type="text"
                    name="audio"
                    label="Áudio"
                    className="rounded-full"
                    control={control}
                    errors={errors}
                    defaultValue={option.audio}
                  />
                  <Input
                    id="destination"
                    type="text"
                    name="destination"
                    label="Destino"
                    className="rounded-full"
                    control={control}
                    errors={errors}
                    defaultValue={option.destination}
                  />
                </div>
              );
            })}
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
