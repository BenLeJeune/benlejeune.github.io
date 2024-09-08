import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import BouncingLetters from "../BouncingLetter/BouncingLetters";
import VisibleTable from "../VisibleTable/VisibleTable";
import './AboutMe.css'
import DescriptionList from "../DescriptionList/DescriptionList";
import {scroll_callback} from "../../helpers";

type AboutMe_Props = {}

export default function AboutMe(props: AboutMe_Props) {
    return <Container id="AboutMe">
        <Row>
            <div className="col-sm-8">
                <h1 className="handjet" id="AboutMe">About Me</h1>
                <p>
                    I'm a 3rd year Mathematics student at <b>Imperial College London</b>, with an interest in
                    mathematical physics, machine learning and data science.
                </p>
                <p>
                    I have experience working for HSBC as a software intern, where I identified over <b>$320K</b> of
                    annual saving opportunities.
                </p>

                <p>
                    I also have experience working as a freelance and contract illustrator. I have also volunteered in
                    local woodland to remove invasive flora, assisted with local events such as the Remembrance parade
                    and bonfire night festivities, and through HSBC helped renovate a children's activity centre.
                </p>

                <p>
                    You can <a target="_blank" rel="noopener noreferrer" href="assets/Ben Le Jeune CV Public.pdf">
                        view my concise CV as a PDF here,
                    </a> or look below.
                </p>

                <p className="linksRow">
                    <b>&gt;</b> <span onClick={scroll_callback("AboutMeAcademic")}>
                        Academic Record
                    </span> • <span onClick={scroll_callback("AboutMeResearch")}>
                        Research Projects
                    </span> • <span onClick={scroll_callback("AboutMeWork")}>
                        Work Experience
                    </span>
                </p>

                <p>
                    You can also find me on the following websites:
                </p>


                <p className="linksRow">
                    <b>&gt;</b> <a href="https://www.linkedin.com/in/ben-le-jeune" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a> • <a  href="https://medium.com/@benlejeune" target="_blank" rel="noopener noreferrer">
                        Medium
                    </a> • <a  href="https://github.com/BenLeJeune" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </div>
            <div className='col-sm-4'/>
        </Row>
        <br/> <br/> <br/>
        <Row>
            <div className='col-sm-4'/>
            <div className="col-sm-8">
                <h1 id="AboutMeAcademic" className="rocker">Academic Record</h1>

                <p>
                    Awarded <b>Dean's List</b> in Year 1 (top 10%).
                </p>


                <dl className="row">
                    <dt className="col-sm-3">Year 2 (82.96)</dt>
                    <dd className="col-sm-9">
                        <VisibleTable records={[
                            ['Principles of Programming', 99.00],
                            ['Group Research Project', 92.00],
                            ['Probability for Statistics', 87.60],
                            ['Statistical Modelling I', 85.88],
                            ['Analysis II', 81.14],
                            ['Multivariable Calculus & Differential Equations', 80.45],
                            ['Linear Algebra & Numerical Analysis', 77.25],
                            ['Lebesgue Measure and Integration', 70.43]
                        ]}/>
                    </dd>

                </dl>

                <dl className="row">
                    <dt className="col-sm-3">Year 1 (77.86)</dt>
                    <dd className="col-sm-9">

                        <VisibleTable records={[
                            ['Intro. to Computation', 88.6],
                            ['Analysis I', 85.02],
                            ['Linear Algebra & Groups', 78.36],
                            ['Probability & Statistics', 77.09],
                            ['Calculus and Applications', 77.08],
                            ['Research Project', 67.00],
                            ['Applied Mathematics', 65.00]
                        ]}/>
                    </dd>

                </dl>
            </div>
        </Row>
        <br/> <br/> <br/>
        <Row>
            <div className="col-sm-8">
                <h1 id="AboutMeResearch" className="baskerville">Research Projects</h1>
                <br/>
                <h3 className="baskerville">Year 2: Stochastic Resetting and its Applications</h3>
                <p>
                    This project was completed with Vasudev Joy, James Corcoran, Pip Moss, and Charalampos Zacharia, with
                    supervision from Dr Thibault Bertrand. It took the form of a research paper and a 25-minute presentation.
                </p>
                <p className="lead">
                    A dive into statistical mechanics and scientific simulations, with applications in biology.
                </p>
                <p>
                    <strong>Stochastic resetting</strong> is the process of randomly resetting a stochastic system. In
                    this paper, we recap key results for stochastic resetting as applied to diffusive particles.

                    We compare and contrast these with the results obtained for run-and-tumble particles. Key amongst
                    these results is the existence of a steady-state solution and a finite mean first passage time
                    to the origin.
                </p>
                <p>
                    We verify these results through simulations, and seek to numerically analyse
                    behaviours in complex environments, where analytic methods fall short. We show that long-time
                    decay behaviour changes when resetting is introduced to particles diffusing amongst a sea of
                    evenly distributed absorbing traps, and find a critical trap density beyond which the behaviour of
                    diffusive and run-and-tumble particles are significantly different.
                </p>
                <br/>
                <h3 className="baskerville">Year 1: Orbits under Attractive Forces</h3>
                <p>This project took the form of an A3 poster, and a presentation to a lecturer.</p>
                <p className="lead">Analytic solutions to the three-body problem.</p>
                <p>
                    In this poster, I establish known results about orbital stability in the two-body case, and derive
                    analytic solutions to the three-body problem under restrictions that, though strict, appear
                    within the solar system.
                </p>
            </div>
            <div className="col-sm-4"/>
        </Row>
        <br/> <br/> <br/>
        <h1 id="AboutMeWork" className="handjet text-center display-4">-=• Work Experience •=-</h1>
        <Row className="pt-5">
            <br/>
            <div className="col-sm-4"/>
            <div className="col-sm-8">
                <h3 className="handjet">Digital Innovation Intern • HSBC UK • June - August 2024</h3>
                <p className="lead">
                    Identified over $320K of savings opportunities, built dashboards and automated CI pipelines.
                </p>
                <p>
                    Worked on a cloud engineering team for 10 weeks. Wrote python scripts to analyse our cloud
                    real estate, built Jenkins pipelines to run these scripts automatically, and built a Looker
                    dashboard to display the data in a digestible format.•
                </p>
                <p>
                    Also wrote a script to automate VM rightsizing suggestions, a process that was previously
                    being performed manually, then integrating this into a pipeline and dashboard to easily
                    explore the data. I identified over $320K of annual savings opportunities, of which over $60K
                    were implemented before I finished the internship.
                </p>

                <p>
                    Had an opportunity to visit the Canary Wharf office to network with the Fraud Analytics
                    Data Science team, including a talk about machine learning by a professor from Birmingham university.
                </p>

                <DescriptionList title="Tools" pairs={[
                    ['Python', "Writing scripts to analyse HSBC's cloud estate."],
                    ['Jenkins', "Building automated, adaptable pipelines."],
                    ['Google Cloud Platform', 'Managing resources and using client libraries.'],
                    ['Looker Studio', 'Making dashboards to present cloud estate data.']
                ]}/>

                <DescriptionList title="Skills" pairs={[
                    ['Data Presentation', 'Presenting cloud estate data in a digestible format.'],
                    ['Teamwork', 'Working with a team based around the UK, in India and Hong Kong.']
                ]}/>
            </div>
        </Row>
        <Row className="pt-5">
            <div className="col-sm-8">
                <h3 className="handjet">Contract Illustrator • April 2022 - January 2023 • Windmill Slam Games</h3>
                <p>
                    After years of hobbyist digital art, was approached to illustrate for an indie game by
                    former lead software engineer of Wizards of the Coast.
                </p>
                <p>
                    Produced many illustrations involving several rounds of feedback, creative input, developing an
                    art style and anticipating client needs.
                </p>
                <p>
                    Throne of Bone is currently available on Steam. Artwork also featured in Steam Strategy Fest and
                    Seattle Indies Expo.
                </p>

                <DescriptionList title="Skills" pairs={[
                    ['Communication', 'Maintaining communication through UK-Seattle time difference.'],
                    ['Feedback', 'Responding to several rounds of feedback.'],
                    ['Anticipating needs', 'Developing a style from previous feedback and finished pieces.'],
                    ['Creativity & Proactivity', 'Filling gaps in artistic briefs with interest and depth.']
                ]}/>
            </div>
            <div className="col-sm-4/"/>

        </Row>
    </Container>
}