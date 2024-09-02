"use client";
import React, { useState } from "react";
import { uraSchema, UraType } from "@/schema/uraSchema";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { createNewUraAction, updateUraAction } from "@/actions/UraAction";
import { useCustomForm } from "@/hooks/useCustomForm";
import { UraOptionType } from "@/schema/uraOptionSchema";
import { Checkbox } from "@/components/Checkbox";
import { UraScheduleType } from "@/schema/uraScheduleSchema";
import { MultiSelect } from "@/components/MultiSelect";
import { Select } from "@/components/Select";
import { AudioType } from "@/schema/audioSchema";

interface Options {
  id: number;
  name?: string;
}
interface UraFormProps {
  data: {
    ura?: UraType;
    uraOptions?: UraOptionType[];
    uraSchedules?: UraScheduleType[];
    Audio?: AudioType[];
  };
  title?: string;
}

export default function UraForm({
  data: { ura, uraOptions, uraSchedules, Audio },
  title,
}: UraFormProps) {
  const { control, handleSubmit, errors } = useCustomForm({
    schema: uraSchema,
    createNewAction: createNewUraAction,
    updateAction: updateUraAction,
    redirectUrl: "/uras",
    defaultValues: ura!,
  });

  const filteredUraSchedules = uraSchedules?.filter(
    (schedule) => schedule.ivr_option_id === null
  );

  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full h-full p-10">
        <h1 className="text-2xl font-bold items-center justify-center">
          {title}
        </h1>
        <form className="">
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="name"
              type="text"
              name="name"
              label="Nome da ura"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.name}
            />
            <Input
              id="description"
              type="text"
              name="description"
              label="descrição da ura"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.description}
            />
            <Input
              id="invalid_loops"
              type="text"
              name="invalid_loops"
              information="É o número de vezes que a ura permitira que o usuário tente caso falhe em presionar o botão errado ou finalizar o tempo de tempo maximo."
              label="Reitentos"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_loops}
            />
            <Input
              id="invalid_destination"
              type="text"
              name="invalid_destination"
              label="Destino após o máximo de tentativas invalidas"
              className=" "
              information="É o destino após o máximo de reitentos."
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_destination}
            />
            <Input
              id="invalid_retry_recording"
              type="text"
              name="invalid_retry_recording"
              label="Áudio de instrução após tentativa invalida"
              information="É o áudio de instrução após o usuário falhar. por exemplo após atingir o timeout ou o número máximo de tentativas invalidas."
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_retry_recording}
            />
            <Input
              id="invalid_recording"
              type="text"
              name="invalid_recording"
              information="é o áudio após atigir o máximo de tentativas invalidas ou tentativas de tempo máximo"
              label="Áudio após atigir o máximo de tentativas invalidas"
              className=""
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_recording}
            />
            <Input
              id="timeout_time"
              type="number"
              name="timeout_time"
              label="Tempo máximo de espera"
              information="é o tempo máximo da ação após o usuário escutar o áudio inicial."
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_time}
            />
          </div>
          <div className="gap-4 pt-4">
            <Checkbox
              id="directdial"
              name="directdial"
              label="Discagem direto a ramal"
              control={control}
              defaultChecked={ura && ura.directdial}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold items-center justify-center">
              Grupo de horario
            </h1>
            <section>
              {filteredUraSchedules?.map((schedule) => {
                console.log(schedule)
                return (
                  <div key={schedule.id} className="flex flex-row gap-4">
                    {JSON.stringify(schedule)}
                    <Input
                      id="destination"
                      name="destination"
                      type="text"
                      label="Destino do horario"
                      className=" "
                      control={control}
                      errors={errors}
                      defaultValue={ schedule?.destination}
                    />
                  </div>
                );
              })}
            </section>
          </div>

          <div className="gap-4"></div>
          <div className="">
            <h1 className="text-3xl py-4 font-semibold">Opções da ura</h1>
          </div>
          <div className="">
            {uraOptions?.map((option) => {
              return (
                <div key={option.id} className="p-3 border-2 m-3 border-black">
                  <div className="flex flex-row gap-4">
                    {JSON.stringify(option)}
                    {/* <Input
                      id="digit"
                      type="number"
                      name="digit"
                      label="Digito"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={option && option.selection}
                    />
                    <Input
                      id="audio"
                      type="text"
                      name="audio"
                      label="Áudio"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={option.spoken}
                    />
                    <Input
                      id="destination"
                      type="text"
                      name="destination"
                      label="Destino"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={option.dest}
                    /> */}
                  </div>
                  <h2 className="text-2xl font-bold">Horário</h2>
                  {option.schedules?.map((schedule) => {
                    const IvrScheduleOption =
                      (uraSchedules as Options[]) || undefined;

                    return (
                      <div key={schedule.id} className="flex flex-row gap-4">
                        {JSON.stringify(schedule)}
                      </div>
                    );
                  })}
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
