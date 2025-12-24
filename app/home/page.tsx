"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav } from "../components/nav/nav";
import { Button } from "../components/btn/button";
import { AiFillAlert } from "react-icons/ai";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import Typewriter from "react-ts-typewriter";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiLuggageDepositFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { motion } from 'framer-motion';
import { Footer } from "../components/footer";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function Home() {
  return (
    <div className="bg-background">
      <nav>
        <Nav />
      </nav>

      <Carousel
        className="max-md:m-0"
        responsive={responsive}
        infinite
        autoPlaySpeed={3000}
        arrows={false}
      >
        <div className="h-160 w-full max-md:h-150 text-background">

          <div className="absolute top-40 left-18 text-center w-200 max-md:left-8 max-md:w-90 max-md:top-60 ">
            <p className="font-bold text-lg">BEM VINDO AO STOCKLAB</p>
            <h1 className="text-7xl font-bold max-md:text-4xl">Administramos seu estoque do recebimento à saída</h1>
          </div>
          <img src="truck.jpg" alt="caminhão" className="h-full w-full object-cover object-bottom" />
        </div>

        <div className=" h-160 w-full max-md:h-150 text-background">
          <div className="absolute top-40 left-140 text-center w-200 max-md:left-8 max-md:w-90 max-md:top-50">
            <p className="font-bold text-lg">MAIS DE 20 FUNCIONALIDADES</p>
            <h1 className="text-7xl font-bold max-md:text-4xl">Para você administrar de maneira satisfatoria o seu estoque</h1>
            <Button name="saiba mais" />
          </div>
          <img src="stock.jpg" alt="" className="h-full w-full object-cover " />
        </div>
        <div className=" h-160 w-full max-md:h-150 text-background">
          <div className="absolute top-40 left-145 text-center w-200 max-md:left-8 max-md:w-90 max-md:top-50">
            <p className="font-bold text-lg">DECISÕES RÁPIDAS E INTELIGENTES</p>
            <h1 className="text-7xl font-bold max-md:text-4xl">Acompanhe entradas, saídas e relatórios em qualquer lugar</h1>
            <Button name="saiba mais" />
          </div>
          <img src="laptop.jpg" alt="" className="h-full w-full object-top object-cover " />
        </div>
      </Carousel>
      <h2 className="text-center p-20 text-4xl max-md:text-2xl w-full">
        <Typewriter
          text={"Nossas Soluções..."}
          speed={200}
          delay={0}
        />
      </h2>


      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        className="flex w-full gap-10 justify-center max-md:flex-col max-md:gap-2 max-md:p-2 text-background">
        <div className="flex flex-col items-center w-100 bg-sky-700 rounded-md text-center max-md:w-full">
          <p className="p-5 "><FaBoxOpen size={40} /></p>
          <p className="text-3xl p-2 font-bold font-sans">Controle de Estoque</p>
          <p className="text-lg p-10 pt-4 text-zinc-200">Gerencie entradas e saídas de produtos em tempo real, evitando perdas e garantindo maior organização no depósito.</p>
        </div>
        <div className="flex flex-col items-center w-100 rounded-md text-center max-md:w-full bg-emerald-700">
          <p className=" p-5"><BsFillClipboard2DataFill size={40} /></p>
          <p className="text-3xl p-2 font-bold font-sans">Dashboard Automático</p>
          <p className="text-lg p-10 pt-4 text-zinc-200">Um dashoboard automático, onde é possível visualizar de maneira simplificada todos os dados do seu estoque</p>
        </div>
        <div className="flex flex-col items-center w-100 bg-orange-700 rounded-md text-center max-md:w-full">
          <p className=" p-5"><AiFillAlert size={40} /></p>
          <p className="text-3xl p-2 font-bold font-sans">Alertas</p>
          <p className="text-lg p-10 pt-4 text-zinc-200">Receba alertas sobre as situações dos seus produtos</p>
        </div>
      </motion.div>


      <div className="text-center flex flex-col items-center mt-50 gap-3 max-md:w-full max-md:p-2 max-md:mt-20">
        <p className="text-4xl font-bold max-md:text-3xl">Comece hoje a otimizar tarefas repetitivas.</p>
        <p className="text-gray-400 text-lg max-md:w-full">Conecte todos os seus processos, desde a entrada até a saída de seus produtos</p>
      </div>
      <div className="p-6 text-center text-lg">
        <Button name="Fale com um consultor" />
      </div>

      <motion.div
      initial={{x: -100, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.7}}
      className="flex  justify-around w-full p-10 mt-40 items-center max-md:flex-col max-md:m-0 max-md:p-4 max-md:gap-8">
        <div>
          <img src="/dashboard.jpg" alt="" className="rounded-md w-250 max-md:w-full"/>
        </div>
        <div className="flex flex-col gap-5 max-md:w-full">
          <p className="text-4xl font-sans max-md:text-center">Dashboard</p>
          <p className="w-150 text-lg text-sub max-md:w-full">Nosso Dashboard de Gestão de Estoque coloca o controle na palma da sua mão: 
            visualize em tempo real níveis de produtos, entradas e saídas, e indicadores de validades. 
            Tudo em uma interface moderna, intuitiva e dinâmica, feita para simplificar sua rotina e maximizar resultados.</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-60 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-10 max-md:mt-20 max-md:p-2">
        <div className="flex flex-col gap-3 items-baseline-last max-md:items-center">
          <p className="text-4xl w-lg max-md:text-3xl max-md:w-full">Suas operações conectadas em todos os processos</p>
          <p className="text-lg text-gray-400 w-sm ">Com o StockLab, cada etapa da sua operação conecta-se automaticamente com a operação seguinte</p>
          <Button name="Fale com um consultor" />
        </div>
        <div className="grid grid-cols-3 gap-2 items-center text-center max-md:grid-cols-2 ">
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <FaPeopleGroup size={60} color="#5A7ACD" />
            <p className="text-lg font-bold">Pessoas</p>
          </div>
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <RiLuggageDepositFill size={60} color="#FFD41D" />
            <p className="text-lg font-bold">Estoque</p>
          </div>
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <FaBoxOpen size={60} color="#E2852E" />
            <p className="text-lg font-bold">Mercadorias</p>
          </div>
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <CiCalendarDate size={60} />
            <p className="text-lg font-bold">Validade</p>
          </div>
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <MdDashboard size={60} color="#89986D" />
            <p className="text-lg font-bold">Dashboard </p>
          </div>
          <div className="border border-gray-400 rounded-2xl p-5 flex flex-col items-center h-40 justify-center w-40 hover:bg-gray-300">
            <FaTruckMoving size={60} color="#4A70A9" />
            <p className="text-lg font-bold">Saídas</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
