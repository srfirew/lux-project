import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import Spotlight from "@/components/spotlight";
import TypingEffect from "@/components/typing-effect";

export default function Workflows() {
  return (
    <>
      {/* Wave divider */}
      <svg
        className="w-full h-auto block"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ marginBottom: "-2px" }}
      >
        <path
          d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z"
          fill="hsl(224, 20%, 18%)"
        />
      </svg>
      <section style={{
        backgroundColor: "hsl(224, 20%, 18%)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-15 mt-15 text-center md:pb-15 md:mt-15">
            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
              Jogue em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">3 passos</span> simples
            </h2>
            <p style={{fontFamily: "monospace"}} className="text-lg text-indigo-200/80">
              $ <TypingEffect text="> iniciando servidor de jogos..." speed={50} delayBetweenCycles={4000} />
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 p-px border border-indigo-500/20 hover:border-indigo-500/60 transition-all duration-300 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-400/30 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-purple-400/20 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-br from-slate-900 to-slate-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-indigo-900/20 after:via-transparent after:to-purple-900/20">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="mb-3 text-center">
                    <span className="text-white text-base font-semibold">
                      {"01. ESCOLHA SUA BIBLIOTECA"}
                    </span>
                  </div>
                  <p style={{fontFamily: "monospace"}} className="text-indigo-200">
                    {'Conecte sua conta Steam, Epic Games e outras plataformas. Todos os seus jogos já comprados, disponíveis na hora.'}
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 p-px border border-indigo-500/20 hover:border-indigo-500/60 transition-all duration-300 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-400/30 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-purple-400/20 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-br from-slate-900 to-slate-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-indigo-900/20 after:via-transparent after:to-purple-900/20">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="mb-3 text-center">
                    <span className="text-white text-base font-semibold">
                      {"02. CONECTE EM QUALQUER TELA"}
                    </span>
                  </div>
                  <p style={{fontFamily: "monospace"}} className="text-indigo-200">
                    {'Celular, tablet, TV ou PC. Se tem navegador, você já pode jogar.'}
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 p-px border border-indigo-500/20 hover:border-indigo-500/60 transition-all duration-300 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-400/30 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-purple-400/20 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-br from-slate-900 to-slate-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-indigo-900/20 after:via-transparent after:to-purple-900/20">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="mb-3 text-center">
                    <span className="text-white text-base font-semibold">
                      {"03. COMECE A JOGAR"}
                    </span>
                  </div>
                  <p style={{fontFamily: "monospace"}} className="text-indigo-200">
                    {'Latência abaixo de 20ms. Gráficos em alta qualidade. Experiência de console e computador na nuvem.'}
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
    </>
  );
}
