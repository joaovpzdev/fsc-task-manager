import SidebarButton from "./Sidebarbuttons";
import HomeIcon from "./assets/fonts/icons/home.svg?react";
import TaskIcon from "./assets/fonts/icons/tasks.svg?react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white ">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager </h1>
        <p>
          {" "}
          <span className="text-[#00ADB5]">Organizador de Tarefas</span>{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2"> 
        <SidebarButton variant="unselected">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton variant="selected">
          <TaskIcon />
          Minhas tarefas
        </SidebarButton>
      </div>
    </div>
  );
};
export default Sidebar;
