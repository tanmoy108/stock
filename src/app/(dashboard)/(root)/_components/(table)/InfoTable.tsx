import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const fetchInfo = async()=>{
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/financials");
    return data;
  } catch (error) {
    console.error("Error fetching ratios:", error);
    return {};
  }
}

const InfoTable = async () => {
  const info = await fetchInfo();
  const { news, analyst_estimates,ticker, ...filteredInfo } = info;

  return (
    <div className="bg-white rounded-[8px] px-[20px] py-[24px]">
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
