import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr' 
import dogImage from '../../../public/bg-hero.png'
import catImage from '../../../public/cat-hero.png'
import Image from 'next/image'
 
export default function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">

            <div>
                <Image 
                    src={dogImage}
                    alt='Foto do doginho'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-0 px-4 relative'>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className='space-y-6'>
                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10">
                            Seu pet merece cuidado, carinho e atenção especial
                        </h1>

                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para o seu pet, com os melhores profissionais e os melhores produtos.
                        </p>

                            <a 
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2"
                            >
                                <WhatsappLogo className="w-5 h-5"/>
                                Contato via Whatsapp
                            </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                                 de desconto para sua primeira compra.
                            </p>
                        </div>

                        <div className='hidden lg:block'>
                            <Image 
                                src={catImage}
                                alt='Foto do doginho'
                                className='object-fill mt-4 w-32'
                                quality={100}
                            />
                        </div>

                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image 
                            src={dogImage}
                            alt='Foto do doginho'
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            quality={100}
                            priority={true}
                        />
                    </div>

                </article>
            </div>
        </section>
    )
}
