import zoom from "src/pages/components/images/zoom.jpg";
import radio from "src/pages/components/images/radio.jpg";
import todo from "src/pages/components/images/todo.jpg";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="">
      <h1 className="text-center text-white underline font-bold text-5xl md:text-3xl p-4">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row text-center md:justify-evenly items-center gap-20  ">
        <div className=" rounded-xl  w-[346px] h-[455px] border-4  border-double p-2 border-gray-200 bg-sky-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <div className="flex justify-center border-double border-gray-300 border-b-4 ">
            <a href="https://radioplayer-react.vercel.app/" target="_blank">
              <Image
                alt="radioplayer"
                className="rounded-xl p-2 md:p-0  "
                width={300}
                src={radio}
              />
            </a>
          </div>
          <div className="flex flex-col items-center text-white ">
            <h2 className="text-lg md:text-lg font-bold p-2"> Radioplayer</h2>
            <p className="text-md md:text-sm">
              An API project fetching API from Swedish Radio to render
              radiostations on the browser.
            </p>
            <p className="text-lg md:text-xl flex gap-3 p-2">
              <span className="font-bold">•React</span>
              <span className="font-bold"> •Tailwind</span>
            </p>
            <p className="text-md md:text-sm">
              For sourcecode,{" "}
              <a
                className="border-b-2 border-gray-400 hover:text-black"
                href="https://github.com/chasacademy-EmmaJohansson/radioplayer-react"
                target="_blank"
              >
                click here.
              </a>
            </p>
          </div>
        </div>
        <div className=" rounded-xl  w-[346px] h-[355px] border-4  border-double p-2 border-gray-200 bg-sky-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
          <div className="flex justify-center border-double border-gray-300 border-b-4">
            <a href="https://redesign-zoom-tl9n.vercel.app/" target="_blank">
              <Image alt="zoom" className="rounded-xl " src={zoom} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-evenly text-white ">
            <h2 className="text-lg font-bold md:text-lg p-2"> Redesign </h2>
            <p className="text-md md:text-sm text-center ">
              A project where I redesigned and improved Zoom´s homepage.
            </p>
            <p className="text-lg md:text-xl flex gap-3 md:p-0 p-2">
              <span className="font-bold">•React</span>
              <span className="font-bold">•Tailwind</span>
            </p>
            <p className="text-md md:text-sm md:p-4 p-2">
              For sourcecode, {""}
              <a
                className="border-b-2 border-gray-400 hover:text-black"
                href="https://github.com/chasacademy-EmmaJohansson/redesign-Zoom"
                target="_blank"
              >
                click here.
              </a>
            </p>
          </div>
        </div>
        <div className="  rounded-xl w-[346px] h-[455px] border-4  border-double p-2 border-gray-200 bg-sky-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <div className="flex justify-center border-double border-gray-300 border-b-4">
            <a href="https://redux-todo-sepia.vercel.app/" target="_blank">
              <Image
                alt="todo"
                className="rounded-xl "
                width={260}
                src={todo}
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-around text-white ">
            <h2 className="text-lg md:text-lg font-bold ">Todo</h2>
            <p className="text-md md:text-sm md:p-2">
              A Redux project where I made a todo app .
            </p>
            <p className="text-lg md:text-xl flex gap-3 pt-2 md:p-0">
              <span className="font-bold">•React</span>
              <span className="font-bold">•Redux</span>
              <span className="font-bold"> •Tailwind</span>
            </p>
            <p className="text-md md:text-sm p-2 ">
              For sourcecode,{" "}
              <a
                className="border-b-2 border-gray-400 hover:text-black"
                href="https://github.com/chasacademy-EmmaJohansson/reduxTodo"
                target="_blank"
              >
                click here.
              </a>
            </p>
          </div>
        </div>
        {/* <div className="border-2 w-11/12 border-white bg-white flex flex-col justify-center items-center rounded-xl">
       
          
        </div>
        <div className="border-2 w-11/12 bg-white border-white flex flex-col justify-center items-center rounded-xl">
          <div>
            <a href="https://redux-todo-sepia.vercel.app/" target="_blank">
              <Image
                alt="todo"
                className="rounded-sm border-double border-gray-300 border-b-4"
                width={300}
                src={todo}
              />
            </a>
          </div>
          
        </div>
        <div className="border-2 w-11/12 bg-white border-white rounded-xl flex flex-col justify-center items-center">
          <div className="">
            <a href="https://redesign-zoom-tl9n.vercel.app/" target="_blank">
              <Image
                alt="zoom"
                className="rounded-sm border-double border-gray-300 border-b-4"
                src={zoom}
              />
            </a>
          </div>
         
        </div> */}
      </div>
    </div>
  );
}

// <div className="flex flex-col">
//   <div className="flex gap-5 justify-center items-center">
//     <Image
//       className="rounded-lg w-80 h-96 border-4 border-gray-300"
//       src={radio}
//     />
//     <div className="flex w-80 h-96 rounded-lg bg-gradient-to-t from-blue-200 to-pink-200 border-4 border-gray-300">
//       <p className="flex flex-col font-semibold justify-around text-center items-center text-gray-400">
//         An API project where I rendered different Swedish radiostations.
//         <br></br>
//         <span className="font-bold">
//           In this project I used: <br></br>
//           <br></br> • React • Tailwind
//         </span>
//         <br></br>
//         <div>
//           For sourcecode,{" "}
//           <a
//             className="hover:text-pink-300 text-gray-600"
//             href="https://github.com/chasacademy-EmmaJohansson/radioplayer-react"
//             target="_blank"
//           >
//             click here.
//           </a>
//         </div>
//       </p>
//     </div>
//     <div className="flex gap-5 justify-center items-center">
//       <Image
//         className="rounded-lg w-80 h-96 border-4 border-gray-300"
//         src={zoom}
//       />
//     </div>
//     {/* <div>
//       <Image
//         className="rounded-lg border-4 border-gray-300 w-2/5 h-96"
//         src={zoom}
//       />
//     </div>
//     <Image
//       className="rounded-lg w-80 h-96 border-4 border-gray-300"
//       src={todo}
//     /> */}
//   </div>
// </div>;
