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

interface UraFormProps {
  data: {
    ura?: UraType;
    uraOptions?: UraOptionType[];
    uraSchedules?: UraScheduleType[];
  };
  title?: string;
}

export default function UraForm({
  data: { ura, uraOptions, uraSchedules },
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

  console.log(uraOptions);

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
              label="Nome da ura"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.name}
            />
            <Input
              id="extension"
              type="text"
              name="extension"
              label="Apontamento de ramal (Extensão)"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.extension}
            />
            <Input
              id="invalid_loops"
              type="text"
              name="invalid_loops"
              label="Reitentos invalidos"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_loops}
            />
            <Input
              id="invalid_retry_recording"
              type="text"
              name="invalid_retry_recording"
              label="Áudio de instrução após tentativa invalida"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_retry_recording}
            />
            <Input
              id="invalid_destination"
              type="text"
              name="invalid_destination"
              label="Destino após o máximo de tentativas invalidas"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.invalid_destination}
            />
            <Input
              id="invalid_recording"
              type="text"
              name="invalid_recording"
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
              label="Tempo máximo de espera com o áudio"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_time}
            />
            <Input
              id="timeout_recording"
              type="text"
              name="timeout_recording"
              label="Áudio após atigir o limite de tentativas do tempo máximo"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_recording}
            />
            <Input
              id="timeout_retry_recording"
              type="text"
              name="timeout_retry_recording"
              label="Áudio de instrução após tempo máximo atingido"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_retry_recording}
            />
            <Input
              id="timeout_destination"
              type="text"
              name="timeout_destination"
              label="Destino após o limite de tentativas do tempo máximo"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_destination}
            />
            <Input
              id="timeout_loops"
              type="text"
              name="timeout_loops"
              label="Reitentos após tentativa de tempo máximo"
              className=" "
              control={control}
              errors={errors}
              defaultValue={ura && ura.timeout_loops}
            />
          </div>
          <div className="gap-4 pt-4">
            <Checkbox
              id="directdial"
              name="directdial"
              label="Discagem direto ao ramal"
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
                return (
                  <div key={schedule.id} className="flex flex-row gap-4">
                    <Input
                      id="init_day_of_week"
                      type="text"
                      name="init_day_of_week"
                      label="Dia inicial"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.init_day_of_week}
                    />
                    <Input
                      id="end_day_of_week"
                      type="text"
                      name="end_day_of_week"
                      label="Dia final"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.end_day_of_week}
                    />
                    <Input
                      id="start_time"
                      type="text"
                      name="start_time"
                      label="Horário inicial"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.start_time}
                    />
                    <Input
                      id="end_time"
                      type="text"
                      name="end_time"
                      label="Horário final"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.end_time}
                    />
                    <Input
                      id="recording_schedule"
                      type="text"
                      name="recording_schedule"
                      label="Horário de gravação"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.recording_schedule}
                    />
                    <Input
                      id="destination"
                      type="text"
                      name="destination"
                      label="Destino"
                      className="rounded-full"
                      control={control}
                      errors={errors}
                      defaultValue={schedule.destination}
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
          {uraOptions?.map((option) => {
            console.log(option.selection);
            return (
              <div key={option.id} className="">
                <div className="flex flex-row gap-4">
                  <Input
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
                  />
                </div>
                <h2 className="text-2xl font-bold">Horário</h2>
                {option.schedules?.map((schedule, i) => {
                  console.log(schedule);
                  return (
                    <div key={i} className="flex flex-row gap-4">
                      <Input
                        id="init_day_of_week"
                        type="text"
                        name="init_day_of_week"
                        label="Dia Inicial"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.init_day_of_week}
                      />
                      <Input
                        id="end_day_of_week"
                        type="text"
                        name="end_day_of_week"
                        label="Dia final"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.end_day_of_week}
                      />
                      <Input
                        id="start_time"
                        type="text"
                        name="start_time"
                        label="Hora inicial"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.start_time}
                      />
                      <Input
                        id="end_time"
                        type="text"
                        name="end_time"
                        label="Hora final"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.end_time}
                      />
                      <Input
                        id="recording_schedule"
                        type="text"
                        name="recording_schedule"
                        label="Gravação de áudio"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.recording_schedule}
                      />
                      <Input
                        id="destination"
                        type="text"
                        name="destination"
                        label="Destino"
                        className="rounded-full"
                        control={control}
                        errors={errors}
                        defaultValue={schedule.destination}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
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
