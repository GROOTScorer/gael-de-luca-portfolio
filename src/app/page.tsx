import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p-[5%] flex gap-x-[5%] gap-y-8 items-start justify-center flex-wrap min-h-screen">
      <div className="w-[400px] h-[250px] rounded-3xl bg-radial from-neutral-700 to-neutral-800 border border-neutral-500 flex flex-col justify-between p-4">
        <div className="flex items-start mb-2">
          <Image
            alt="Foto"
            src="/foto_personal.jpg"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="ml-4 flex-1 text-center mt-2">
            <h1 className="text-white text-4xl font-poppins">Gael De Luca</h1>
            <h2 className="text-neutral-200 text-xl font-inter mt-2">
              Desarrollador web
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="flex justify-center gap-4">
            <div className="w-[175px]">
              <a
                href="https://github.com/GROOTScorer/"
                className="bg-black rounded-xl p-2 shadow-lg flex items-center justify-center h-[50px]"
                style={{ boxShadow: "0 4px 6px -1px rgb(64 64 64 / 0.5)" }}
              >
                <Image
                  alt="Logo de Github"
                  src="/logo_github.png"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="w-[175px]">
              <a
                href="https://www.linkedin.com/in/gael-de-luca/"
                className="rounded-xl p-2 shadow-lg flex items-center justify-center h-[50px]"
                style={{
                  backgroundColor: "#0E76A8",
                  boxShadow: "0 4px 6px -1px rgb(14 118 168 / 0.5)",
                }}
              >
                <Image
                  alt="Logo de Linkedin"
                  src="/logo_linkedin.png"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-[175px]">
              <a
                href="mailto:gaeldlk@gmail.com"
                className="bg-gray-300 rounded-xl p-2 shadow-lg flex items-center justify-center h-[50px]"
              >
                <Image
                  alt="Logo de Gmail"
                  src="/logo_gmail.png"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="w-[175px]">
              <a
                href="/Gael_De_Luca_CV.pdf"
                className="bg-neutral-900 rounded-xl p-2 shadow-lg flex items-center justify-center h-[50px]"
                style={{ boxShadow: "0 4px 6px -1px rgb(64 64 64 / 0.5)" }}
              >
                <Image
                  alt="Currículum Vitae"
                  src="/logo_cv.png"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[400px] h-[250px] rounded-3xl bg-radial from-neutral-700 to-neutral-800 border border-neutral-500 flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-4xl font-poppins mb-6">Proyectos</h1>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/GROOTScorer/gantt-generator"
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3">
              <Image
                alt="Logo de Gantt Generator"
                src="/logo_gantt_generator.png"
                width={75}
                height={75}
              />
            </div>
            <span>Gantt Generator</span>
          </a>
          <a
            href="https://github.com/GROOTScorer/blog-tp"
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3">
              <Image
                alt="Logo de Assemblog"
                src="/logo_assemblog.png"
                width={75}
                height={75}
              />
            </div>
            <span>Assemblog</span>
          </a>
          <a
            href="https://github.com/GROOTScorer/acortador-url"
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3">
              <Image
                alt="Logo de Short-Link"
                src="/logo_short-link.png"
                width={75}
                height={75}
              />
            </div>
            <span>Short-Link</span>
          </a>
        </div>
      </div>
      <div className="w-[400px] h-[250px] rounded-3xl bg-radial from-neutral-700 to-neutral-800 border border-neutral-500 flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-4xl font-poppins mb-6">Tech Stack</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3">
            <Image
              alt="Logo de React"
              src="/logo_react.png"
              width={75}
              height={75}
            />
          </div>
          <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3 h-[101px]">
            <Image
              alt="Logo de Tailwind CSS"
              src="/logo_tailwind_css.png"
              width={75}
              height={75}
            />
          </div>
          <div className="bg-gradient-to-br from-[#808080] to-[#666666] rounded-xl p-3 flex items-center justify-center border-1 border-[#C5C3C3] mb-3">
            <Image
              alt="Logo de Figma"
              src="/logo_figma.png"
              width={75}
              height={75}
            />
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[250px] rounded-3xl bg-radial from-neutral-700 to-neutral-800 border border-neutral-500 flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-4xl font-poppins mb-4">Educación</h1>
        <Image
          className="mb-2"
          alt="Logo de la Escuela Técnica N° 35"
          src="/logo_escuela_tecnica_35.png"
          width={100}
          height={100}
        />
        <span className="text-white">
          Escuela Técnica N° 35 Ing. Eduardo Latzina
        </span>
        <span className="text-sm">Especialidad en Computación</span>
        <span className="text-sm">2020 - 2025</span>
      </div>
    </div>
  );
}
