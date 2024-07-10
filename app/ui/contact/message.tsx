interface MessageProps {
    message: string;
    email: boolean;

}
export default function Message({ message, email }: MessageProps) {
    return (
        <div className="bg-offwhite rounded-3xl h-52 w-52 flex flex-col gap-5 justify-center items-center">
            <h1 className="text-xl font-bold text-center">{message}</h1>
            {/* Email me button */}
            {email ? (
                <button className="btn"><a href="mailto:ileniamaietta.business@gmail.com">Email me</a></button>
            )
                // Follow me button
                : (
                    <button className="btn"><a href="https://beacons.ai/ilenia.digital">Follow me</a></button>
                )}

        </div>
    )
}