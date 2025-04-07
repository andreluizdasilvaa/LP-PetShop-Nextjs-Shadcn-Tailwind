import { WhatsappLogo } from "@phosphor-icons/react"
import { Clock } from "lucide-react"


export default function Card({item}) {
    return(
        <div className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
            <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>

            <div className='flex-1 flex items-start justify-between'>
                <div className="flex gap-3">
                    <span className='text-3xl'>{item.icon}</span>
                    <div>
                        <h3 className="font-bold text-xl my-1">
                        {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm select-none">
                        {item.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-5 w-5"/>
                    <span>{item.duration}</span> 
                </div>

                <a
                    href={`https:/wa.me/5599999999999?text=Óla vim pelo site e gostaria de mais informações sobre ${item.title}`}
                    className="flex items-center justify-center gap-2 hover:text-gray-600 duration-300"
                >
                    <WhatsappLogo className="w-5 h-5"/>
                    Entrar em contato
                </a>
            </div>
            </article>
        </div>
    )
}