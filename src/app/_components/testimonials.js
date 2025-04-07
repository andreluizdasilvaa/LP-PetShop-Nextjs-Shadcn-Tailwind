'use client';

import useEmblaCarrousel from 'embla-carousel-react'
import { Home, AlertTriangle, Scissors, Syringe, Stethoscope, Brush, Truck, Clock, ChevronLeft} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import tutor1 from '../../../public/tutor1.png'

import Card from '@/components/CardTestimonials';

const testimonials = [
    {
        content: "O Thor sempre teve medo de pet shops, mas aqui ele se sente em casa. O carinho com que tratam os animais faz toda a diferença. Ele sai calmo e com um cheiro maravilhoso!",
        author: "Carlos Almeida",
        role: "Tutor do Thor (Labrador)",
        image: tutor1,
    },
    {
      content: "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
      author: "Mariana Souza",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor1,
    },
    {
      content: "A equipe é extremamente atenciosa e dedicada. Minha gatinha Amora é muito arisca, mas aqui ela foi tratada com tanto cuidado que nem parece a mesma. Amei!",
      author: "Fernanda Lima",
      role: "Tutora da Amora (Gato Persa)",
      image: tutor1,
    }
];

export default function Services() {
    const [emblaRef, emblaApi] = useEmblaCarrousel({
        loop: true,
    })

    function scrollPrev() {
      emblaApi?.scrollPrev();
    }

    function scrollNext() {
      emblaApi?.scrollNext();
    }

    return(
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <div>
                    <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de nossos clientes</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">

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
                        {testimonials.map((item, index) => {
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