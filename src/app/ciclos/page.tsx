"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';

// --- DADOS DOS PROJETOS ---
const PROJETOS_ANTERIORES = [
    {
        id: 'educaju',
        nome: 'EDUCAJU',
        ano: '2025',
        sigla: 'ED',
        cliente: 'Projeto Educaju',
        logoCapa: './images/ciclos/educaju.svg',
        descricaoCurta: 'Um ecossistema digital que organiza o estudo, motiva o aluno e transforma o acompanhamento educacional dos seus filhos em algo simples.',
        descricaoCompleta: 'Um ecossistema digital que organiza o estudo, motiva o aluno e transforma o acompanhamento educacional dos seus filhos em algo simples.', //[cite: 17]
        equipe: [
            { nome: 'Kauê Alves S.', avatar: './images/ciclos/kaue.jpg' }, //[cite: 17]
            { nome: 'Artur Martins', avatar: './images/ciclos/artur.jpg' }  //[cite: 17]
        ],
        linkExterno: 'https://www.educaju.com/'
    },
    {
        id: 'glicemia',
        nome: 'GLICEMIA',
        ano: '2025',
        sigla: 'GL',
        cliente: 'Projeto GlicemIA',
        logoCapa: '/images/ciclos/glicemia.webp',
        descricaoCurta: 'A GlicemIA é uma plataforma baseada em Inteligência Artificial que capacita pessoas com diabetes a gerenciar sua saúde de forma inteligente e integrada.',
        descricaoCompleta: 'A GlicemIA é uma plataforma baseada em Inteligência Artificial que capacita pessoas com diabetes a gerenciar sua saúde de forma inteligente e integrada. Ela centraliza o controle glicêmico, cálculo de insulina, análise de refeições, exames laboratoriais e acompanhamento profissional em um painel único e intuitivo. Por meio de entrada de dados por voz e reconhecimento de imagens, a plataforma transforma registros diários em insights acionáveis. A GlicemIA conecta pacientes e profissionais de saúde em tempo real, oferecendo compartilhamento de dados, orientações personalizadas e análises preditivas para um cuidado mais informado, proativo e contínuo.', //[cite: 18]
        equipe: [
            { nome: 'Elto borges', avatar: '' }, //[cite: 18]
            { nome: 'Kássio de Sousa Dias', avatar: './images/ciclos/kassio.jpg' } //[cite: 18]
        ],
        linkExterno: 'https://glicemia-ai.vercel.app/login'
    }
];

