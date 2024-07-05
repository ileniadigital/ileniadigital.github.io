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
        <section>
            {details.map((detail, index) => (
                <div key={index}>
                    <h5>{detail.title}</h5>
                    <img src={detail.imagePath} alt={detail.title} />
                    <p>{detail.description}</p>
                    <p>{detail.dates}</p>
                </div>
            ))}
        </section>
    );
}