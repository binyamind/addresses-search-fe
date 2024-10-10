import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  onClickHandler?: () => Promise<any> | any;
  color?: string;
  textColor?: string;
  hover?: string;
  variant: "destructive" | "default" | "secondary";
  size: "sm" | "lg";
}
export default function StyledButton({
  text,
  onClickHandler,
  color,
  textColor,
  hover,
  variant,
  size,
}: Props) {
  return (
    <div>
      <Button
        onClick={onClickHandler}
        variant={variant}
        size={size}
        className={`${textColor} ${color} ${hover} `}
      >
        {text}
      </Button>
    </div>
  );
}
