import { ChangeEvent } from "react";

interface Props {
  items: Array<string>;
  onChnage: (e: ChangeEvent<HTMLInputElement>) => any;
  title?: string;
}

export const StyledMultiSelectCheckBox = ({
  items,
  onChnage,
  title,
}: Props) => {
  return (
    <>
      <div className="mb-[8px] underline">{title ?? ""}</div>
      {items &&
        items.map((item) => {
          return (
            <div className="items-top flex space-x-2 gap-2" key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={onChnage}
                name={item}
              />
              <div className="grid gap-1.5 leading-none">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {item}
                </label>
              </div>
            </div>
          );
        })}
    </>
  );
};
