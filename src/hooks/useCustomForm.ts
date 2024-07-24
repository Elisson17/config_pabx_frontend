import { Resolver, useForm, DefaultValues } from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

type QueryParams = {
  type?: string;
  id?: string;
};

type FormValues = Record<string, any>;

type ActionResponse = Promise<
  | {
      success: boolean;
      message: string;
      error?: undefined;
      response?: any;
    }
  | {
      error: unknown;
      success?: undefined;
      message?: undefined;
      response?: undefined;
    }
  | undefined
>;

interface UseCustomFormProps<T> {
  schema: ZodType<any>;
  createNewAction: (data: T) => ActionResponse;
  updateAction: (data: T, id: number) => ActionResponse;
  redirectUrl: string;
  defaultValues: Partial<T>;
}

export const useCustomForm = <T extends FormValues>({
  schema,
  createNewAction,
  updateAction,
  redirectUrl,
  defaultValues,
}: UseCustomFormProps<T>) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParams: QueryParams = ["type", "id"].reduce(
    (acc, param) => ({ ...acc, [param]: searchParams.get(param) }),
    {} as QueryParams
  );

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema) as Resolver<T>,
    mode: "all",
    shouldFocusError: true,
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const onSubmit = async (data: T) => {
    const { id } = queryParams;

    const actionMap: Record<string, () => ActionResponse> = {
      ura: () => updateAction(data, +id!),
      ramal: () => updateAction(data, +id!),
      null: () => createNewAction(data),
    };

    try {
      let response: ActionResponse | undefined;

      const type = queryParams.type;
      if (actionMap[type!]) {
        response = actionMap[type!]();
      }

      const res = await response;
      if (res?.success && res.response) {
        const data = res.response;
        const id = String(data.id);
        router.replace(`${redirectUrl}${id}`);
        reset();
      } else if (res?.success) {
        router.replace(redirectUrl);
        reset();
      } else if (res?.error) {
        console.log(res?.error);
      }
    } catch (error) {
      if (error instanceof RangeError) console.log(error);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    setValue,
    watch,
  };
};
