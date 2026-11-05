import React from 'react';
import Papa from 'papaparse';

// Substitua pelo ID real da sua planilha
const SHEET_ID = '19JUqDvqGrMLXRRZS2q9Uo3TaMSPftMTlyF415kTKWlU';
const URL_PROJETOS = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Projeto`;
const URL_PATROCINIOS = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Patrocinio`;

// Função auxiliar turbinada para buscar, converter e AVISAR de erros
async function fetchSheetData(url: string) {
    try {
        console.log("Buscando dados na URL:", url);

        // Adicionamos um User-Agent falso porque às vezes o Google bloqueia o Next.js
        const res = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });

        if (!res.ok) {
            console.error(`❌ Erro no Google Sheets! Status: ${res.status} - ${res.statusText}`);
            return [];
        }

        const text = await res.text();

        // Se o Google retornar uma página HTML (de login) em vez do CSV, a planilha está privada
        if (text.trim().startsWith('<!DOCTYPE html>')) {
            console.error("❌ Erro: O Google retornou uma página de Login. A planilha está PRIVADA!");
            return [];
        }

        const { data, errors } = Papa.parse(text, { header: true, skipEmptyLines: true });

        if (errors.length > 0) {
            console.error("⚠️ Aviso no CSV:", errors[0].message);
        }

        console.log(`✅ Sucesso! Encontrados ${data.length} registros.`);
        return data;
    } catch (error) {
        console.error("❌ Erro fatal ao buscar dados:", error);
        return [];
    }
}

// Função para formatar moeda
const formatarMoeda = (valor: string | number) => {
    const numero = typeof valor === 'string' ? parseFloat(valor.replace(',', '.')) : valor;
    if (isNaN(numero)) return "R$ 0,00";
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
};

// Função para formatar a data (ex: 2025-11-10 para Novembro de 2025)
const formatarData = (dataString: string) => {
    if (!dataString) return "";

    try {
        let data;

        // Verifica se a data veio no formato brasileiro (com barras)
        if (dataString.includes('/')) {
            // Divide "DD/MM/YYYY" em partes e pega apenas a data (ignorando horas se houver)
            const partes = dataString.split(' ')[0].split('/');
            // Remonta no padrão americano: YYYY-MM-DD (e adiciona meio-dia para evitar fuso horário)
            data = new Date(`${partes[2]}-${partes[1]}-${partes[0]}T12:00:00`);
        } else {
            // Se já estiver no padrão americano
            data = new Date(dataString + 'T12:00:00');
        }

        // Se mesmo assim a conversão falhar, exibe o texto original para não quebrar a tela
        if (isNaN(data.getTime())) return dataString;

        const mes = data.toLocaleString('pt-BR', { month: 'long' });
        const ano = data.getFullYear();

        return `${mes.charAt(0).toUpperCase() + mes.slice(1)} de ${ano}`;
    } catch {
        return dataString;
    }
};

