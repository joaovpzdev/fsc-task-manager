import Button from "./Button";
import AddIcon from "./assets/fonts/icons/add.svg?react";
import TrashIcon from "./assets/fonts/icons/trash.svg?react";
import SunIcon from "./assets/fonts/icons/sun.svg?react";
import CloudIcon from "./assets/fonts/icons/cloud-sun.svg?react";
import MoonIcon from "./assets/fonts/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import TasksSeparatorTitle from "./TasksSeparatorTitle";
import { useState } from "react";
import TASKS from "./constants/tasks.js";
import TaskItem from "./TaskItem.jsx";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  {
    /* atualização de progresso das checkboxes */
  }
  
  //Função para alterar o State
  
  const handleTaskCheckboxChange = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      // Atualizando as tarefas por meio do click

      if (task.status === "undone") {
        return { ...task, status: "in_progress" };
      }
      if (task.status === "in_progress") {
        return { ...task, status: "done" };
      }
      if (task.status === "done") {
        return { ...task, status: "undone" };
      }

      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold"> Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary">
            <TrashIcon />
            Limpar Tarefas
          </Button>
          <Button variant="primary">
            <AddIcon />
            Adicionar Tarefa
          </Button>
        </div>
      </div>

      {/*Lista de tarefas */}

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator>
            <SunIcon />
            <TasksSeparatorTitle>Manhã</TasksSeparatorTitle>
          </TasksSeparator>
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxChange={handleTaskCheckboxChange}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator>
            <CloudIcon />
            <TasksSeparatorTitle>Tarde</TasksSeparatorTitle>
          </TasksSeparator>
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxChange={handleTaskCheckboxChange}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator>
            <MoonIcon />
            <TasksSeparatorTitle>Noite</TasksSeparatorTitle>
          </TasksSeparator>
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxChange={handleTaskCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tasks;
