import { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";
import AnimatedBox from "../AnimatedBox";
import { useAutoScroll } from "../../hooks/useAutoScroll";


const Projects = () => {
    const { ref: refCards, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection1, inView: section1InView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection2, inView: section2InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection3, inView: section3InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const [screenWidth, setScreenWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );


    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const scrollToCards = () => {
            refCards.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        cardsInView === true && screenWidth < 767 ? scrollToCards() : null
    }, [cardsInView])

    useEffect(() => {
        const scrollToSection1 = () => {
            refSection1.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        section1InView === true ? scrollToSection1() : null
    }, [section1InView])
    
    useEffect(() => {
        const scrollToSection2 = () => {
            refSection2.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        section2InView === true ? scrollToSection2() : null
    }, [section2InView])
    
    useEffect(() => {
        const scrollToSection3 = () => {
            refSection3.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        section3InView === true ? scrollToSection3() : null
    }, [section3InView])

    const horizontal = useAutoScroll<HTMLDivElement>({
        direction: "horizontal",
        speed: 90,
        loop: true,
        reverse: true,
    });

    const setRefs = (element: any) => {
        refCards.current = element;
        horizontal.ref.current = element;
    };

  return (
    <div className="relative top-[100vh] w-full flex flex-col items-center">
        <div 
            ref={setRefs}
            className="sticky md:top-[50vh] w-full max-h-[100vh] overflow-auto scrollbar-hide max-md:flex-col flex gap-5 p-3 py-10 md:p-10"
        >
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Natural language processing (NLP)</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">AI technology that enables computers to understand, interpret, and generate human language. Used in chatbots, translation services, and text analysis applications.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Large language model (LLM)</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">Advanced AI systems trained on vast amounts of text data to understand and generate human-like text. Powers conversational AI, content creation, and complex reasoning tasks.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Machine Learning</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Used in recommendations, fraud detection, and predictive analytics.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Deep Learning</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">Advanced machine learning using neural networks with multiple layers to process complex data. Drives breakthroughs in image recognition, speech processing, and autonomous systems.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Data Training</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Data Training</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
            <AnimatedBox animation="fadeIn" threshold={0.3} className="md:min-w-120 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                <h3 className="text-2xl font-medium">Data Training</h3>
                <div className="space-y-10">
                    <p className="text-[0.8rem] max-w-80">The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions.</p>
                    <button className="w-full p-2 bg-white text-black font-medium rounded-xl">Try it</button>
                </div>
            </AnimatedBox>
        </div>
        <div ref={refSection1} className="sticky top-0 mt-100 max-md:mt-30 bg-[#333] text-white w-full min-h-[100vh] flex flex-col items-center justify-center">
           
        </div>
        <div ref={refSection2} className="sticky top-0 bg-white text-black w-full min-h-[100vh] flex flex-col items-center justify-center">
           
        </div>
        <div ref={refSection3} className="sticky w-full min-h-[100vh] flex flex-col items-center bg-[#87e7ff]">
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
    </div>
  )
}

export default Projects
