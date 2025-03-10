import Contact from "@/components/Contact";
import Highlights from "@/components/Highlights";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Teachers from "@/components/Teachers";
//teste
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16">
      <main className="flex flex-col w-full">
        <Navbar />

        <section className="relative min-h-[90vh] w-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url('/images/fundo.png')" }}>

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative w-full max-w-7xl p-5">
            <div className="w-full space-y-5 max-w-2xl p-4 rounded-3xl flex flex-col">
              <p className="text-2xl text-white text-justify font-kanit font-bold">
                Ambiente prático e inovador para preparar estudantes para o mercado de desenvolvimento de software por meio de projetos reais.
              </p>
            </div>
          </div>
        </section>

        <div>
          <Highlights />
          <Partners />
          <Process />
          <Teachers />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
