const Main = () => {
  return (
    <div className='min-w-full relative -z-10 min-h-[100vh] bg-white'>
        <div className="fixed -z-10 rounded-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#01f7ff] to-[#ae00ff] h-3/5 w-2/3"></div>
        <div className="fixed inset-0 -z-9 w-full h-full flex items-center justify-center bg-transparent backdrop-blur-[130px] overflow-y-auto">
            <h1 className="text-center w-full text-[5rem] max-md:text-[3rem] font-bold">AI Dev Center</h1>
        </div>
    </div>
  )
}

export default Main
