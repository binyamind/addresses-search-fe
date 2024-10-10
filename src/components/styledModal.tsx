import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StyledButton from "./StyledButton";
import { useSearchStore } from "@/store/search.store";
import { useUpdateSearchAvailability } from "@/hooks/useUpdateSearchAvailability";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";


interface Props {
  id: string;
  closeHandler?: () => void;
}

export const StyledModal = ({ id }: Props) => {
  const { mutateAsync } = useUpdateSearchAvailability();
  const onClickHandler = useSearchStore((state) => state.onClickHandler);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger className="">
          <div>
            <TiDeleteOutline size={25} color="gray" />
          </div>
        </DialogTrigger>
        <div className="">
          <DialogContent className="flex flex-col  rounded-lg  border-transparent  gap-10 bg-[#4b5563]">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <div className="self-center ">
                <DialogDescription className="text-[#a1a1aa] font-bold text-lg ">
                  תוצאה זו לא תיכלל בחיפושים עתידיים
                </DialogDescription>
              </div>
              <div className="flex justify-end self-end  mt-5">
                <StyledButton
                  text={"אישור"}
                  color={"bg-transparent  p-4 m-3 rounded bg-red-500"} //
                  size="sm"
                  hover="hover:bg-red-600"
                  variant="destructive"
                  textColor={"text-black font-bold"}
                  onClickHandler={async () => {
                    const res = await mutateAsync({ id }); //
                    if (res.status === 204) {
                      onClickHandler(id as string);
                    }
                  }}
                />
                <StyledButton
                  text={"ביטול"}
                  color={"bg-gray-400  p-4 m-3 rounded"} //[#bb2124]
                  size="sm"
                  hover="hover:bg-gray-500"
                  variant="destructive"
                  textColor={"text-black font-bold"}
                  onClickHandler={() => {
                    setOpen(false);
                  }}
                />
              </div>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};
