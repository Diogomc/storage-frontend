import { Button } from "../components/btn/button";
import { Nav } from "../components/nav/nav";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";

const Account = () => {
    return (
        <div >
            <Nav />
            <div className="flex justify-center items-center">
                <div className="flex w-2/3 rounded-2xl shadow-2xl/20 mt-[7%] bg-white max-md:flex-col
                    max-md:w-full">
                    <div className="flex flex-col items-center justify-center max-md:mt-20 w-full p-20
                        max-md:p-0">
                        <div className="text-center">
                            <p className="text-4xl font-bold">Login</p>
                            <ul className="flex p-5">
                                <li className="border p-2 border-gray-300 rounded-md m-2 cursor-pointer hover:bg-gray-200"><FaGoogle size={25} /></li>
                                <li className="border p-2 border-gray-300 rounded-md m-2 cursor-pointer hover:bg-gray-200"><FaFacebookF size={25} /></li>
                                <li className="border p-2 border-gray-300 rounded-md m-2 cursor-pointer hover:bg-gray-200"><FaGithub size={25} /></li>
                                <li className="border p-2 border-gray-300 rounded-md m-2 cursor-pointer hover:bg-gray-200"><LiaLinkedinIn size={25} /></li>
                            </ul>
                        </div>
                        <div className="max-md:w-full">
                            <div>
                                <div className="m-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        aria-label="email"
                                        className="outline-0 border
                                        bg-gray-100 border-gray-300 rounded-md w-lg p-2 text-lg max-md:w-full"
                                    />
                                </div>
                                <div className="m-4">
                                    <input
                                        type="password"
                                        placeholder="Senha"
                                        aria-label="password"
                                        className="outline-0 border bg-gray-100 border-gray-300 rounded-md w-lg p-2 text-lg max-md:w-full" />
                                </div>
                            </div>
                            <div className="p-4 max-md:p-5">
                                <p className="text-center">
                                    <a className=" text-blue-600" href="#">Esqueci a senha?</a>
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Button name="Entrar" className="w-40" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-sky-700 w-full text-white flex justify-center
                        items-center rounded-tl-[200] rounded-bl-[180] shadow-2xl/10 p-10 rounded-r-2xl
                        max-md:p-4 max-md:rounded-none max-md:mt-10">
                        <div className="flex flex-col items-center ml-20
                            max-md:ml-0">
                            <h1 className="text-4xl font-bold p-5
                                max-md:text-3xl max-md:text-center">Não possui uma Conta?</h1>
                            <p className="w-lg text-center p-4 text-gray-200 text-lg
                                max-md:w-full max-md:p-8"> Registre uma conta para a sua empresa, e aproveite todos os nossos benefícios</p>
                            <Button name="Criar Conta" className="w-40" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;