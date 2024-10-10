import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

interface Props {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export const StyledInput = ({ onChange,value }: Props) => {
  return (
    <div className="flex gap-2 p-28px mt-16px w-[45%] ">
      <Input onChange={onChange} value={value} className="rounded-[6px]"/>
    </div>
  );
};
