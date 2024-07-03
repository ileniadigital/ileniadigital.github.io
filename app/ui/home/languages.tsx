import Image from "next/image";
import Card from "./cards/card";

export default function Languages() {
    return (
        <section>
            <h4>Programming Languages</h4>
            <Card logo={"html"} name={"HTML"} />
        </section >
    );
}