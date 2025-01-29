import { RegisterPlantForm } from "@/components/register-plant-form";

export default function Register() {
  return (
    <div className="bg-gray flex flex-row items-center justify-between">
      <div className="w-full md:pl-20 p-6">
        <RegisterPlantForm className="w-full md:w-[80%]" />
      </div>
      <img
        className="hidden 3xl:inline-block object-cover h-[1245px] mix-blend-luminosity"
        src="/assets/images/plant1.png"
        alt="Plant at room"
      />
    </div>
  );
}
