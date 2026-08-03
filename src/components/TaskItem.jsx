import CheckIcon from "./assets/fonts/icons/check.svg?react"
import LoaderIcon from "./assets/fonts/icons/loader.svg?react"
import DetailsIcon from "./assets/fonts/icons/details.svg?react"

const TaskItem = ({task, handleTaskCheckboxChange}) =>{
    const getStatusClasses = () => {
        if (task.status === "done") {
            return "bg-[#00ADB5] text-[#00ADB5]"
        }
        if (task.status === "in_progress") {
            return "bg-[#FFAA04] text-[#FFAA04]"
        }
        if (task.status === "undone") {
            return "bg-[#35383E] bg-opacity-10 text-[#35383E]"
        }
    }
    return (<div className={`flex items-center transition justify-between bg-opacity-10 gap-2 px-4 py-3 rounded-lg text-sm ${getStatusClasses()}`}>

        <div className="flex items-center gap-3">
            <label className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}>
                <input
                type="checkbox"
                checked={task.status === "done"}
                className="absolute h-full w-full cursor-pointer opacity-0"
                onChange={() => handleTaskCheckboxChange(task.id)}>
                </input>
                    {task.status === "done" && <CheckIcon />}
                    {task.status === "in_progress" && <LoaderIcon className="animate-spin text-white" />}
            </label>
            {task.title}
        </div>
        <a href="#" className="transition hover:opacity-75">
            <DetailsIcon /> 
        </a>
    </div>

    )
}
export default TaskItem