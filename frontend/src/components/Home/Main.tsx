import { FaArrowDown } from "react-icons/fa"

const Main = () => {
  return (
    <div className='fixed top-0 left-0 min-w-full -z-10 min-h-[100vh] bg-white'>
        <div className="absolute -z-10 rounded-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#01f7ff] to-[#ae00ff] h-3/5 w-2/3"></div>
        <div className="absolute inset-0 -z-9 w-full h-full flex justify-center bg-transparent backdrop-blur-[130px] overflow-y-auto">
            <h1 className="absolute top-[40vh] -translate-y-full text-center w-full text-[5rem] max-md:text-[3rem] font-bold px-7">AI Dev Center</h1>
        </div>
        <div className="absolute bottom-5 text-[0.9rem] font-medium flex gap-2 items-center justify-center w-full">
          <span>Scroll Down</span>
          <FaArrowDown className="animate-bounce"/>
        </div>
    </div>
  )
}

export default Main
