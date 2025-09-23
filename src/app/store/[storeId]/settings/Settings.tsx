"use client";
import { IStoreEdit } from "@/app/shared/types/store.interface";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form-elements/form";
import { Input } from "@/components/ui/form-elements/input";
import Heading from "@/components/ui/heading";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import { Textarea } from "@/components/ui/textarea";
import { useDeleteStore } from "@/hooks/queries/stores/useDeleteStore";
import { useUpdateStore } from "@/hooks/queries/stores/useUpdateStore";
import { Trash } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Settings() {
  const { store, updateStore, isLoadingUpdate } = useUpdateStore();
  const { deleteStore, isLoadingDelete } = useDeleteStore();

  const form = useForm<IStoreEdit>({
    mode: "onChange",
    values: {
      title: store?.title || "",
      description: store?.description || "",
    },
  });

  const onSubmit: SubmitHandler<IStoreEdit> = (data) => {
    updateStore(data);
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <Heading title="Настройки" description="Настройки магазина" />
        <ConfirmModal handleClick={() => deleteStore()}>
          <Button size={"icon"} disabled={isLoadingDelete}>
            <Trash className="size-4" />
          </Button>
        </ConfirmModal>
      </div>
      <Form {...form}>
        <form
          className="space-y-5 h-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div
            className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 "
            id="fields"
          >
            <FormField
              control={form.control}
              name="title"
              rules={{
                required: "title is requred",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="title"
                      disabled={isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="description"
                    disabled={isLoadingUpdate}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoadingUpdate}>Сохранить</Button>
        </form>
      </Form>
    </div>
  );
}
