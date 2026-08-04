import { createPortal } from "react-dom";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const AddDialog = ({isOpen, handleClose}) => {
    if (!isOpen) return null;
// o createPortal é usado para renderizar o componente em um nó DOM diferente do nó pai, permitindo que ele seja exibido acima de outros elementos da interface do usuário.
    return createPortal (
        <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">

            {/* Adicionando o Dialog */}
            <div className="p-5 rounded-xl text-center bg-white shadow">
                <h2 className="text-[#35383E] font-semibold text-xl">
                    Nova Tarefa
                </h2>
                <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                    Insira as Informações abaixo
                </p>

                <div className="flex flex-col space-y-4 w-[336px]">

                    <Input id="title" label="Título" placeholder="Insira o título da tarefa" />
                    <Input id="time" label="Horário" placeholder="Insira o horário" />
                    <Input id="description" label="Descrição" placeholder="Descreva a tarefa" />

                    <div className="flex gap-3">

                        <Button variant="tertiary" size="large" className="w-full" onClick={handleClose}>Cancelar</Button>

                        <Button size="large" className="w-full">Adicionar</Button>

                    </div>
                </div>
 
            </div>
        </div>,
        document.body
    )
}
export default AddDialog;