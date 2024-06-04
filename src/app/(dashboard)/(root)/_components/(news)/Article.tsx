import Image from "next/image";
import { ArticleType } from "./News";

const Article = ({ item }: { item: ArticleType }) => {
  return (
    <div className="bg-white px-[20px] py-[24px] rounded-[5px] grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <p className="text-[#212121] text-lg 2xl:text-xl font-bold leading-normal">
          {item.summary}
        </p>
        <div className="flex items-center text-[13px] 2xl:text-lg gap-1">
          <p className="text-[#262626] font-normal">Tanmoy</p>
          <div className="border-[1px] border-[#E3E3E3] rounded-full px-2 py-1 font-semibold">
            AAPL
            <span
              className={`pl-1 ${
                item.sentiment.value == "positive"
                  ? "text-[#0D8628]"
                  : "text-[#860d0d]"
              } `}
            >{`${item.sentiment.value == "positive" ? "+" : "-"}${
              item.sentiment.score
            }`}</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-clip">
      <Image
        src="https://navi.com/blog/wp-content/uploads/2022/10/Stock-Market-Crash.jpg"
        alt="news"
        width={150}
        height={20}
      />
      </div>
    </div>
  );
};

export default Article;
