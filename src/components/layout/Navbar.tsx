"use client"
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="w-full flex justify-center bg-fundoClaro">
            <div className="flex items-center justify-between w-full max-w-7xl p-4">

                {/* 1. Logo */}
                <div className="">
                    <Image
                        src="/images/mambee-logo-2.png"
                        width={130}
                        height={0}
                        alt="Logo da Mambee"
                    />
                </div>

                {/* 2. Área de Ações (Botões agrupados) */}
                <div className="flex items-center space-x-5 text-xl font-bold">

                    {/* Botão Novo para a página de ciclos */}
                    <Link href="/ciclos">
                        <PrimaryButton>Ciclos Mambee</PrimaryButton>
                    </Link>

                    {/* Botão Antigo */}
                    <a href="#Contact">
                        <PrimaryButton>Contate-nos</PrimaryButton>
                    </a>

                </div>

            </div>
        </div>
    )
}