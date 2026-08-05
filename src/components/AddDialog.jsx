import { createPortal } from "react-dom";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { CSSTransition } from "react-transition-group";
import "./AddDialog.css";
import { useRef } from "react";
import { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import { useEffect } from "react";

const AddDialog = ({ isOpen, handleClose, handleAddTask }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState();
  const [errors, setError] = useState([]);

  const nodeRef = useRef();

  //o .trim() é usado para remover espaços em branco no início e no final da string, garantindo que o título e a descrição não sejam apenas espaços em branco.
  const getValidationError = (inputName) => {
    return errors.find((error) => error.inputName === inputName)?.message;
  };

  const clearFieldError = (inputName) => {
    setError((prevErrors) =>
      prevErrors.filter((error) => error.inputName !== inputName),
    );
  };

  const handleSaveClick = () => {
    const validationErrors = [];

    if (!title?.trim()) {
      validationErrors.push({
        inputName: "title",
        message: "O título é obrigatório.",
      });
    }

    if (!time?.trim()) {
      validationErrors.push({
        inputName: "time",
        message: "O período é obrigatório.",
      });
    }

    if (!description?.trim()) {
      validationErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória.",
      });
    }

    setError(validationErrors);

    if (validationErrors.length > 0) {
      return;
    }

    handleAddTask({
      id: v4(),
      title,
      time,
      description,
      status: "undone",
    });
    handleClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setTime("morning");
      setDescription("");
      setError([]);
    }
  }, [isOpen]);

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
                  error={getValidationError("title")}
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
                    className={`w-full rounded-lg px-4 py-3 text-sm text-[#35383E] outline-none transition duration-200 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 ${getValidationError("time") ? "border-red-500 bg-red-50" : "border-[#ECECEC] bg-white"}`}
                    value={time}
                    onChange={(event) => {
                      setTime(event.target.value);
                      clearFieldError("time");
                    }}
                  >
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="evening">Noite</option>
                  </select>
                  {getValidationError("time") && (
                    <p className="text-sm text-red-600">
                      {getValidationError("time")}
                    </p>
                  )}
                </div>

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  error={getValidationError("description")}
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
                    onClick={handleSaveClick}
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
