import React from 'react'
import AnimatedBox from '../AnimatedBox'

const About = () => {
  return (
    <div className="relative top-[100vh] w-full min-h-[100vh] flex flex-col pt-[55vh] items-center">
        {/* <h2 >AI models implemented</h2> */}
        <div className="overflow-x-clip md:flex md:flex-wrap max-md:flex-col md:items-center justify-center gap-3 md:gap-10 p-3 md:p-10">
            <AnimatedBox animation="slideRight" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Lorem Ipsum</h3>
                <p className="text-[0.8rem] max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat perspiciatis ex, modi molestias neque minus vero. Provident, dolorem atque.</p>
                <button className=" p-2 bg-[#333] text-white rounded-xl">Try it</button>
            </AnimatedBox>
            <AnimatedBox animation="slideUp" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Lorem Ipsum</h3>
                <p className="text-[0.8rem] max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat perspiciatis ex, modi molestias neque minus vero. Provident, dolorem atque.</p>
                <button className=" p-2 bg-[#333] text-white rounded-xl">Try it</button>
            </AnimatedBox>
            <AnimatedBox animation="slideLeft" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Lorem Ipsum</h3>
                <p className="text-[0.8rem] max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat perspiciatis ex, modi molestias neque minus vero. Provident, dolorem atque.</p>
                <button className=" p-2 bg-[#333] text-white rounded-xl">Try it</button>
            </AnimatedBox>
        </div>
    </div>
  )
}

export default About
