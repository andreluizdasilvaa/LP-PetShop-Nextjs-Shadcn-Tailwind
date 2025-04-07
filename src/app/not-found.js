import Image from "next/image"
import fotoHero from "../../public/foto-hero.webp"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Link href="/">
                <Image 
                    src={fotoHero}
                    alt="Foto do hero"
                    width={200}
                    height={200}
                />
            </Link>
            <h1 className="text-4xl font-bold">
                Not Found 404
            </h1>

            <p className="text-gray-500">
                Tem nada aqui, clique no doguinho para voltar para a página inicial.
            </p>
        </div>
    )
}
	