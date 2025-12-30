import { Button } from "../components/btn/button";
import { Nav } from "../components/nav/nav";
import { FcGoogle } from "react-icons/fc";

const Account = () => {
    return (
        <div>
            <Nav />
            <div className="flex flex-col items-center justify-center mt-30 max-md:mt-20">
                <div className="text-center p-5">
                    <p className="text-4xl">Bem vindo de volta</p>
                    <p className="text-gray-500">Por favor, entre com suas credenciais</p>
                </div>
                <div className="max-md:w-full">
                    <div>
                        <div className="m-2">
                            <p>Email:</p>
                            <input type="email" className="outline-0 border border-gray-300 rounded-md w-lg p-2 text-lg max-md:w-full" />
                        </div>
                        <div className="m-2">
                            <p>Senha:</p>
                            <input type="password" className="outline-0 border border-gray-300 rounded-md w-lg p-2 text-lg max-md:w-full" />
                        </div>
                    </div>

                    <div className="flex w-full justify-between">
                        <div className="p-4 max-md:p-5">
                            <input className="cursor-pointer" type="checkbox" />
                            <label className="m-2">Lembrar minha senha</label>
                        </div>
                        <div className="p-4 max-md:p-5">
                            <p><a className="underline text-blue-600" href="#">Esqueci a senha?</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Button name="Entrar" />
                        <button className="flex items-center text-lg border justify-center p-2 rounded-md m-2 border-gray-300 cursor-pointer"><FcGoogle size={30}/>Entrar com Google</button>
                        <p className="p-2 mt-3">Não tem uma conta?<a href="#" className="p-2 underline text-blue-600">Criar Conta</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;