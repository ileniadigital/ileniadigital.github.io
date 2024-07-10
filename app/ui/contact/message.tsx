interface MessageProps {
    message: string;
    email: boolean;
}

export default function Message({ message, email }: MessageProps) {
    let link = "";
    let text = "";

    // Render text based on type of link to use
    if (email) {
        link = "mailto:ileniamaietta.business@gmail.com";
        text = "Email me";
    } else {
        link = "https://beacons.ai/ilenia.digital";
        text = "Follow me";
    }

    return (
        <div className="bg-offwhite rounded-3xl h-52 w-52 flex flex-col gap-5 justify-center items-center">
            <h1 className="text-xl font-bold text-center">{message}</h1>
            <button className="btn"><a href={link}>{text}</a></button>
        </div>
    );
}