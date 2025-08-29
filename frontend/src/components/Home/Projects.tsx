import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";
import useScrollModifier from "../../hooks/useScrollModifier";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const CardData = [
    {id: 1, lable: "Natural language processing (NLP)", desctirption: "AI technology that enables computers to understand, interpret, and generate human language. Used in chatbots, translation services, and text analysis applications."},
    {id: 2, lable: "Large language model (LLM)", desctirption: "Advanced AI systems trained on vast amounts of text data to understand and generate human-like text. Powers conversational AI, content creation, and complex reasoning tasks."},
    {id: 3, lable: "Machine Learning", desctirption: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Used in recommendations, fraud detection, and predictive analytics."},
    {id: 4, lable: "Deep Learning", desctirption: "Advanced machine learning using neural networks with multiple layers to process complex data. Drives breakthroughs in image recognition, speech processing, and autonomous systems."},
    {id: 5, lable: "Data Training", desctirption: "The foundation of AI learning - large datasets used to teach machine learning models patterns, relationships, and knowledge needed for making accurate predictions and decisions."},
]

const Projects = () => {
    const { ref: refCards, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection1, inView: section1InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection2, inView: section2InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const { ref: refSection3, inView: section3InView } = useInView({ threshold: 0.3, triggerOnce: false, rootMargin: "0px" });
    const [screenWidth, setScreenWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    useScrollModifier(refCards, cardsInView, { landingPosition: screenWidth < 767 ? 'start' : "end" })
    useScrollModifier(refSection1, section1InView)
    useScrollModifier(refSection2, section2InView)
    useScrollModifier(refSection3, section3InView)

    const [isAtTop, setIsAtTop] = useState(false);
    const scrollableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollableRef.current) {
                const rect = scrollableRef.current.getBoundingClientRect();
                // Check if the scrollable div has reached the top of the viewport (window)
                setIsAtTop(rect.top <= 20 && rect.top >= -20);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



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
        refCards.current = element;
        cardsContainerRef.current = element;
    };
    
    const { scale, containerRef: progressScrollContainer } = useScrollProgress({
        container: "element",
        minScale: 0 ,
        maxScale: screenWidth <= 767 ? 2 : 5,
    });
    
    const setRefsSection2 = (element: any) => {
        refSection2.current = element;
        progressScrollContainer.current = element;
        scrollableRef.current = element
    };

  return (
    <div ref={parentContainer} className="relative top-[100vh] w-full flex flex-col items-center">
        <div 
            ref={setRefsCardContainer}
            className="bg-gradient-to-t from-black from-10% pb-70 max-md:pb-30 px-5 sticky md:top-[55vh] w-full max-md:min-h-[100vh] overflow-auto scrollbar-hide max-md:flex-col flex gap-5"
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
        <section 
        ref={setRefsSection2} 
        className={`
            sticky top-0 w-full h-[100vh] scrollbar-hide scroll-smooth
            ${isAtTop ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden pointer-events-none'}
        `}>
            <div className="sticky top-0 min-h-[200vh] w-full">
                <div className="sticky top-0 w-full h-[100vh] flex flex-col items-center justify-center">
                    <img 
                    src="3d-render-modern-background-with-flowing-cyber-particles.jpg"
                    className={`absolute inset-0 w-full h-[100vh] object-cover scale-`}
                    style={{
/*                             WebkitMaskImage: `radial-gradient(circle at center, transparent 50px, black 400px)`,
                            maskImage: `radial-gradient(circle at center, transparent 50px, black 400px)`,
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat', */
                            scale: 1 + scale * 0.2
                        }}
                    ></img>
                    <div
                        className={`
                            relative w-[100vw] h-[100vh] rounded-[7px] backdrop-blur-2xl bg-[#00000071]

                        `}
                        style={{
                            WebkitMaskImage: `radial-gradient(circle at center, transparent ${400*scale}px, black ${400*scale}px)`,
                            maskImage: `radial-gradient(circle at center, transparent ${400*scale}px, black ${400*scale}px)`,
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                    {/* <img className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] min-w-[100vw] min-h-[100vh] object-cover" src="https://i.postimg.cc/1sXvNbzV/ricefield1.jpg" alt="" /> */}
                </div>
            </div>
            <div ref={refSection1} className="sticky top-0 bg-[#ffffff] text-black w-full min-h-[100vh] flex flex-col items-center justify-center">
           
            </div>
        </section>

    </div>
  )
}

export default Projects
