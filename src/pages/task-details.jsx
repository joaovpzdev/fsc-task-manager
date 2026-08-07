import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Input from "../components/Input";
import ChevronRightIcon from "../components/assets/fonts/icons/chevron-right.svg?react";
import ArrowLeftIcon from "../components/assets/fonts/icons/arrow-left.svg?react"
import TrashIcon from "../components/assets/fonts/icons/trash.svg?react"

const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [taskId]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-8 py-16 space-y-6">
        {/* Barra do topo */}
        <div className="flex justify-between w-full ">
            <div>
                <button 
                onClick={handleBackClick}
                className="h-8 w-8 rounded-full bg-[#00adb5] flex items-center justify-center mb-2">
                    <ArrowLeftIcon />
                </button>
                <div className="flex items-center gap-1 text-xs">
                    <span className="text-[#818181]">Minhas Tarefas</span>
                    <ChevronRightIcon className="text-[##818181]" />
                    <span className="text-[#00adb5] font-semibold">{task?.title}</span>
                </div>
                <h1 className="text-xl font-semibold mt-1">{task?.title}</h1>
            </div>
            {/*parte da direita da barra do topo */}
            <Button variant="quaternary" className="h-fit self-end">
                <TrashIcon />
                Deletar Tarefa
            </Button>
        </div>
        {/*dados da tarefa */}
        <div className="rounded-xl bg-white p-6">
            <div>
                <Input/>
            </div>

        </div>
      </div>
    </div>
  );
};
export default TaskDetailsPage;
