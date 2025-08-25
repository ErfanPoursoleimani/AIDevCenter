import { FaArrowDown } from "react-icons/fa"

const Main = () => {
  return (
    <div className='fixed top-0 left-0 min-w-full -z-10 min-h-[100vh] bg-white'>
        <div 
          className="absolute -z-10 rounded-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-2/3"
          style={{
              background: 'linear-gradient(-90deg, #01f7ff, #d16eff, #ff6b6b, #4ecdc4)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite'
            }}
        />
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <div className="absolute inset-0 -z-9 w-full h-full flex justify-center bg-transparent backdrop-blur-[140px] overflow-y-auto">
            
            <h1 className="absolute top-[40vh] -translate-y-full text-center w-full text-[5rem] max-md:text-[3rem] font-bold px-7">
              <span>AI Dev Center</span>
              <div className="text-[0.9rem] font-medium flex gap-2 items-center justify-center w-full">
                <span>Scroll Down</span>
                <FaArrowDown className="animate-bounce"/>
              </div>
            </h1>
        </div>
    </div>
  )
}

export default Main
