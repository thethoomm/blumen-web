import { LucideIcon } from "lucide-react";

export type StepCardType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

interface StepCardProps {
  card: StepCardType;
}

export function StepCard({ card }: StepCardProps) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="size-20 bg-primary-lunar rounded-full flex justify-center items-center">
        <card.icon className="size-5 text-white"/>
      </div>
      <div className="max-w-96 w-full text-center">
        <span className="text-black font-bold font-lato text-2xl">{card.title}</span>
        <p className="text-secondary font-raleway">{card.description}</p>
      </div>
    </div>
  );
}
