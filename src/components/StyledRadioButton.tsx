import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";

interface Props {
  onValueChange: (e: string) => void;
}

export const StyledRadioButton = ({ onValueChange }: Props) => {
  return (
    <RadioGroup
      onValueChange={onValueChange}
      defaultValue={SearchAddressTerm.main}
      className="flex gap-5 w-[35%]  pr-[4px] h-[30px]"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value={SearchAddressTerm.main}
          className=" border border-white bg-gray-300 size-5"
        />
        <Label htmlFor={SearchAddressTerm.main}>חיפוש שם ראשי</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value={SearchAddressTerm.partialAddress}
          className=" border border-white bg-gray-300 size-5"
        />
        <Label htmlFor={SearchAddressTerm.partialAddress}>
          חיפוש מדויק של לפחות מילה
        </Label>
      </div>
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem
          value={SearchAddressTerm.fullAddress}
          className={`border border-white  bg-gray-300 size-5`}
        />
        <Label htmlFor={SearchAddressTerm.fullAddress}> חיפוש ביטוי שלם</Label>
      </div>
    </RadioGroup>
  );
};
