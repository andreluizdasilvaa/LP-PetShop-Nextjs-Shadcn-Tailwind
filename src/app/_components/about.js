import Image from "next/image"
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
        <div className="container mx-auto">

          <div className="grid grid=cols-1 lg:grid-cols-2 gap-12 items-center px-4">

          <div className="relative">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden"> 
                <Image 
                  src={about1Img}
                  alt="Foto do cachorro"
                  fillquality={100}
                  className="object-cover hover:scale-110 duration-300"
                  priority
                />
              </div>

              <div className="absolute w-40 h-40 right-4 -bottom-4 rounded-lg border-4 border-white overflow-hidden"> 
                <Image 
                  src={about2Img}
                  alt="Foto do cachorro"
                  fillquality={100}
                  className="object-cover hover:scale-110 duration-300"
                  priority
                />
              </div>

            </div>

            <div className="space-y-6">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              lorem324 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas
              nunc, vitae sollicitudin nisl nunc eget lorem. Donec euismod,
              nisl eget consectetur sagittis, nisl nunc egestas nunc, vitae
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2"> 
                <Check className="text-red-500"/>
                Aberto Desde 2006
              </li>
              
              <li className="flex items-center gap-2"> 
                <Check className="text-red-500"/>
                Equipe com mais de 10 anos de experiência
              </li>

              <li className="flex items-center gap-2"> 
                <Check className="text-red-500"/>
                Qualidade é nossa prioridade
              </li>
            </ul>



            <div className="flex gap-4 mt-6">
              <a 
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-6 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white"/>
                Contato
              </a>

              <a 
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-6 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black"/>
                Endereço da Loja
              </a>

            </div>

            </div>
          </div>

          

        </div>
    </section>
  )
}