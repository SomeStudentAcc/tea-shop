import React, { useEffect } from "react";
import { useUpload } from "./useUpload";
import Image from "next/image";
import { Button } from "../../button";
import { cn } from "@/lib/utils";
import { ImagePlus } from "lucide-react";

interface Props {
  isDisabled: boolean;
  onChange: (value: string[]) => void;
  value: string[];
}

export default function ImageUpload({ isDisabled, onChange, value }: Props) {
  const { handleButtonClick, isUploading, fileInputRef, handleFileChange } =
    useUpload(onChange);

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2"
        id="image container"
      >
        {value.map((url) => {
          return (
            <div
              key={url}
              className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
              id="image wrapper"
            >
              <Image
                className="object-cover"
                src={`http://localhost:5000${url}`}
                alt=""
                fill
              />
            </div>
          );
        })}
      </div>
      <Button
        type="button"
        disabled={isDisabled || isUploading}
        variant={"secondary"}
        onClick={handleButtonClick}
        className={cn("", {
          "mt-4": value.length,
        })}
      >
        <ImagePlus className="size-3 mr-2" />
        Загрузить картинки
      </Button>
      <input
        type="file"
        multiple
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={isDisabled}
      />
    </div>
  );
}
