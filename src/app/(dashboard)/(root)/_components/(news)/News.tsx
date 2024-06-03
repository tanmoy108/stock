

const News = () => {
  return (
    <div>
        Recent News: Apple
        <div className="grid grid-cols-2 mt-3">
            <div className="bg-white px-[23px] py-[29px] rounded-[5px]">
                <div className="text-[#212121] text-lg font-bold leading-normal mb-4">Here's what's really bothering me about the exploding Nasdaq</div>
            <div className="flex items-center gap-2">
                <div className="text-[#262626] text-[13px] font-normal">TechCrunch•1 hour ago</div>
                <div className="border-[1px] border-[#E3E3E3] rounded-full px-2 py-1 font-semibold text-[13px]">
                AAPL <span className="pl-1 underline text-[#0D8628]">+1.19%</span> 
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default News