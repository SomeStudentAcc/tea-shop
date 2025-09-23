/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { IAuthForm } from "../shared/types/auth.interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form-elements/form";
import { Input } from "@/components/ui/form-elements/input";

interface Props {
  form: UseFormReturn<IAuthForm, any, IAuthForm>;
  isPending: boolean;
  isReg?: boolean;
}

export default function AuthFields({ form, isPending, isReg = false }: Props) {
  return (
    <>
      {isReg && (
        <FormField
          control={form.control}
          name="name"
          rules={{
            required: "Name is requred",
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      )}

      <FormField
        control={form.control}
        name="email"
        rules={{
          required: "Email is requred",
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="email" disabled={isPending} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={form.control}
        name="password"
        rules={{
          required: "Password is requred",
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="password" disabled={isPending} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </>
  );
}
