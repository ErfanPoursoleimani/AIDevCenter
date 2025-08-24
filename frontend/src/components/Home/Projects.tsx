import AnimatedBox from "../AnimatedBox"


const Projects = () => {
  return (
    <div className="relative top-[100vh] w-full min-h-[100vh] flex flex-col items-center">
        <div className="sticky max-md:top-[40vh] top-[50vh] w-full md:overflow-x-auto scrollbar-hide max-md:flex-col flex gap-5 p-3 py-10 md:p-10">
            {/* <div className="absolute z-1 top-0 left-0 w-full h-full"></div> */}
            <AnimatedBox animation="scale" className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Natural language processing (NLP)</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">AI technology that enables computers to understand, interpret, and generate human language. Used in chatbots, translation services, and text analysis applications.</p>
                    <button className="w-full p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="scale" className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Large language model (LLM)</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">Advanced AI systems trained on vast amounts of text data to understand and generate human-like text. Powers conversational AI, content creation, and complex reasoning tasks.</p>
                    <button className="w-full p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="scale" className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Machine Learning</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Used in recommendations, fraud detection, and predictive analytics.</p>
                    <button className="w-full p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="scale" className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Deep Learning</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">Advanced machine learning using neural networks with multiple layers to process complex data. Drives breakthroughs in image recognition, speech processing, and autonomous systems.</p>
                    <button className="w-full p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="scale" className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Training Data</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions.</p>
                    <button className="w-full p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
        </div>
    </div>
  )
}

export default Projects
