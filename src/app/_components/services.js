'use client';

import useEmblaCarrousel from 'embla-carousel-react'
import { Home, AlertTriangle, Scissors, Syringe, Stethoscope, Brush, Truck, Clock, ChevronLeft} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

import Card from '@/components/CardServices';
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

    /**
     * Avança para o próximo item no carrossel Embla.
     * O operador de encadeamento opcional (?.) é usado para garantir que o método `scrollNext/scrollPrev` 
     * seja chamado apenas se `emblaApi` estiver definido, evitando possíveis erros em tempo de execução.
     */

    function scrollPrev() {
      emblaApi?.scrollPrev();
    }

    function scrollNext() {
      emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">

                <div>
                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                </div>

                <div className="relative">

                    <button 
                      onClick={scrollNext} 
                      className='absolute -right-8 -translate-y-1/2 -translate-x-1/2 top-1/2 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 z-10 cursor-pointer'
                    >
                      <ChevronLeft 
                        className='w-6 h-6 text-gray-600'
                      />
                    </button>

                    <div className='overflow-hidden' ref={emblaRef}>
                      <div className='flex'> 
                        {services.map((item, index) => {
                            return(
                            <Card item={item} key={index}/>
                        )})}
                      </div>
                    </div>

                    <button 
                      onClick={scrollPrev} 
                      className='absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 z-10 cursor-pointer'
                    >
                      <ChevronLeft 
                        className='w-6 h-6 text-gray-600'
                      />
                    </button>

                </div>
            </div>
        </section>
    )
}