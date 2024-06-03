import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fetchInfo = async()=>{
  const {data} = await axios.get("https://api.jsonbin.io/v3/qs/665e3c07ad19ca34f873cd56");
  return data.record;
}

const InfoTable = async () => {
  const info = await fetchInfo();
  const { news, analyst_estimates,ticker, ...filteredInfo } = info;

  return (
    <div className="bg-white rounded-[25px] px-[20px] py-[24px]">
      <Table>
        <TableCaption>Key Earnings Data</TableCaption>
        <TableBody>
        {Object.entries(filteredInfo).map(([key, value]:[key:string,value:any]) => (
            <TableRow key={key}>
              <TableCell className="font-medium text-sm text-[#212121]">{key}</TableCell>
              <TableCell className="text-right text-[#848484] font-normal text-[12px]">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InfoTable;
