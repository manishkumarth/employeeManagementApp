function Tasknumber(props) {
  return (
    <div className={`${props.bgColor} w-full sm:w-[48%] md:w-[23%] h-[150px] p-6 rounded-xl flex items-center justify-center shadow-md`}>
        <h3 className="text-center py-4 mt-10">
            {props.taskCount}
        </h3>
    </div>
  )
}

export default Tasknumber