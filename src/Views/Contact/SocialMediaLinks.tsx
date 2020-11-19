import React, {useState} from 'react';
import './SocialMediaLinks.css';
import {CSSTransition, SwitchTransition} from "react-transition-group";

type SocialMedia = {
    name: string,
    logoURL: string,
    link: string,
    description: string
}

const SocialMediaObj: { [id:string]: SocialMedia } = {
    "Twitter": {
        name: "Twitter",
        logoURL: "Twitter_Logo_Blue.svg",
        link: "https://twitter.com/ben_le_jeune_",
        description: "Follow me on Twitter for random thoughts, WIP posts and announcements."
    },
    "Medium": {
        name: "Medium",
        logoURL: "Medium-Symbol-Black-RGB.svg",
        link: "https://medium.com/@ben_le_jeune_",
        description: "Sometimes I write about what I do and the things I learn on Medium."
    },
    "Instagram": {
        name: "Instagram",
        logoURL: "Instagram-Glyph-Logo.svg",
        link: "https://www.instagram.com/ben_le_jeune_/",
        description: "Follow me on Instagram for WIP posts, finished project galleries and announcements."
    },
    "Behance": {
        name: "Behance",
        logoURL: "Behance-Logo.svg",
        link: "https://www.behance.net/ben_le_jeune_",
        description: "Check out my Behance for a portfolio of polished final work."
    }
}

export default function SocialMediaLinks() {

    const [ activeMedia, setActiveMedia ] = useState<string>("");

    const getSocialButtons = () => Object.keys(SocialMediaObj).map(
        key => <div onMouseEnter={() => setActiveMedia( key )}>
            <SocialButton socialMedia={ SocialMediaObj[key] } />
        </div>
    )

    return <div id="SocialMediaLinksContainer">
        <div id="SocialMediaLinksInnerContainer">
            {
                getSocialButtons()
            }
        </div>
        <SwitchTransition>
            <CSSTransition
                key={ activeMedia }
                timeout={500}
                classNames="socialMediaDescription"
            >
                <div id="Explanation">{
                    SocialMediaObj[activeMedia]?.description || "(Hover an icon to read more)"
                }</div>
            </CSSTransition>
        </SwitchTransition>
    </div>
}

type SocialButtonProps = {
    socialMedia: SocialMedia
}

function SocialButton({ socialMedia }: SocialButtonProps) {

    return <a href={ socialMedia.link } className="SocialButton">
        <img alt={`${socialMedia.name} icon`} src={`/assets/platforms/${ socialMedia.logoURL }`}/>
    </a>

}