import { IStoreCreate } from "@/app/shared/types/store.interface";
import { useCreateStore } from "@/hooks/queries/stores/useCreateStore";
import React, { PropsWithChildren, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form-elements/form";
import { Input } from "../form-elements/input";
import { Button } from "../button";

export default function CreateStoreModal({
  children,
}: PropsWithChildren<unknown>) {
  const [isOpen, setIsOpen] = useState(false);
  const { createStore, isLoadingCreate } = useCreateStore();
  const form = useForm<IStoreCreate>({
    mode: "onChange",
    defaultValues: {
      title: ''
    }
  });

  const onSubmit: SubmitHandler<IStoreCreate> = (data) => {
    createStore(data);
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создание магазина</DialogTitle>
          <DialogDescription>
            для создания магазина надо указать название
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              rules={{
                required: "title is requred",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="название"
                      disabled={isLoadingCreate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <div className="flex justify-end">
              <Button variant={"secondary"} disabled={isLoadingCreate}>
                Создать
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
