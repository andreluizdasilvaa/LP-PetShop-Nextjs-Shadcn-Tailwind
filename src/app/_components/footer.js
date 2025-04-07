import Image from 'next/image'

import golden from '../../../public/golden.png' 
import royal from '../../../public/royal.png' 
import primier from '../../../public/primier.png' 
import whiskas from '../../../public/whiskas.png' 
import natural from '../../../public/natural.png' 
import { WhatsappLogo, FacebookLogo, YoutubeLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal},
    { name: "Golden", logo: golden }, 
    { name: "Primier", logo: primier }, 
    { name: "Formula Natural", logo: natural }, 
    { name: "Whiskas", logo: whiskas}, 
    { name: "Golden", logo: golden}, 
]

export default function Footer() {
    return(
        <section className='bg-[#E84C3D] py-16 text-white'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>
                        Marcas que trabalhamos
                    </h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image 
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    style={{
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>
                                Pet shop Generico
                            </h3>

                            <p className='mb-4'>
                                Cuida do seu melhor amigo com amor e dedicação.
                            </p>
                            <a
                                href="https:/wa.me/5599999999999?text=Óla vim pelo site e gostaria de mais informações"
                                className='flex items-center justify-center gap-2 w-fit bg-green-500 px-4 py-2 rounded-md'
                            >
                                <WhatsappLogo 
                                    className='w-4 h-4'
                                />
                                Contato via Whatssap
                            </a>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>
                                Pet shop Generico
                            </h3>

                            <p>Email: teste@teste.com</p>
                            <p>Email: (xx) xxxx-xxxx</p>
                            <p>Rua x, centro, Gotham City | SP</p>
                        </div>

                        <div>   
                            <h3 className='text-2xl font-semibold mb-2'>
                                Pet shop Generico
                            </h3>
                            <div className='flex gap-4'>
                                <a
                                    href='#'
                                    target='_blank'
                                >
                                    <FacebookLogo className='w-8 h-8' />
                                </a>

                                <a
                                    href='#'
                                    target='_blank'
                                >
                                    <YoutubeLogo className='w-8 h-8'/>
                                </a>

                                <a
                                    href='#'
                                    target='_blank'
                                >
                                    <InstagramLogo className='w-8 h-8'/>
                                </a>
                            </div>
                        </div>

                </footer>
            </div>
        </section>
    )
}