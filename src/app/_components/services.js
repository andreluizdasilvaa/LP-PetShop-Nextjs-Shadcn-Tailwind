'use client';

import useEmblaCarrousel from 'embla-carousel-react'
import { Home, AlertTriangle, Scissors, Syringe, Stethoscope, Brush, Truck} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "R$50",
      icon: <Scissors />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
      title: "Consulta Veterinária",
      description: "Atendimento clínico geral para cães e gatos, com avaliação completa da saúde do pet.",
      duration: "30min",
      price: "R$120",
      icon: <Stethoscope />,
      linkText: 'Olá, gostaria de agendar uma consulta veterinária para meu pet.'
    },
    {
      title: "Vacinação",
      description: "Aplicação de vacinas essenciais conforme o calendário vacinal do seu pet, com acompanhamento veterinário.",
      duration: "15min",
      price: "R$90",
      icon: <Syringe />,
      linkText: 'Oi, quero mais informações sobre vacinas disponíveis para meu pet.'
    },
    {
      title: "Tosa Higiênica",
      description: "Tosa leve nas áreas íntimas, patas e barriga, mantendo a higiene e conforto do animal.",
      duration: "40min",
      price: "R$40",
      icon: <Brush />,
      linkText: 'Olá, vi no site a tosa higiênica e gostaria de agendar para meu pet.'
    },
    {
      title: "Consulta de Emergência",
      description: "Atendimento veterinário emergencial para casos urgentes, disponível em horários estendidos.",
      duration: "Indefinido",
      price: "R$180",
      icon: <AlertTriangle />,
      linkText: 'Preciso de atendimento de emergência para meu pet, como funciona?'
    },
    {
      title: "Hotelzinho Pet",
      description: "Hospedagem com ambiente seguro e monitorado para seu pet, com alimentação e cuidados incluídos.",
      duration: "24h",
      price: "R$70/dia",
      icon: <Home />,
      linkText: 'Gostaria de saber mais sobre o hotelzinho para deixar meu pet.'
    },
    {
      title: "Transporte Pet",
      description: "Serviço de transporte seguro para levar e trazer seu pet com conforto e cuidado.",
      duration: "Variável",
      price: "Sob consulta",
      icon: <Truck />,
      linkText: 'Quero saber como funciona o transporte para levar meu pet até vocês.'
    }
  ];
  

export default function Services() {
    const [emblaRef, emblaApi] = useEmblaCarrousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <div>
                    <h2 className="text-4xl font-bold">Serviços</h2>
                </div>

                <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'> 
                            {services.map((item, index) => {
                                <div className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>

                                </div>
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}