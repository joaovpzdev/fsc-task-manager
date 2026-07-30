import Button from "./Button"
import AddIcon from "./assets/fonts/icons/add.svg?react"
import TrashIcon from "./assets/fonts/icons/trash.svg?react"
import SunIcon from "./assets/fonts/icons/sun.svg?react"
import CloudIcon from "./assets/fonts/icons/cloud-sun.svg?react"
import MoonIcon from "./assets/fonts/icons/moon.svg?react"


const Tasks = () => {
    return <div className="w-full px-8 py-16">
                <div className="flex w-full justify-between">
                    <div>
                        <span className="text-xs font-semibold text-[#00ADB5]">Minhas Tarefas</span>
                        <h2 className="text-xl font-semibold"> Minhas Tarefas</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secundary">
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
                    {/*Tarefas da Manhã */}
                    <div className="space-y-3">
                            <div className="flex gap-2 pb-1 border-solid border-b border-[#F4F4F5]">
                                <SunIcon />
                                <p className="text-[#9A9C9F] text-sm">Manhã</p>
                            </div>
                    </div>
                    {/*Tarefas da Tarde */}
                    <div className="my-6 space-y-3">
                            <div className="flex gap-2 border-b pb-1 border-solid border-[#F4F4F5]">
                                <CloudIcon />
                                <p className="text-[#9A9C9F] text-sm">Tarde</p>
                            </div>
                    </div>
                    {/*Tarefas da Noite */}
                    <div className="space-y-3">
                            <div className="flex gap-2 pb-1  border-solid border-b border-[#F4F4F5]">
                                <MoonIcon />
                                <p className="text-[#9A9C9F] text-sm">Noite</p>
                            </div>
                    </div>
                </div>
            </div>
}

export default Tasks