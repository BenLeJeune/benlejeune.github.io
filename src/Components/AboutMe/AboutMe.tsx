import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import BouncingLetters from "../BouncingLetter/BouncingLetters";
import VisibleTable from "../VisibleTable/VisibleTable";
import './AboutMe.css'

type AboutMe_Props = {}

export default function AboutMe(props: AboutMe_Props) {
    return <Container id="AboutMe">
        <Row>
            <div className="col-sm-8">
                <h1 className="handjet">About Me</h1>
                <p>
                    I'm a 3rd year Mathematics student at <b>Imperial College London</b>, with an interest in
                    mathematical physics, machine learning and data science.
                </p>
                <p>
                    I have experience working for HSBC as a software intern, where I identified over <b>$320K</b> of
                    annual saving opportunities.
                </p>

                <p>
                    I also have experience working as a freelance and contract illustrator, and as a tutor.
                </p>
            </div>
            <div className='col-sm-4'/>
        </Row>
        <br/> <br/> <br/>
        <Row>
            <div className='col-sm-4'/>
            <div className="col-sm-8">
                <h1 className="rocker">Academic Record</h1>

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
                <h1 className="baskerville">Research Projects</h1>
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
    </Container>
}