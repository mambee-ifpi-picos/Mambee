import React from 'react';
import Link from 'next/link';

export default function CiclosLandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">

            {/* 1. HERO SECTION - Chamada para o Próximo Ciclo */}
            <section className="bg-[#1E284B] text-white py-20 px-6 text-center relative overflow-hidden">
                {/* Detalhe visual de fundo */}
                <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#B83280] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#B83280]/20 text-[#fbcfe8] text-sm font-semibold mb-6 border border-[#B83280]/50">
                        Inscrições Abertas
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Traga o seu projeto para a <span className="text-[#B83280]">Fábrica de Software Mambee</span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Estamos recebendo novas demandas! Se você tem uma ideia, um problema que precisa de solução tecnológica ou um projeto em andamento, cadastre-se no nosso novo ciclo.
                    </p>
                    <a href="#formulario-demandas" className="inline-block bg-[#B83280] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#972969] transition-colors shadow-lg hover:shadow-[#B83280]/30">
                        Cadastrar Minha Demanda
                    </a>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 mt-16 space-y-24">

                {/* 2. FORMULÁRIO CONTÍNUO DE DEMANDAS */}
                <section id="formulario-demandas" className="scroll-mt-20">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">

                        <div className="flex-1">
                            <h2 className="text-[#1E284B] text-3xl font-bold mb-4">Cadastro de Demandas</h2>
                            <div className="h-1 w-16 bg-[#B83280] mb-6"></div>
                            <p className="text-slate-600 mb-6 text-lg">
                                Nosso formulário está continuamente aberto. Preencha os dados básicos do seu projeto e nossa equipe técnica entrará em contato para agendar uma reunião de avaliação e viabilidade.
                            </p>
                            <ul className="space-y-3 text-slate-600 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#B83280] font-bold">✓</span> Desenvolvimento Web
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#B83280] font-bold">✓</span> Aplicativos Mobile
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#B83280] font-bold">✓</span> Consultoria em Software
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1 w-full bg-slate-50 p-6 rounded-xl border border-slate-100">
                            {/* Aqui você pode integrar com seu backend ou colocar um iframe */}
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-[#1E284B] mb-1">Nome do Responsável</label>
                                    <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#B83280] focus:ring-1 focus:ring-[#B83280]" placeholder="Seu nome" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1E284B] mb-1">E-mail para Contato</label>
                                    <input type="email" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#B83280] focus:ring-1 focus:ring-[#B83280]" placeholder="seu@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1E284B] mb-1">Resumo da Demanda</label>
                                    <textarea rows={4} className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#B83280] focus:ring-1 focus:ring-[#B83280]" placeholder="Descreva brevemente o que você precisa..."></textarea>
                                </div>
                                <button type="button" className="w-full bg-[#1E284B] text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
                                    Enviar Demanda
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* 3. CICLOS ANTERIORES E MARCAS */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-[#1E284B] text-3xl font-bold uppercase tracking-wide">
                            Ciclos Anteriores
                        </h2>
                        <div className="flex justify-center items-center mt-3 gap-1">
                            <div className="h-6 w-0.5 bg-[#1E284B]"></div>
                            <div className="h-6 w-0.5 bg-[#B83280]"></div>
                        </div>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Conheça as soluções desenvolvidas pela nossa Fábrica Escola em edições passadas e as marcas que confiaram no nosso trabalho.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Projeto 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
                            <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                                {/* Aqui vai a imagem de capa do projeto (Next/Image idealmente) */}
                                <span className="text-slate-400">Mockup do Sistema</span>
                                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-[#B83280]">
                                    2025
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {/* Espaço para a logo da marca do cliente */}
                                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-500">
                                        L
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Cliente Exemplo</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#1E284B] mb-2 group-hover:text-[#B83280] transition-colors">
                                    Sistema de Gestão Escolar
                                </h3>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                                    Plataforma completa para controle de notas, frequência e integração entre professores e alunos.
                                </p>
                                <Link href="/projetos" className="text-[#B83280] text-sm font-semibold hover:underline">
                                    Ver detalhes do projeto →
                                </Link>
                            </div>
                        </div>

                        {/* Projeto 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
                            <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                                <span className="text-slate-400">Mockup do App</span>
                                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-[#B83280]">
                                    2025
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-500">
                                        ZA
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Prefeitura Municipal</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#1E284B] mb-2 group-hover:text-[#B83280] transition-colors">
                                    Zona Azul Digital
                                </h3>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                                    Aplicativo mobile para controle e pagamento de estacionamento rotativo na área central da cidade.
                                </p>
                                <Link href="/projetos" className="text-[#B83280] text-sm font-semibold hover:underline">
                                    Ver detalhes do projeto →
                                </Link>
                            </div>
                        </div>

                        {/* CTA Projetos */}
                        <div className="bg-[#1E284B] rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-center text-center p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Quer ver mais entregas?
                            </h3>
                            <p className="text-slate-300 text-sm mb-6">
                                Acesse nosso portfólio completo com todas as tecnologias, repositórios e detalhes dos módulos.
                            </p>
                            <Link href="/projetos" className="inline-block border-2 border-[#B83280] text-[#B83280] bg-white px-6 py-2 rounded-full font-bold hover:bg-[#B83280] hover:text-white transition-colors">
                                Ver todos os projetos
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}