import { useEffect, useRef, useState } from "react";
// import { useInView } from "../../hooks/useInView";
// import useScrollModifier from "../../hooks/useScrollModifier";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const CardData = [
    {id: 1, lable: "Natural language processing (NLP)", desctirption: "AI technology that enables computers to understand, interpret, and generate human language. Used in chatbots, translation services, and text analysis applications."},
    {id: 2, lable: "Large language model (LLM)", desctirption: "Advanced AI systems trained on vast amounts of text data to understand and generate human-like text. Powers conversational AI, content creation, and complex reasoning tasks."},
    {id: 3, lable: "Machine Learning", desctirption: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Used in recommendations, fraud detection, and predictive analytics."},
    {id: 4, lable: "Deep Learning", desctirption: "Advanced machine learning using neural networks with multiple layers to process complex data. Drives breakthroughs in image recognition, speech processing, and autonomous systems."},
    {id: 5, lable: "Data Training", desctirption: "The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions."},
]

const Projects = () => {
    // const { ref: refCards, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    // const { ref: refSection1, inView: section1InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    // const { ref: refSection2, inView: section2InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    // const { ref: refSection3, inView: section3InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const [screenWidth, setScreenWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    // useScrollModifier(refCards, cardsInView, { landingPosition: screenWidth < 767 ? 'start' : "end" })
    // useScrollModifier(refSection1, section1InView)
    // useScrollModifier(refSection2, section2InView)
    // useScrollModifier(refSection3, section3InView)



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

    const setRefsCardContainer = (element: any) => {
        // refCards.current = element;
        cardsContainerRef.current = element;
    };
    
    const { scale, progress } = useScrollProgress({
        container: "window",
        minScale: 0 ,
        maxScale: 6,
    });
    

  return (
    <div ref={parentContainer} className="relative top-[100vh] w-full flex flex-col items-center">
        <div 
            ref={setRefsCardContainer}
            className={`bg-gradient-to-t from-black from-10% pb-70 max-md:pb-30 px-5 sticky ${progress <= 0.5 ? "md:top-[55vh]" : "" } w-full max-md:min-h-[100vh] overflow-auto scrollbar-hide max-md:flex-col flex gap-5`}
/*             style={{
                visibility: progress >= 0.5 && progress < 1 ? "hidden" : "visible"
            }} */
        >
            <div className="flex max-md:flex-col gap-5">
                {CardData.map((card) => (
                    <div key={card.id} className="md:min-w-80 xl:min-w-100 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
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
                    <div key={card.id} className="md:min-w-80 xl:min-w-100 min-h-80 min-w-full shadow-xl bg-gradient-to-t from-black text-white backdrop-blur-[10px] inline-flex flex-col justify-between gap-10 p-10 rounded-4xl">
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
        <div className="sticky  min-h-[300vh] max-md:min-h-[150vh] w-full">
            <div className="sticky top-0 w-full max-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
                <div
                className={`absolute inset-0 w-full h-[100vh] object-center bg-[white]`}
                style={{scale: 1 + scale * 0.05}}
                ></div>
                <div
                    className={`
                        md:ml-12 relative w-[100vw] h-[100vh] rounded-[7px] backdrop-blur-2xl bg-radial bg-cyan-700
                    `}
                    style={{
                        WebkitMaskImage: `radial-gradient(circle at center, transparent ${550*scale - 1270}px, black ${550*scale - 1270}px)`,
                        maskImage: `radial-gradient(circle at center, transparent ${550*scale - 1270}px, black ${550*scale - 1270}px)`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                    }}
                >
                </div>
            </div>
        </div>
        <div className="sticky w-full min-h-[100vh] bg-neutral-600 px-10">
        </div>
        <div className="sticky w-full min-h-[100vh] px-10">
        </div>
        <div className="fixed z-1 px-5 top-0 left-0 md:w-12 md:h-[100vh] w-[100vw] min-h-17 flex justify-stretch items-center md:flex-col md:justify-center md:items-stretch bg-[#fff] shadow-2xl">
            <span className="font-bold text-black text-[1.2rem] md:hidden">ErfanPs</span>
            <div className="flex-1 w-full flex items-center justify-center">
                <span 
                className={`md:w-[2px] h-[2px] bg-[black]`}
                style={ screenWidth <= 767 ? { width: `${progress*25}%` } : { height: `${progress*25}%` }}
                ></span>
            </div>
            <div className='flex items-center gap-4 md:hidden'>
                <button className="text-[0.8rem] border-1 px-3 py-[6px] border-neutral-200 rounded-[7px]">Sign In</button>
                <button className="text-[0.8rem] border-1 px-3 py-[6px] bg-black text-white rounded-[7px]">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Projects
