import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";
import AnimatedBox from "../AnimatedBox";
import useScrollModifier from "../../hooks/useScrollModifier";

const CardData = [
    {id: 1, lable: "Natural language processing (NLP)", desctirption: "AI technology that enables computers to understand, interpret, and generate human language. Used in chatbots, translation services, and text analysis applications."},
    {id: 2, lable: "Large language model (LLM)", desctirption: "Advanced AI systems trained on vast amounts of text data to understand and generate human-like text. Powers conversational AI, content creation, and complex reasoning tasks."},
    {id: 3, lable: "Machine Learning", desctirption: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Used in recommendations, fraud detection, and predictive analytics."},
    {id: 4, lable: "Deep Learning", desctirption: "Advanced machine learning using neural networks with multiple layers to process complex data. Drives breakthroughs in image recognition, speech processing, and autonomous systems."},
    {id: 5, lable: "Data Training", desctirption: "The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions."},
]

const Projects = () => {
    const { ref: refCards, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection1, inView: section1InView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection2, inView: section2InView } = useInView({ threshold: 0.2, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection3, inView: section3InView } = useInView({ threshold: 0.2, triggerOnce: false, rootMargin: "0px" });
    const [screenWidth, setScreenWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    useScrollModifier(refCards, cardsInView, { landingPosition: screenWidth < 767 ? 'start' : "end" })
    useScrollModifier(refSection1, section1InView)
    useScrollModifier(refSection2, section2InView)
    useScrollModifier(refSection3, section3InView)
    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const parentContainer = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const speed = 1; // px per frame

    useEffect(() => {
        const el = cardsContainerRef.current
        if (!el) return

        let raf: number
        const scroll = () => {
            el.scrollLeft += speed

            const firstChild = el.firstElementChild as HTMLElement
            if (firstChild && el.scrollLeft >= firstChild.scrollWidth) {
                // Reset back by width of one copy
                el.scrollLeft -= firstChild.scrollWidth;
            }

            raf = requestAnimationFrame(scroll)
        }

        raf = requestAnimationFrame(scroll)
        return () => cancelAnimationFrame(raf)
    }, []);

    const setRefs = (element: any) => {
        refCards.current = element;
        cardsContainerRef.current = element;
    };

  return (
    <div ref={parentContainer} className="relative top-[100vh] w-full flex flex-col items-center">
        <div 
            ref={setRefs}
            className="sticky md:top-[55vh] w-full max-md:min-h-[100vh] overflow-auto scrollbar-hide max-md:flex-col flex gap-5 p-3 py-10 md:p-10"
        >
            <div className="flex max-md:flex-col gap-5">
                {CardData.map((card) => (
                    <div key={card.id} className="md:min-w-100 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                        <h3 className="text-2xl font-medium">{card.lable}</h3>
                        <div className="space-y-10">
                            <p className="text-[0.8rem] max-w-80">{card.desctirption}</p>
                            <button className="w-full p-2 bg-white font-bold rounded-xl">
                                <span className="text-[0.8rem] bg-gradient-to-r from-[#035a55] to-[#785800] bg-clip-text text-transparent">
                                    Learn More
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-5 max-md:hidden">
                {CardData.map((card) => (
                    <div key={card.id} className="md:min-w-100 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
                        <h3 className="text-2xl font-medium">{card.lable}</h3>
                        <div className="space-y-10">
                            <p className="text-[0.8rem] max-w-80">{card.desctirption}</p>
                            <button className="w-full p-2 bg-white font-bold rounded-xl">
                                <span className="text-[0.8rem] bg-gradient-to-r from-[#035a55] to-[#785800] bg-clip-text text-transparent">
                                    Learn More
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div ref={refSection1} className="sticky top-0 mt-50 max-md:mt-50 bg-[#fff] text-black w-full min-h-[100vh] flex flex-col items-center justify-center">
           
        </div>
        <div ref={refSection2} className="sticky top-0 w-full min-h-[100vh] flex flex-col items-center bg-[#ff96a8]">

        </div>
        <div ref={refSection3} className="sticky w-full min-h-[100vh] flex flex-col items-center bg-[#87e7ff]">
            <div className="overflow-x-clip md:flex md:flex-wrap max-md:flex-col md:items-center justify-center gap-3 md:gap-10 p-3 md:p-10">
                <AnimatedBox config={{delay: 0.2}} animation="slideRight" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
                    <h3 className="text-2xl font-medium">Lorem Ipsum</h3>
                    <p className="text-[0.8rem] max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat perspiciatis ex, modi molestias neque minus vero. Provident, dolorem atque.</p>
                    <button className=" p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </AnimatedBox>
                <AnimatedBox config={{delay: 0.2}} animation="slideUp" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
                    <h3 className="text-2xl font-medium">Lorem Ipsum</h3>
                    <p className="text-[0.8rem] max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat perspiciatis ex, modi molestias neque minus vero. Provident, dolorem atque.</p>
                    <button className=" p-2 bg-[#333] text-white rounded-xl">Try it</button>
                </AnimatedBox>
                <AnimatedBox config={{delay: 0.2}} animation="slideLeft" threshold={0.5} className="bg-gradient-to-t from-blue-100 max-md:w-full md:min-w-80 md:max-w-80 xl:max-w-100 backdrop-blur-[10px] inline-flex shadow-2xl flex-col gap-10 p-10 rounded-4xl">
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
