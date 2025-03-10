import Image from "next/image";
import Link from "next/link";
import Title1 from "./text/Title1";
import PrimaryButton from "./button/PrimaryButton";
import Card from "./layout/Card";

export default function AboutUs() {
    return (
        <Card className="w-full max-w-7xl mx-auto p-5 m-5 rounded-3xl bg-fundoClaro">
            <header className="text-center relative mb-5">
                <Title1>Nos conheça melhor</Title1>
                <p className="font-kanit font-bold text-lg mt-2">Mambee – escola fábrica de software <br /> transformando ideias em soluções</p>

                <Image
                    className="absolute top-0 right-0 hidden md:block"
                    src="/images/favoMel.png"
                    width={120}
                    height={120}
                    alt="Favo de mel"
                />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-justify">
                <Image
                    src="/images/Imagem.svg"
                    alt="Equipe trabalhando"
                    width={500}
                    height={300}
                    className="m-auto"
                />
                <div className="flex flex-col justify-between gap-5">
                    <p>
                        <span className="text-azul font-bold">Origem:</span> Fundada no curso de Análise e Desenvolvimento de Sistemas (ADS),
                        a Mambee foi criada para servir como um ambiente onde alunos podem
                        colocar em prática o que aprendem em sala de aula, desenvolvendo
                        projetos de software reais. 
                    </p>
                    <p>
                        <span className="text-azul font-bold">Objetivos:</span> A Mambee busca promover o crescimento técnico e profissional dos
                        alunos, oferecendo um espaço colaborativo que simula o ambiente
                        de trabalho. O Laboratorio incentiva a inovação, desenvolvimento de habilidades de progamação, trabalho em equipe, e aplicação de metodologias ágeis.
                    </p>
                    <p>
                        <span className="text-azul font-bold">Evolução:</span> Com o tempo, a Mambee se modernizou, adotando novas tecnologias,
                        como inteligência artificial e desenvolvimento mobile. A infraestrutura foi aprimorada e o número de projetos aumentou em complexidade, além de parcerias com empresas e eventos de tecnologias que enriqueceram o ambiente.
                    </p>
                </div>
                <Image
                    src="/images/Imagem (1).svg"
                    alt="Laboratório tecnológico"
                    width={500}
                    height={300}
                    className="m-auto"
                />
                <div className="flex flex-col justify-between gap-5">
                    <p>
                        <span className="text-azul font-bold">Impacto nos Alunos:</span> Muitos alunos que passaram pela Mambee destacam o laboratório como
                        um divisor de águas na sua formação. A experiência prática, aliada ao ambiente de apoio, os preparou para enfrentar os desafios do mercado de trabalho, resultando em sucesso profissional.
                    </p>
                    <p>
                        <span className="text-azul font-bold">Resultados Obtidos:</span> O laboratório tem formado alunos que se destacam no mercado de
                        tecnologia, graças as á vivencia prática e ao desenvolvimento de projetos complexos, além de habilidades interpessoais adquiridas durante a experiencia na Mambee.
                    </p>
                    <p>
                        <span className="text-azul font-bold">Planos Futuros:</span> A Mambee pretende expandir suas parcerias com empresas de
                        tecnologia, continuar investindo em projetos inovadores e criar programas de mentorias para que ex-alunos voltar e compartilhar suas experiências com as novas gerações.
                    </p>
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-end">
                    <Link href="#Contato">
                        <PrimaryButton className="w-full max-w-64">Vamos conversar</PrimaryButton>
                    </Link>
                </div>
            </div>

        </Card>
    );
}
