import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="text-black/80 bg-[length:200%_auto] bg-clip-text font-space pb-5 text-4xl md:text-5xl"
              data-aos="fade-up"
            >
              <span className="font-semibold">{"</Lux>"}</span>
            </h1>
            
            <div className="mx-auto max-w-3xl">
              <p
                style={{fontFamily: "monospace"}}
                className="mb-8 text-xl text-black/80"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {"// Sem console. Sem limites. Jogue qualquer jogo, em qualquer tela, a qualquer hora. Lux - game é na nuvem."}

              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400} className="mt-10">
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span style={{fontFamily: "monospace"}} className="relative inline-flex items-center">
                      {"~$ clique para jogar"}           
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
