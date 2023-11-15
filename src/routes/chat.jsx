import Msg from "../components/msg";
import { useEffect, useRef, useState } from "react";


export default function Chat() {
  const mensagensInicio = {
    atendente: [
      "Olá, gostaria de lhe oferecer um emprego de meio periodo, você aceita?",
    ],
    cliente: [],
  };

  const [msgs, setMsgs] = useState(mensagensInicio);
  const messagesEndRef = useRef(null);

  const handleMessage = (e) => {
    e.preventDefault();
    if(e.target[0].value === "") return;
    const msg = e.target[0].value;
    setMsgs({ ...msgs, cliente: [...msgs.cliente, msg] });
    e.target[0].value = "";
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  return (
    <>
      <div className="max-w-2xl shadow-2xl mx-auto my-6">
        <div className="bg-green-600 py-3 px-5 rounded-t-lg">
          <h1 className="text-white text-2xl">Atendimento Online</h1>
        </div>
        <div id="rolagem" className="flex flex-col space-y-5 overflow-auto h-96 px-4 py-5">
          {msgs &&
            msgs.atendente.map((item) => (
              <div key={item} className="flex flex-col w-full">
                <Msg
                  style="bg-gray-300 w-max min-w-[190px] max-w-[320px] px-3 py-2 rounded-se-lg rounded-b-lg"
                  msg={item}
                  user="Atendente"
                />
              </div>
            ))}
          {msgs.cliente &&
            msgs.cliente.map((item, index) => (
              <div key={index} className="flex flex-col w-full">
                <Msg
                  style="bg-green-600 text-white w-max min-w-[190px] max-w-[320px] px-3 py-2 rounded-ss-lg rounded-b-lg self-end"
                  msg={item}
                  user="Cliente"
                />
              </div>
            ))
            }
          <div ref={messagesEndRef} />
        </div>
        <div className="rounded-b-lg bg-gray-200 py-5">
          <form onSubmit={handleMessage} className="flex items-center justify-between px-5">
            <input
              name="msg"
              type="text"
              className="bg-white shadow-2xl rounded-full py-3 px-5 w-full"
              placeholder="Digite sua mensagem..."
            />
            <button className="bg-green-600 rounded-full py-3 px-10 text-white ml-3 transition-all hover:bg-green-900">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
