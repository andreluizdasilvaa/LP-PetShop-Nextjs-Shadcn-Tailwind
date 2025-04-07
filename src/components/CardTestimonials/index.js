import Image from "next/image";




export default function Card({item}) {
    return(
        <div className="flex-[0_0_100%] min-w-0 px-3">
            <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-24 h-24">
                        <Image 
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="object-cover rounded-full "
                        />
                    </div>

                    <p className="text-gray-200">
                        {item.content}
                    </p>

                    <div>
                        <p className="font-bold">
                            {item.author}
                        </p>

                        <p className="text-sm text-gray-400">
                            {item.role}
                        </p>
                    </div>
                    
                </div>
            </article>
        </div>
    )
}