export default function CiclosLandingPage() {
    const LINK_UNIFICADO = "https://docs.google.com/document/d/1J1SU-_pu-w60aGpjWJSx-IqWxIrb-KGY/edit?usp=sharing&ouid=112291994821950135913&rtpof=true&sd=true";

    // Estado do Modal
    const [projetoAberto, setProjetoAberto] = useState<any | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 font-sans relative text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="bg-[#1E284B] text-white py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#B83280] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <Image src="/images/mambee-logo-2.png" alt="Logo Mambee Fábrica e Escola de Software" width={220} height={0} className="mb-8" priority />
                    <span className="inline-block py-1 px-3 rounded-full bg-[#B83280]/20 text-[#fbcfe8] text-sm font-semibold mb-6 border border-[#B83280]/50">Inscrições Abertas</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                        Traga o seu projeto para a <span className="text-[#B83280]">Fábrica e Escola de Software Mambee</span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Estamos recebendo novas demandas! Se você tem uma ideia, um problema que precisa de solução tecnológica ou um projeto em andamento, cadastre-se no nosso novo ciclo.
                    </p>
                    <a
                        href="#cadastro-demandas"
                        className="inline-block bg-[#B83280] text-white hover:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#972969] transition-colors shadow-lg hover:shadow-[#B83280]/30"
                    >
                        Cadastrar Minha Demanda
                    </a>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 mt-16 space-y-24">

                {/* 2. CADASTRO DE DEMANDAS */}
                <section id="cadastro-demandas" className="scroll-mt-20">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-[#1E284B] text-3xl font-bold mb-4">Cadastro de Demandas</h2>
                            <div className="h-1 w-16 bg-[#B83280] mb-6"></div>
                            <p className="text-slate-600 mb-6 text-lg">
                                Confira nossos editais abertos e inscreva o seu projeto. Nossa equipe técnica avaliará a viabilidade de desenvolvimento para as seguintes áreas:
                            </p>
                            <ul className="space-y-3 text-slate-600 mb-8">
                                <li className="flex items-center gap-3"><span className="text-[#B83280] font-bold">✓</span> Desenvolvimento Web</li>
                                <li className="flex items-center gap-3"><span className="text-[#B83280] font-bold">✓</span> Aplicativos Mobile</li>
                                <li className="flex items-center gap-3"><span className="text-[#B83280] font-bold">✓</span> Consultoria em Software</li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://forms.gle/ySVxHmXECafPEc1g9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#1E284B] text-white hover:bg-[#B83280] hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center shadow-sm"
                                >
                                    Acessar Formulário
                                </a>
                                <a
                                    href={LINK_UNIFICADO}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-[#1E284B] text-[#1E284B] hover:bg-[#1E284B] hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center shadow-sm"
                                >
                                    Editais Abertos
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex items-center justify-center">
                            <img src="/images/ciclos/projetos.png" alt="Representação dos Projetos Mambee" className="w-full h-auto max-h-[400px] object-contain drop-shadow-xl rounded-xl hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </section>

                {/* 3. COMO FUNCIONA (PROCESSOS) */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-[#1E284B] text-3xl font-bold uppercase tracking-wide">Como Funciona</h2>
                        <div className="flex justify-center items-center mt-3 gap-1">
                            <div className="w-[1.5px] h-6 bg-[#1E284B]"></div>
                            <div className="w-[1.5px] h-6 bg-[#B83280]"></div>
                        </div>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Conheça as 10 fases do nosso processo, desde a inscrição da ideia até a entrega e encerramento do projeto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            "Inscrição da demanda", "Seleção da Demanda", "Contato com solicitante", "Inclusão em um ciclo de desenvolvimento", "Seleção de Equipe",
                            "Desenvolvimento Incremental", "Entregas", "Validação do solicitante da demanda", "Encerramento de Projeto", "Nova negociação direta com equipe"
                        ].map((fase, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative pt-10 hover:shadow-md transition-shadow">
                                <div className="absolute -top-4 left-6 bg-[#1E284B] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center border-4 border-slate-50">
                                    {idx + 1}
                                </div>
                                <h3 className="text-[#1E284B] font-bold text-sm leading-tight">{fase}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. CICLOS ANTERIORES */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-[#1E284B] text-3xl font-bold uppercase tracking-wide">Ciclos Anteriores</h2>
                        <div className="flex justify-center items-center mt-3 gap-1">
                            <div className="w-[1.5px] h-6 bg-[#1E284B]"></div>
                            <div className="w-[1.5px] h-6 bg-[#B83280]"></div>
                        </div>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Conheça algumas das soluções desenvolvidas pela nossa Fábrica Escola em edições passadas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Cards Dinâmicos */}
                        {PROJETOS_ANTERIORES.map((projeto) => (
                            <div key={projeto.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                                <div className="h-48 bg-slate-100 flex items-center justify-center relative border-b border-slate-200 overflow-hidden">
                                    <img src={projeto.logoCapa} alt={`Logo ${projeto.nome}`} className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-300" />

                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-xs font-bold text-[#B83280] shadow-sm">
                                        {projeto.ano}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-500 font-bold uppercase">
                                            {projeto.sigla}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-600">{projeto.cliente}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E284B] mb-2">{projeto.nome}</h3>
                                    <p className="text-sm text-slate-500 mb-6 line-clamp-3 flex-1">
                                        {projeto.descricaoCurta}
                                    </p>
                                    <button
                                        onClick={() => setProjetoAberto(projeto)}
                                        className="text-[#B83280] hover:text-[#972969] text-sm font-bold hover:underline text-left mt-auto transition-colors"
                                    >
                                        Ver detalhes do projeto →
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* CTA: Quer ser parceiro? */}
                        <div className="bg-[#1E284B] rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-center text-center p-8 h-full border border-[#1E284B]">
                            <h3 className="text-2xl font-bold text-white mb-4">Quer ser parceiro?</h3>
                            <p className="text-slate-300 text-sm mb-6">Toda ajuda é bem-vinda para manter nossos projetos rodando e fomentar o desenvolvimento tecnológico da nossa região.</p>
                            <a
                                href="https://forms.gle/ySVxHmXECafPEc1g9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#B83280] text-white hover:text-white px-6 py-3 rounded-full font-bold hover:bg-[#972969] transition-colors w-full"
                            >
                                Clique aqui
                            </a>
                        </div>
                    </div>
                </section>

                {/* 5. JÁ SÃO NOSSOS PARCEIROS */}
                <section className="pt-8 border-t border-slate-200">
                    <div className="text-center mb-10">
                        <h2 className="text-[#1E284B] text-2xl md:text-3xl font-bold">Já são nossos parceiros:</h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
                        <a href="https://www.instagram.com/ifpicos/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex flex-col items-center gap-2 group">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#B83280]/10 transition-colors overflow-hidden">
                                <img src="./images/ciclos/ifpi.png" alt="Logo IFPI" className="w-full h-full object-contain p-2" />
                            </div>
                            <span className="text-sm font-bold text-[#1E284B] group-hover:text-[#B83280] transition-colors">IFPI</span>
                        </a>

                        <a href="https://www.instagram.com/guaribas_valley/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex flex-col items-center gap-2 group">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#B83280]/10 transition-colors overflow-hidden">
                                <img src="./images/ciclos/guaribasValley.png" alt="Logo Guaribas Valley" className="w-full h-full object-contain p-2" />
                            </div>
                            <span className="text-sm font-bold text-[#1E284B] group-hover:text-[#B83280] transition-colors">Guaribas Valley</span>
                        </a>

                        <a href="https://www.instagram.com/ecossistemavaledomel/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex flex-col items-center gap-2 group">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#B83280]/10 transition-colors overflow-hidden">
                                <img src="./images/parceiros/valedomel.png" alt="Logo Vale do Mel" className="w-full h-full object-contain p-4" />
                            </div>
                            <span className="text-sm font-bold text-[#1E284B] group-hover:text-[#B83280] transition-colors">Vale do Mel</span>
                        </a>

                        <a href="https://www.instagram.com/sebraepi/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex flex-col items-center gap-2 group">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#B83280]/10 transition-colors overflow-hidden">
                                <img src="./images/ciclos/Sebrae.png" alt="Logo Sebrae" className="w-full h-full object-contain p-3" />
                            </div>
                            <span className="text-sm font-bold text-[#1E284B] group-hover:text-[#B83280] transition-colors">Sebrae</span>
                        </a>

                        <a href="https://www.instagram.com/virtextelecom/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity flex flex-col items-center gap-2 group">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#B83280]/10 transition-colors overflow-hidden">
                                <img src="./images/ciclos/Virtex.png" alt="Logo Virtex" className="w-full h-full object-contain p-3" />
                            </div>
                            <span className="text-sm font-bold text-[#1E284B] group-hover:text-[#B83280] transition-colors">Virtex</span>
                        </a>
                    </div>
                </section>
            </main>

            {/* --- MODAL INTERATIVO DOS PROJETOS --- */}
            {projetoAberto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E284B]/80 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <button
                                onClick={() => setProjetoAberto(null)}
                                className="flex items-center gap-2 text-[#B83280] font-bold text-sm hover:text-[#972969] transition-colors"
                            >
                                ← VOLTAR
                            </button>
                            <h2 className="text-2xl font-bold text-[#1E284B] tracking-wide uppercase">
                                {projetoAberto.nome}
                            </h2>
                            <div className="w-20"></div>
                        </div>

                        <div className="p-8 overflow-y-auto">
                            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-6 bg-[#B83280]"></div>
                                    <h3 className="text-xl font-bold text-[#1E284B] uppercase">Sobre o Projeto</h3>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                                    {projetoAberto.descricaoCompleta}
                                </p>

                                <hr className="border-slate-200 mb-8" />

                                <h3 className="text-sm font-bold text-[#B83280] uppercase tracking-wider mb-4">Equipe do Projeto</h3>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {projetoAberto.equipe.map((membro: any, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full pr-6 p-1.5 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-[#1E284B] text-white flex items-center justify-center font-bold text-sm overflow-hidden border border-slate-200">
                                                {membro.avatar ? (
                                                    <img src={membro.avatar} alt={membro.nome} className="w-full h-full object-cover" />
                                                ) : (
                                                    membro.nome.charAt(0).toUpperCase()
                                                )}
                                            </div>
                                            <span className="font-bold text-slate-700 text-sm">{membro.nome}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={projetoAberto.linkExterno}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#1E284B] text-white hover:text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-sm"
                                >
                                    Acessar Projeto <FaExternalLinkAlt size={12} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 6. FOOTER */}
            <footer className="bg-[#1E284B] text-slate-300 py-12 px-6 mt-20 border-t-4 border-[#B83280]">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <Image src="/images/mambee-logo-3.png" alt="Logo Mambee" width={160} height={0} className="mb-4 brightness-0 invert opacity-90" />
                        <p className="text-sm max-w-sm mb-2 leading-relaxed text-slate-400">Av Pedro Marques de Medeiros, s/n - Parque Industrial, Picos - PI, 64605-500</p>
                        <p className="text-sm max-w-sm leading-relaxed text-slate-400">IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start md:pt-4">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h4>
                        <a
                            href="mailto:mambee.fabrica@gmail.com"
                            className="flex items-center gap-3 mb-3 text-slate-300 hover:text-[#B83280] transition-colors group"
                        >
                            <span className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 group-hover:border-[#B83280] group-hover:text-[#B83280] transition-colors">
                                <MdOutlineEmail className="text-lg" />
                            </span>
                            <span className="text-sm text-slate-300 group-hover:text-[#B83280] transition-colors">
                                mambee@ifpi.edu.br
                            </span>
                        </a>
                        <a
                            href="https://instagram.com/mambeeifpi"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 text-slate-300 hover:text-[#B83280] transition-colors group"
                        >
                            <span className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 group-hover:border-[#B83280] group-hover:text-[#B83280] transition-colors">
                                <FaInstagram className="text-lg" />
                            </span>
                            <span className="text-sm text-slate-300 group-hover:text-[#B83280] transition-colors">
                                @mambeeifpi
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mt-12 pt-6 border-t border-slate-700/50 flex justify-center items-center text-xs text-slate-500">
                    <p>Copyright © Mambee {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}
