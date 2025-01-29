import { useEffect, useState } from "react";
import { z } from "zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button";
import { PlantType } from "@/types/plantType";
import { fetchAllPlantTypes } from "@/api/plantType";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { FormField } from "@/components/form-field";
import { Plant } from "@/types/plant";
import { toast } from "sonner";
import { ErrorMessage } from "./error-message";
import { createPlant } from "@/api/plant";

interface RegisterPlantFormProps {
  className?: string;
}

const registerPlantFormSchema = z.object({
  title: z.string().min(3, "Plant name must be at least 3 characters"),
  subtitle: z.string().min(3, "Plant subtitle must be at least 3 characters"),
  image: z.string().url(),
  type: z.string().transform((value) => parseInt(value)),
  price: z
    .string()
    .transform((value) => parseFloat(value.replace(/[^\d.]/g, ""))),
  discount: z
    .string()
    .transform((value) => parseFloat(value.replace(/[^\d.]/g, ""))),
  tag: z.string(),
  features: z.string().min(12, "Plant features must be at least 12 characters"),
  description: z
    .string()
    .min(12, "Plant description must be at least 12 characters")
    .max(240, "Plant description must be at max 240 characters"),
});

export function RegisterPlantForm({ className }: RegisterPlantFormProps) {
  const [plantTypes, setPlantTypes] = useState<PlantType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllPlantTypes();

      setPlantTypes(response);
    };

    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof registerPlantFormSchema>>({
    resolver: zodResolver(registerPlantFormSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      tag: "indoor",
      features: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerPlantFormSchema>) {
    setIsLoading(true);

    const plantType = plantTypes?.find((plant) => plant.id === values.type);

    if (!plantType) {
      toast.error("Plant type doesn't exists");
      return;
    }

    const plant: Plant = {
      title: values.title,
      subtitle: values.subtitle,
      price: values.price,
      discountPercent: values.discount,
      tags: `${values.tag},${plantType.name}`,
      characteristics: values.features,
      description: values.description,
      plantTypeId: plantType.id,
      imageUrl: values.image,
      isSale: true,
    };

    await createPlant(plant)
      .then((data) => toast.success(data.message))
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("flex flex-col gap-6", className)}
    >
      <header className="border-b-2 border-gray-300 py-4">
        <h2 className="font-inter font-semibold text-2xl text-primary-lunar">
          Plant Registration
        </h2>
      </header>

      <FormField>
        <Label htmlFor="title">Plant name</Label>
        <Input placeholder="Echinocereus Cactus" {...register("title")} />
        <ErrorMessage error={errors.title} />
      </FormField>

      <FormField>
        <Label htmlFor="subtitle">Plant subtitle</Label>
        <Input
          placeholder="A majestic addition to your plant collection"
          {...register("subtitle")}
        />
        <ErrorMessage error={errors.subtitle} />
      </FormField>

      <FormField>
        <Label htmlFor="subtitle">Plant image</Label>
        <Input
          placeholder="http://example.com/plant.jpg"
          {...register("image")}
        />
        <ErrorMessage error={errors.image} />
      </FormField>

      <FormField>
        <Label htmlFor="type">Plant Type</Label>
        <select
          {...register("type")}
          className="outline-none border-2 border-gray-300 rounded-sm p-3 pl-4"
        >
          <option value="">Select the plant type</option>
          {plantTypes?.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <ErrorMessage error={errors.type} />
      </FormField>

      <div className="w-full flex items-center flex-row gap-6">
        <FormField>
          <Label htmlFor="price" className="w-full">
            Price
          </Label>
          <Input
            placeholder="$139.99"
            {...register("price")}
            className="w-full"
          />
          <ErrorMessage error={errors.price} />
        </FormField>

        <FormField>
          <Label htmlFor="discount" className="w-full">
            Discount percentage
          </Label>
          <Input
            placeholder="20%"
            {...register("discount")}
            className="w-full"
          />
          <ErrorMessage error={errors.discount} />
        </FormField>
      </div>

      <FormField>
        <Label htmlFor="tag">Label</Label>
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="space-x-1">
            <Input
              id="indoor"
              type="radio"
              {...register("tag")}
              value="indoor"
            />
            <label htmlFor="indoor">Indoor</label>
          </div>
          <div className="space-x-1">
            <Input
              id="outdoor"
              type="radio"
              {...register("tag")}
              value="outdoor"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
        </div>
        <ErrorMessage error={errors.tag} />
      </FormField>

      <FormField>
        <Label htmlFor="features">Features</Label>
        <textarea
          placeholder="Species: Echinocereus..."
          className="h-52 flex flex-col justify-start gap-1 outline-none border-2 border-gray-300 rounded-sm p-3 pl-4 resize-none"
          {...register("features")}
        ></textarea>
        <ErrorMessage error={errors.features} />
      </FormField>

      <FormField>
        <Label htmlFor="description">Description</Label>
        <textarea
          placeholder="Ladyfinger cactus..."
          className="h-52 flex flex-col justify-start gap-1 outline-none border-2 border-gray-300 rounded-sm p-3 pl-4 resize-none"
          {...register("description")}
        ></textarea>
        <ErrorMessage error={errors.description} />
      </FormField>

      <Button className="w-full py-4" disabled={isLoading}>
        Register
      </Button>
    </form>
  );
}
