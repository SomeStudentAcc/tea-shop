import { ICategory } from "@/app/shared/types/category.interface";
import { IColor } from "@/app/shared/types/color.interface";
import { IProduct, IProductInput } from "@/app/shared/types/product.interface";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form-elements/form";
import ImageUpload from "@/components/ui/form-elements/image-upload/ImageUpload";
import { Input } from "@/components/ui/form-elements/input";
import Heading from "@/components/ui/heading";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProduct } from "@/hooks/queries/products/useCreateProducts";
import { useDeleteProduct } from "@/hooks/queries/products/useDeleteProduct";
import { useUpdateProduct } from "@/hooks/queries/products/useUpdateProduct";
import { Trash } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  product?: IProduct;
  categories: ICategory[];
  colors: IColor[];
}

export default function ProductForm({ product, categories, colors }: Props) {
  const { createProduct, isLoadingCreate } = useCreateProduct();
  const { updateProduct, isLoadingUpdate } = useUpdateProduct();
  const { deleteProduct, isLoadingDelete } = useDeleteProduct();

  const title = product ? "Изменить данные" : "Создать товар";

  const description = product
    ? "Изменить данные о товаре"
    : "Добавить новый товар в магазин";

  const action = product ? "Сохранить" : "Создать";

  const form = useForm<IProductInput>({
    mode: "onChange",
    values: {
      title: product?.title || "",
      description: product?.description || "",
      images: product?.images || [],
      price: product?.price || 0,
      categoryId: product?.category.id || "",
      colorId: product?.color.id || "",
    },
  });

  const onSubmit: SubmitHandler<IProductInput> = (data) => {
    data.price = Number(data.price);
    if (product) updateProduct(data);
    else createProduct(data);
  };
  return (
    <div className="p-6" id="wrapper">
      <div className="" id="header">
        <Heading title={title} description={description} />
        {product && (
          <ConfirmModal handleClick={() => deleteProduct()}>
            <Button size={"icon"} disabled={isLoadingDelete}>
              <Trash className="size-4" />
            </Button>
          </ConfirmModal>
        )}
      </div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="images"
            rules={{
              required: "image is requred",
            }}
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Картинки</FormLabel>
                <FormControl>
                  <ImageUpload
                    isDisabled={isLoadingCreate || isLoadingUpdate}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-3">
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
                      disabled={isLoadingCreate || isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              rules={{
                required: "Price is requred",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цена</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="цена"
                      disabled={isLoadingCreate || isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              rules={{
                required: "categoryId is requred",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория</FormLabel>
                  <Select
                    disabled={isLoadingCreate || isLoadingUpdate}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Категория" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {categories.map((category) => (
                          <SelectItem value={category.id} key={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="colorId"
              rules={{
                required: "colorId is requred",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цвет</FormLabel>
                  <Select
                    disabled={isLoadingCreate || isLoadingUpdate}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="цвет" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {colors.map((color) => (
                          <SelectItem value={color.id} key={color.id}>
                            {color.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            rules={{
              required: "description is requred",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Описание"
                    disabled={isLoadingUpdate || isLoadingCreate}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoadingCreate || isLoadingUpdate}>
            {action}
          </Button>
        </form>
      </Form>
    </div>
  );
}
