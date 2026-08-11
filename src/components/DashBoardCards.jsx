import { useGetTasks } from "../hooks/data/use-get-tasks"
import DashboardCard from "./DashboardCard"
import TasksIcon from "./assets/fonts/icons/tasks.svg?react"
import Tasks2Icon from "./assets/fonts/icons/tasks-2.svg?react"
import GlassWaterIcon from "./assets/fonts/icons/glass-water.svg?react"
import LoaderIcon from "./assets/fonts/icons/loader.svg?react"

const DashBoardCards = () => {
  const { data: tasks } = useGetTasks()

  const notStartedTasks = tasks?.filter(
    (task) => task.status === "not_started"
  ).length
  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress"
  ).length
  const completedTasks = tasks?.filter((task) => task.status === "done").length

  return (
    <div className="grid grid-cols-4 gap-9">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas totais"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={notStartedTasks}
        secondaryText="Tarefas não iniciadas"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em andamento"
      />
      <DashboardCard
        icon={<TasksIcon />}
        mainText={completedTasks}
        secondaryText="Tarefas concluídas"
      />
    </div>
  )
}

export default DashBoardCards