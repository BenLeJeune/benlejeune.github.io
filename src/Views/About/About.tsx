import React, {useEffect} from 'react';
import './about.css';
import useInView from "../../Hooks/useInView";

export default function About() {

    const { visible:line1Visible } = useInView("BodyLine1", true);
    const { visible:line2Visible } = useInView("BodyLine2", true);
    const { visible:line3Visible } = useInView("BodyLine3", true);

    const { visible:bodyVisible } = useInView("AboutBody", true);
    const { visible:skillsVisible } = useInView("AboutSkills", true);

    // useEffect(() => {
    //     const path = document.getElementById("BackgroundSvgPath");
    //     if (path) {
    //         const length = ( path as unknown as SVGPathElement ).getTotalLength();
    //         path.style.strokeDasharray = `${length || 0}`
    //     }
    // })

    return <React.Fragment>
    <div id="AboutContainer">
        <div id="AboutBody" className={bodyVisible?'visible':''}>
            <div id="AboutBodysvg">
                <BackgroundSVG/>
            </div>
            <p id="BodyLine1" className={line1Visible ? 'visible' : ''}>
                I'm a <span className="red">student</span> and aspiring <span className="purple">digital designer</span>.
            </p>
            <p id="BodyLine2" className={line2Visible ? 'visible' : ''}>
                I believe in using <span className="purple">digital experiences</span> to create a <span className="red">unique, immersive and expressive</span> identity.
                {/*I try to create <span className="red">immersive</span> and <span className="purple">unique</span> digital experiences.*/}
            </p>
            <p id="BodyLine3" className={line3Visible ? 'visible' : ''}>
                From <span className="red">websites</span> to <span className="purple">branding and logos</span>.
            </p>
        </div>
    </div>

        <div id="AboutSkills" className={ skillsVisible ? 'visible' : '' }>
            <div id="FrontEnd">
                <h3>Frontend</h3>
                <ul>
                    <li><span>Javascript & Typescript</span></li>
                    <li><span>React</span></li>
                    <li><span>React Native</span></li>
                    <li><span>CSS & SASS</span></li>
                </ul>
            </div>
            <div id="Design">
                <h3>Design</h3>
                <ul>
                    <li><span>Website Design</span></li>
                    <li><span>Logo Design</span></li>
                    <li><span>Brand Identity</span></li>
                </ul>
            </div>
        </div>
</React.Fragment>
}

export function BackgroundSVG() {

    return <svg width="597" height="596" viewBox="0 0 597 596" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="BackgroundSvgPath" d="M433.903 594.346H1.15381V466.528C57.6902 466.469 113.662 461.429 165.912 451.688C204.297 444.533 240.129 434.941 272.347 423.231C284.244 418.906 295.648 414.293 306.507 409.406C313.721 406.159 320.67 402.802 327.342 399.343C357.902 383.5 382.676 365.497 400.623 345.997C422.209 322.542 433.528 297.341 433.816 271.801C433.845 271.801 433.874 271.801 433.903 271.801C522.959 271.801 595.154 344.005 595.154 433.074C595.154 522.142 522.959 594.346 433.903 594.346ZM405.783 215.71H404.783V216.71C404.783 234.49 399.31 252.178 388.536 269.283C388.459 269.405 388.382 269.528 388.304 269.65L388.104 269.964C385.121 274.635 381.742 279.263 377.97 283.836C376.112 286.088 374.16 288.327 372.112 290.552C350.488 314.048 318.744 335.445 278.647 353.491C238.556 371.534 190.938 385.857 138.507 395.631C102.797 402.288 65.3376 406.746 27.1421 408.911C18.514 409.401 9.84836 409.773 1.15699 410.027V322.817C9.93553 321.833 18.6751 320.614 27.3635 319.163C56.2897 314.331 84.6489 306.92 111.989 297.01C132.064 289.733 151.44 281.162 169.966 271.386C198.726 256.209 225.437 238.126 249.529 217.469C250.582 216.566 251.631 215.657 252.674 214.744C262.716 205.956 272.241 196.758 281.22 187.186C308.254 158.367 330.342 126.163 346.71 91.581C359.894 63.727 369.211 34.6615 374.517 5.00777C375.982 4.65808 377.457 4.33242 378.94 4.03124C387.613 2.2706 396.589 1.34619 405.783 1.34619C479.904 1.34619 539.992 61.4417 539.992 135.573C539.992 175.099 522.912 210.633 495.728 235.198C493.488 234.18 491.23 233.199 488.953 232.256C462.585 221.332 434.324 215.71 405.783 215.71ZM92.8788 244.276C63.4791 254.933 32.6585 262.337 1.157 266.329L1.15699 54.4372C1.15699 25.1158 24.9234 1.34632 54.2405 1.34632H318.125C314.51 19.2103 309.133 36.8438 302.015 54.0551C300.137 58.5945 298.139 63.1045 296.02 67.5818C277.669 106.351 250.53 142.089 215.743 172.532C180.943 202.986 139.247 227.468 92.8788 244.276Z" stroke="#666666" strokeWidth="2"/>
    </svg>

}