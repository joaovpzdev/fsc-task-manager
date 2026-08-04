import { createPortal } from "react-dom";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { CSSTransition } from "react-transition-group";
import "./AddDialog.css";
import { useRef } from "react";
import { useState } from "react";
import { v4 as uuid, v4 } from "uuid";

const AddDialog = ({ isOpen, handleClose, handleAddTask }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const nodeRef = useRef();
  //o CSSTransition é usado para animar a entrada e saída do componente, aplicando classes CSS específicas durante a transição.
  // o createPortal é usado para renderizar o componente em um nó DOM diferente do nó pai, permitindo que ele seja exibido acima de outros elementos da interface do usuário.
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            {/* Adicionando o Dialog */}
            <div className="p-5 rounded-xl text-center bg-white shadow">
              <h2 className="text-[#35383E] font-semibold text-xl">
                Nova Tarefa
              </h2>

              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as Informações abaixo
              </p>

              <div className="flex flex-col space-y-4 w-[336px]">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <div className="flex flex-col gap-1 text-left">
                  <label
                    className="block text-sm font-semibold text-[#35383E]"
                    htmlFor="time"
                  >
                    Período
                  </label>
                  <select
                    id="time"
                    className="w-full rounded-lg border border-[#ECECEC] bg-white px-4 py-3 text-sm text-[#35383E] outline-none transition duration-200 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  >
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="evening">Noite</option>
                  </select>
                </div>

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <div className="flex gap-3">
                  <Button
                    variant="tertiary"
                    size="large"
                    className="w-full"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>

                  <Button
                    size="large"
                    className="w-full"
                    onClick={() => {
                      handleAddTask({
                        id: v4(),
                        title,
                        time,
                        description,
                        status: "undone",
                      });
                      handleClose();
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
};
export default AddDialog;
