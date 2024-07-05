interface WorkProps {
    details: {
        title: string;
        imagePath: string;
        description: string;
        dates: string;
    }[];
}

export default function Work({ details }: WorkProps) {
    return (
        <section className="border-4 border-main rounded-lg p-3">
            {details.map((detail, index) => (
                <div key={index}>
                    {/* Title and logo */}
                    <div className="flex flex-row justify-center mb-2 gap-3">
                        <h5>{detail.title}</h5>
                        <img src={detail.imagePath} alt={detail.title} />

                    </div>
                    {/* Description and dates */}
                    <p>{detail.dates}</p>
                    <p>{detail.description}</p>
                </div>
            ))}
        </section>
    );
}