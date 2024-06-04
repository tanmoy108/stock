
const AnalystItem = ({name,value}:{name:string,value:any}) => {
  return (
    <div className="py-4 flex justify-between items-center border-b-2">
    <div className="flex items-center space-x-4">
        <img src="/amazon.svg" alt="amazon logo" />
        <div className="text-xs font-medium leading-normal ">
            <p className="text-[#2C2C2C]">{name}</p>
            <p className="text-[#838383]">{name}</p>
        </div>
    </div>
    <div className="text-xs font-normal leading-normal uppercase text-right">
            <p className="text-[#2C2C2C]">$102.34</p>
            <p className={`${value>0? "text-[#77B900]":"text-[#b93400]"}`}>{value>0 ? "+"+value: "-"+value}</p>
    </div>
</div>
  )
}

export default AnalystItem