export default async function PatrocinadoresPage() {
    const projetosRAW = await fetchSheetData(URL_PROJETOS);
    const patrociniosRAW = await fetchSheetData(URL_PATROCINIOS);

    // Agrupando patrocínios dentro de cada projeto correspondente
    const projetosComPatrocinios = projetosRAW.map((projeto: any) => {
        const doacoes = patrociniosRAW.filter((p: any) => p.ID_PROJETO === projeto.ID_PROJETO);
        const valorTotal = doacoes.reduce((acc: number, curr: any) => acc + parseFloat(curr.VALOR || '0'), 0);

        return {
            ...projeto,
            doacoes,
            valorArrecadado: valorTotal
        };
    });

    return (
        <main className="min-h-screen bg-white font-sans text-slate-800 pb-20">

            {/* SEÇÃO 1: NOSSOS PATROCINADORES */}
            <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                <div className="text-center mb-12">
                    <p className="text-[#B83280] font-medium text-sm tracking-wide mb-2">Reconhecimentos</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1E284B] mb-4">NOSSOS PATROCINADORES</h1>
                    <div className="flex justify-center gap-1 mb-6">
                        {/* Reduzimos a largura para 2px */}
                        <div className="w-[1.5px] h-6 bg-[#1E284B]"></div>
                        <div className="w-[1.5px] h-6 bg-[#B83280]"></div>
                    </div>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A Fábrica Escola de Software Mambee agradece a todos os parceiros e doadores que
                        contribuem para a melhoria do nosso ambiente de desenvolvimento e infraestrutura.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projetosComPatrocinios.map((proj: any, idx: number) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#B83280] flex items-center justify-center mb-6 text-[#B83280]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="font-bold text-[#B83280] text-lg mb-3">{proj.PROJETO}</h3>
                            <p className="text-sm text-slate-500 mb-6">{proj.DESCRICAO}</p>
                            <a href={`#${proj.ID_PROJETO}`} className="text-[#B83280] text-sm font-medium hover:underline flex items-center justify-center gap-1">
                                Ver na prestação de contas
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </a>
                        </div>
                    ))}

                    {/* Card CTA: Quer nos apoiar? */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center flex flex-col justify-center items-center">
                        <h3 className="font-bold text-[#1E284B] text-lg mb-3">Quer nos apoiar?</h3>
                        <p className="text-sm text-slate-500 mb-6">Toda ajuda é bem-vinda para manter nossos projetos rodando.</p>
                        <a href="mailto:mambee@ifpi.edu.br" className="bg-[#B83280] hover:bg-[#972969] text-white hover:text-white px-6 py-2 rounded-full font-medium transition-colors text-sm">
                            Entrar em contato
                        </a>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: PRESTAÇÃO DE CONTAS (TIMELINE) */}
            <section id="prestacao-contas" className="max-w-5xl mx-auto px-6 mt-8">
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">

                    <div className="text-center mb-16">
                        <p className="text-[#B83280] font-medium text-sm tracking-wide mb-2">Transparência</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1E284B] mb-4">PRESTAÇÃO DE CONTAS</h2>
                        <div className="flex justify-center gap-1">
                            <div className="w-[1.5px] h-6 bg-[#1E284B]"></div>
                            <div className="w-[1.5px] h-6 bg-[#B83280]"></div>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-10 space-y-16 pb-8">
                        {projetosComPatrocinios.map((proj: any, idx: number) => (
                            <div key={idx} id={proj.ID_PROJETO} className="relative pl-8 md:pl-12 scroll-mt-24">
                                {/* Indicador da Timeline (Bolinha) */}
                                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white border-4 border-[#B83280] rounded-full"></div>

                                {/* Data e Título do Projeto */}
                                <div className="inline-block border border-[#B83280] text-[#B83280] text-xs font-medium px-4 py-1 rounded-full mb-4">
                                    {formatarData(proj.DATA_INICIO)}
                                </div>
                                <h3 className="text-xl font-bold text-[#1E284B] mb-2">{proj.PROJETO}</h3>
                                <p className="text-slate-600 text-sm mb-6 max-w-2xl">{proj.DESCRICAO}</p>

                                {/* Valores e Status */}
                                <div className="flex gap-12 mb-6">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Valor Total</p>
                                        <p className="font-bold text-slate-700">{formatarMoeda(proj.valorArrecadado)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                        <p className="font-bold text-emerald-600">{proj.STATUS}</p>
                                    </div>
                                </div>

                                {/* Box de Contribuições Específicas */}
                                {proj.doacoes.length > 0 && (
                                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm max-w-2xl">
                                        <p className="text-xs font-bold text-[#1E284B] uppercase tracking-wider mb-4">Contribuições Específicas</p>
                                        <div className="space-y-3">
                                            {proj.doacoes.map((doacao: any, dIdx: number) => (
                                                <div key={dIdx} className="flex justify-between items-center border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B83280]"></div>
                                                        <span className="text-sm font-medium text-slate-700">{doacao.PATROCINADOR}</span>
                                                    </div>
                                                    <span className="text-sm font-bold bg-slate-50 px-3 py-1 rounded-md text-slate-600">
                                                        {formatarMoeda(doacao.VALOR)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}