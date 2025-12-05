import { forwardRef, useRef, useState } from "react";
import {useSign} from "../../hooks/useSign";

const SingUp =
    forwardRef(


        function LoginModal({LoginModal} ,ref) {

            const register = useSign();
            const [msgError, setMsgError] = useState("");
            const nameInput = useRef();
            const emailInput = useRef();
            const passwordInput = useRef();
            
            function handleForm(e) {
                e.preventDefault();

                const name = nameInput.current.value;
                const email = emailInput.current.value;
                const senha = passwordInput.current.value;

                if (!name) {
                    setMsgError("Error: Preenchar o nome de usuario"); 
                    return;
                }
                if(!email.includes("@") || !email.includes(".com")) {
                    setMsgError("Error: email inválido"); 
                    return;
                }
                if (senha.length < 8) {
                    setMsgError("Error: senha inválido");
                    return;
                }

                if (name && email && senha) {
                    register(name,email, senha);
                    ref.current.close();
                    LoginModal.current.showModal();
                }

            }

            return (
                <dialog ref={ref} className="w-2xl m-auto p-6 rounded-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm">
                    <h1 className="text-lg font-semibold mb-3">
                        Cadastro:
                        </h1>
                    <p className="mt-4 flex flex-col gap-4">
                        {msgError}
                    </p>

                    <form onSubmit={e => handleForm(e)} className="mt-4 flex flex-col gap-4">
                        <label htmlFor="name" className="text-sm text-gray-600">
                            Nome
                        </label>
                        <input type="text" name="name" id="nameSign" className="border rounded p-2" ref={nameInput} placeholder="Seu nome" aria-label="Seu nome" required/>


                        <label htmlFor="email" className="text-sm text-gray-600">
                            Email
                        </label>
                        <input type="text" name="email" id="emailSign" className="border rounded p-2" ref={emailInput} placeholder="Seuemail@email.com" aria-label="seu email com @ e .com" required/>

                        <label htmlFor="password" className="text-sm text-gray-600">
                            Senha
                        </label>
                        <input type="password" name="password" id="passwordSign" className="border rounded p-2" ref={passwordInput} placeholder="8 digitos no minimo" aria-label="No minimo 8 digito" required/>
                        <div className="flex gap-2">
                            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" 
                            onClick={()=>{
                                nameInput.current.value = "";
                                emailInput.current.value = "";
                                passwordInput.current.value = "";
                                setMsgError("");
                                ref.current.close();
                                }}
                            >
                                Fechar
                            </button>
                            <button className="bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </dialog>
            );
        });

export default SingUp;
