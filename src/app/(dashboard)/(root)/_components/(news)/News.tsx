import axios from "axios";
import Article from "./Article";

export interface ArticleType {
  sentiment: {
    score: number;
    value: string;
  };
  summary: string;
}
const fetchArticle = async(): Promise<{ [key: string]: ArticleType }>=>{
    try {
    const { data } = await axios.get("http://127.0.0.1:8000/financials");
    return data.news;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {};
  }
  }
const News = async () => {
    const info = await fetchArticle();
    const convertToArray = Object.values(info);
  return (
    <div>
       <p className="text-[#212121] text-[18px] font-bold " > Recent News: Apple</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-3">
           {
            convertToArray.length>0 && convertToArray.map((item,index)=>{
                return(
                    <Article key={index} item={item} />
                )
            })
           }

        </div>
    </div>
  )
}

export default News