import { forwardRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import SingUp from "../Sign/Index";

const LoginModal =
    forwardRef(
        function LoginModal(_, ref) {

            const login = useLogin();
            const navigate = useNavigate();
            const [msgError, setMsgError] = useState("");
            const emailInput = useRef();
            const passwordInput = useRef();
            const signUp = useRef(null);
            const singUpDilog = () => signUp.current?.showModal();

            function formValidation (email, password) {
                 if (!email.includes("@") || !email.includes(".com")) {
                    setMsgError("Error: email inválido");
                    return;
                }

                if (!password) {
                    setMsgError("Preencha o campo de senha");
                    console.log("VALIDATION: senha vazia");
                    return;
                }

                if (password.length < 8) {
                    setMsgError("Error: senha inválido");
                    return;
                }

                return true;
            }

            async function handleForm(e) {
                e.preventDefault();

                const email = emailInput.current.value;
                const password = passwordInput.current.value;

                if (!formValidation(email, password)) return;

                try {
                    await login(email, password);

                    navigate("/admin");
                    return;
                }

                catch (error) {
                    setMsgError(error.response?.data?.message || "Email ou senha incorretos");
                    return;
                }

            }

            return (
                <dialog ref={ref} className="w-2xl m-auto p-6 rounded-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm">
                    <h1 className="text-lg font-semibold mb-3">Login:</h1>
                    <p className="mt-4 flex flex-col gap-4">
                        {msgError && msgError}
                    </p>

                    <form onSubmit={e => handleForm(e)} className="mt-4 flex flex-col gap-4">
                        <label htmlFor="Login" className="text-sm text-gray-600">
                            Email
                        </label>
                        <input type="text" name="Login" id="emailLogin" className="border rounded p-2" ref={emailInput} placeholder="Seuemail@email.com" aria-label="seu email com @ e .com" required />

                        <label htmlFor="password" className="text-sm text-gray-600">
                            Senha
                        </label>
                        <input type="password" name="password" id="passwordLogin" className="border rounded p-2" ref={passwordInput} placeholder="8 digitos no minimo" aria-label="No minimo 8 digito" required />

                        <div className="flex gap-2">
                            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                                onClick={() => {
                                    setMsgError("");
                                    emailInput.current.value = "";
                                    passwordInput.current.value = "";
                                    ref.current.close();
                                }}
                            >
                                Fechar
                            </button>
                            <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer"
                                onClick={singUpDilog}
                            >
                                Casdastrar
                            </button>
                            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer">
                                Entrar
                            </button>
                        </div>
                    </form>
                    <SingUp ref={signUp} LoginModal={ref} />
                </dialog>
            );
        });

export default LoginModal;
