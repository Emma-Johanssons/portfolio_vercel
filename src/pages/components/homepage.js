import { BsWindowStack } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import me from "src/pages/components/images/me.jpg";
import Image from "next/image";
export default function Homepage() {
  return (
    <div>
      <main className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-10 md:flex-row justify-evenly items-center p-2">
          <div>
            <h1 className="font-bold text-5xl lg:text-4xl">Hello I´m Emma</h1>
            <h2 className="text-3xl lg:text-2xl">A frontend developer</h2>
          </div>
          <Image alt="me" className="w-2/5 p-4 md:w-1/5 lg:w-2/6" src={me} />
        </div>
        <div className="flex gap-10 ">
          <button className="bg-white text-pink-300 text-3xl lg:text-2xl p-1 pl-4 pr-4 rounded-xl font-bold shadow-md shadow-slate-500 hover:bg-blue-200">
            Portfolio
          </button>
          <button className="p-1 pl-4 pr-4 text-3xl lg:text-2xl bg-gradient-to-tr from-blue-300 font-bold to-pink-300 rounded-xl shadow-md shadow-slate-500 hover:text-blue-200">
            Let´s Talk!
          </button>
        </div>
        <br></br>
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-11/12 p-11 rounded-2xl  shadow-sm shadow-slate-400 text-center">
          <div className="flex flex-col lg:flex-row lg:gap-6 items-center gap-10 ">
            <div className=" lg:w-2/6 text-white flex flex-col gap-4 lg:gap-6 items-center ">
              <BsWindowStack className="w-1/3 text-6xl" />
              <p className="text-3xl lg:text-xl  ">
                Do you need to update or improve the functionality of your site
                or app to raise the experience for your customers?
              </p>
              <p className="font-bold text-4xl lg:text-2xl">I can do that</p>
            </div>
            <div className="lg:border-l-4 lg:border-r-4 border-white max-lg:border-t-4 max-lg:border-b-4 rounded-md border-solid lg:w-2/4 text-white flex flex-col justify-evenly items-center p-6 gap-5">
              <p className="text-3xl">
                Do you want an own website but don´t have the time, tools or
                ideas to make one?
              </p>
              <p className="font-bold lg:text-2xl text-4xl flex items-center gap-3">
                I can help you with that
                <MdOutlineWavingHand className="animate-waving-hand text-5xl lg:text-3xl" />
              </p>
            </div>
            <div className=" lg:w-2/5 text-white flex flex-col gap-4 items-center">
              <BsPersonWorkspace className="w-1/3 text-6xl mb-3" />

              <p className="text-3xl lg:text-xl">
                Are you looking for a developer that will know the latest
                trends, come with new fresh ideas but also have an energy and a
                curiosity like you never seen before?
              </p>
              <p className="font-bold text-4xl lg:text-2xl">Choose me</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
