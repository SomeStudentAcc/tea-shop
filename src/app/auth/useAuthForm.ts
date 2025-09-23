/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { IAuthForm } from "../shared/types/auth.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import toast from "react-hot-toast";
import { DASHBOARD_URL } from "@/config/url.config";

export function useAuthForm(isReg: boolean) {
  const router = useRouter();

  const form = useForm<IAuthForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth user"],
    mutationFn: (data: IAuthForm) =>
      authService.main(isReg ? "register" : "login", data),
    onSuccess() {
      form.reset();
      toast.success("Successful auth");
      router.replace(DASHBOARD_URL.home());
    },
    onError(error: any) {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failded to auth");
      }
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
