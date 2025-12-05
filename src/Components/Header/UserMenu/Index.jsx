import { useState, useRef } from "react";
import { User } from "lucide-react";
import LoginModal from "../../LoginModal/Index";
import { Link } from "react-router";

function UserMenu() {
    const [openAdmin, setOpenAdmin] = useState("hidden");
    const loginRef = useRef(null);
    const openModal = () => loginRef.current?.showModal();

    const userLS = JSON.parse(localStorage.getItem("user") || "null");
    const userName =
        userLS?.name ||
        userLS?.[0]?.name ||
        null;

    return (
        <>
            {userName ?
                <li className="relative">
                    <button
                        onClick={() =>
                            setOpenAdmin(openAdmin === "hidden" ? "block" : "hidden")
                        }
                        className="flex items-center gap-2 p-2 cursor-pointer rounded"
                    >
                        <User className="p-1" />
                        <span className="text-xs">{userName}</span>
                    </button>

                    <ul
                        className={`${openAdmin} absolute w-20 bg-white shadow-md rounded-lg py-1`}
                    >
                        <li>
                            <Link
                                to="/admin"
                                className="block text-xs text-center p-2 cursor-pointer hover:bg-orange-50"
                            >
                                Admin
                            </Link>
                        </li>

                        <li>
                            <button
                                className="block w-full text-center text-xs p-2 cursor-pointer hover:bg-orange-50"
                            >
                                Sair
                            </button>
                        </li>
                    </ul>
                </li>

                :
                <button className="flex gap-3 p-2 items-center hover:bg-orange-50 rounded cursor-pointer"
                    onClick={openModal}
                >
                    <User className="p-1" />
                    <span className="text-xs">
                        Login
                    </span>
                </button>
            }
            <LoginModal ref={loginRef} />
        </>
    )
}

export default UserMenu
