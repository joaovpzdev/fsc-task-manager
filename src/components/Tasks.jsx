import Button from "./Button";
import AddIcon from "./assets/fonts/icons/add.svg?react";
import TrashIcon from "./assets/fonts/icons/trash.svg?react";
import SunIcon from "./assets/fonts/icons/sun.svg?react";
import CloudIcon from "./assets/fonts/icons/cloud-sun.svg?react";
import MoonIcon from "./assets/fonts/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import TasksSeparatorTitle from "./TasksSeparatorTitle";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem.jsx";
import { toast } from "sonner";
import AddDialog from "./AddDialog.jsx";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");

        if (!response.ok) {
          throw new Error("Erro ao carregar tarefas");
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
        toast.error("Não foi possível carregar as tarefas.");
      }
    };

    fetchTasks();
  }, []);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  // Função para fechar o Dialog de Adicionar Tarefa.
  const handleDialogClose = () => {
    setIsAddDialogOpen(false);
  };

  //Função para deletar uma tarefa
  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada com sucesso!");
  };

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
        toast("Tarefa em andamento!");
        return { ...task, status: "in_progress" };
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluída!");
        return { ...task, status: "done" };
      }
      if (task.status === "done") {
        toast("Tarefa reiniciada!");
        return { ...task, status: "undone" };
      }

      return task;
    });
    setTasks(newTasks);
  };

  // Função para adicionar uma nova tarefa.
  const handleAddTask = async (task) => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar tarefa");
      }

      const savedTask = await response.json();
      setTasks((previousTasks) => [...previousTasks, savedTask]);
      toast.success("Tarefa adicionada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível adicionar a tarefa.");
    }
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

          <Button variant="primary" onClick={() => setIsAddDialogOpen(true)}>
            <AddIcon />
            Adicionar Tarefa
          </Button>

          {/* Adicionando o Dialog de Adicionar Tarefa */}

          {/*local de recebimento das funções de adicionar tarefa, para que o componente TaskItem possa chamar a função handleAddTask do componente pai Tasks.jsx */}
          <AddDialog
            isOpen={isAddDialogOpen}
            handleClose={handleDialogClose}
            handleAddTask={handleAddTask}
          />
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
              handleTaskDeleteClick={handleTaskDeleteClick}
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
              handleTaskDeleteClick={handleTaskDeleteClick}
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
              handleTaskDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tasks;
