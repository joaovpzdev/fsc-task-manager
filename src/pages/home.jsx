import DashBoardCard from "../components/DashboardCard"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Tasks2Icon from "../components/assets/fonts/icons/tasks-2.svg?react"
import LoaderIcon from "../components/assets/fonts/icons/loader.svg?react"
import GlassWaterIcon from "../components/assets/fonts/icons/glass-water.svg?react"
import TasksIcon from "../components/assets/fonts/icons/tasks.svg?react"
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const {data:tasks
  } = useGetTasks();

  const inProgressTasks = tasks?.filter((task) => task.status === "in_progress").length
  const completedTasks = tasks?.filter((task) => task.status === "completed").length

    return (
    <div className="flex">

      <Sidebar />

      <div className="w-full space-y-6 px-8 py-16">
      <Header subtitle="Dashboard" title="Dashboard"/>
       <div className="grid grid-cols-4 gap-9">
        <DashBoardCard icon={<Tasks2Icon />} mainText={tasks?.length} secondaryText="Tarefas disponíveis" />

        <DashBoardCard icon={<TasksIcon />} mainText={completedTasks} secondaryText="Tarefas concluídas" />

        <DashBoardCard icon={<LoaderIcon /> } mainText={inProgressTasks} secondaryText="Tarefas em andamento" />

        <DashBoardCard icon={<GlassWaterIcon /> } mainText= "4" secondaryText="Hidratação diária" />
       </div>
      </div>
  
    </div>
  )
    
}
export default HomePage