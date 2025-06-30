import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

export default function WinCountry({ country, culture, economy, geo }: T_Country_Single) {
    return (
        <section
            className="text-white border-1 border-white/10 w-[100rem] max-w-[90%] mx-auto"
        >
            <div
                className="grid grid-cols-3"
            >
                <div className="col-span-2">
                    <h2 className="text-8xl font-extrabold" >{country.name.common}</h2>
                    <h3 className="text-3xl font-semibold mt-2" >{country.name.official}</h3>
                    <p className="text-base leading-7 mt-6 text-justify" dangerouslySetInnerHTML={{ __html: country.description }} />
                </div>
                <div className="flex items-center justify-start flex-col p-3 space-y-8" >
                    <div className="mx-auto" >
                        <h4 className="text-xl text-center mb-1" >Coat of arms</h4>
                        <Image
                            alt={`Coat of arms - ${country.name.common}`}
                            src={country.coatOfArms}
                            loading="eager"
                            className="object-contain object-center"
                            priority
                            height={350}
                            width={350}
                        />
                    </div>
                    <div className="mx-auto w-full" >
                        <h4 className="text-xl text-center mb-1" >Anthem</h4>
                        <div className="bg-slate-400 rounded-md w-[90%] mx-auto ">
                            <AudioPlayer anthem={country.anthem} />
                        </div>
                    </div>
                    <div className="mx-auto" >
                        <h4 className="text-xl text-center mb-1" >Flag</h4>
                        <Image
                            alt={country.flag.alt}
                            src={country.flag.src}
                            loading="eager"
                            className="object-contain object-center mt-2"
                            priority
                            height={375}
                            width={400}
                        />
                    </div>
                </div>

            </div>

            <div>

            </div>


        </section>
    )
}