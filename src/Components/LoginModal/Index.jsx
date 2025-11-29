import { forwardRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

const LoginModal =
    forwardRef(


        function LoginModal(_, ref) {

            const login = useLogin();
            const navigate = useNavigate();
            const [msgError, setMsgError] = useState("");
            const emailInput = useRef();
            const senhaInput = useRef();
            
            function handleForm(e) {
                e.preventDefault();

                const email = emailInput.current.value;
                const senha = senhaInput.current.value;

                if(!email.includes("@") || !email.includes(".com")) setMsgError("Error: email inválido");
                if (senha.length < 8) setMsgError("Error: senha inválido");

                if (email && senha) {
                    login(email, senha);
                    navigate("/admin");
                }

            }

            return (
                <dialog ref={ref} className="w-2xl m-auto p-6 rounded-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm">
                    <h1 className="text-lg font-semibold mb-3">Login:</h1>
                    <p className="mt-4 flex flex-col gap-4">
                        {msgError}
                    </p>

                    <form onSubmit={e => handleForm(e)} className="mt-4 flex flex-col gap-4">
                        <label htmlFor="email" className="text-sm text-gray-600">
                            Email
                        </label>
                        <input type="text" name="email" id="email" className="border rounded p-2" ref={emailInput} required/>

                        <label htmlFor="senha" className="text-sm text-gray-600">
                            Senha
                        </label>
                        <input type="password" name="senha" id="senha" className="border rounded p-2" ref={senhaInput} view required/>

                        <div className="flex gap-2">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md" 
                            onClick={()=> ref.current.close()}
                            >
                                Fechar
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                                Casdastrar
                            </button>
                            <button className="bg-green-700 text-white px-4 py-2 rounded-md">
                                Entrar
                            </button>
                        </div>
                    </form>
                </dialog>
            );
        });

export default LoginModal;
