import Image from 'next/image';
interface WorkProps {
    details: {
        title: string;
        place: string;
        imagePath: string;
        description: string;
        dates: string;
        button: boolean;
    }[];
}

export default function Work({ details }: WorkProps) {
    return (
        <section className="border-4 border-main rounded-lg p-3">
            {details.map((detail, index) => (
                <div key={index}>
                    {/* Title */}
                    <div className="flex flex-row justify-center mb-2 gap-3">
                        <h5 className="font-bold text-xl text-center">{detail.title}</h5>
                    </div>
                    {/* Logo and Employer */}
                    <div className="flex flex-row justify-center mb-2 gap-3">
                        <p className='font-semibold text-center'>{detail.place}</p>
                        <Image src={`/images/work/${detail.imagePath}`} alt={detail.title} width={25} height={25} />

                    </div>
                    {/* Description and dates */}
                    <div className="flex flex-col justify-center items-center mb-2 gap-3">
                        <p className='font-semibold text-center'>{detail.dates}</p>
                        <p className='text-lg text-center'>{detail.description}</p>
                        {detail.button && (
                            <button className='btn'>See my work</button>
                        )
                        }
                    </div>


                </div >
            ))
            }
        </section >
    );
}