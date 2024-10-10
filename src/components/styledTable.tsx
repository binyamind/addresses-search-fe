import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResponseAddress } from "@/models/responseAddress";
import { StyledModal } from "./styledModal";
interface Props {
  items: Array<ResponseAddress>;
}

function displayTableHeders() {
  const fields = [
    "תואר",
    "שם משני",
    "קבוצה",
    "קבוצה נוספת",
    "סוג",
    "קוד",
    "שכונה",
    "מחק",
  ];
  return (
    <TableHeader className="h-[82px] border-none hover:border-none">
      <TableRow className="hover:border-none">
        {fields.map((item) => {
          return (
            <TableHead key={item} className=" text-center text-[22px]">
              {item}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
}


function displayTableBody(results: Array<ResponseAddress>) {
  return (
    <TableBody>
      {results.map((item) => {
        return (
          <TableRow className="h-[96px] hover:bg-[#d4d4d4]" key={item.id}>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa] ">
              {item.main}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.secondary}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.group}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.extraGroup}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.type}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.type}
            </TableCell>
            <TableCell className=" text-center font-bold text-[18px] text-[#a1a1aa]">
              {item.neighbourhood}
            </TableCell>
            <TableCell className=" text-center  font-bold">
              <StyledModal id={item.id as string} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
export const StyledTable = ({ items }: Props) => {
  return (
    <div className="space-y-4 border rounded-[16px] mt-[12px] p-1">
      <Table>
        {displayTableHeders()}{displayTableBody(items)}
      </Table>
    </div>
  );
};
