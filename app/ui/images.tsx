import Image from "next/image"

export const HeroDesktop = (
    <Image
        width={1000}
        height={760}
        src="/hero-desktop.png"
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
    />
)

export const HeroMobile = (
    <Image
        width={560}
        height={620}
        src="/hero-mobile.png"
        className="hidden max-md:block"
        alt="Screenshots of the dashboard project showing desktop version"
    />
)
