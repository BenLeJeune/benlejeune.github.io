import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import BouncingLetters from "../BouncingLetter/BouncingLetters";

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
                        <dl className="row">
                            <dt className="col-10">Principles of Programming</dt>
                            <dd className="col-2">99.00</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Group Research Project</dt>
                            <dd className="col-2">92.00</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Probability for Statistics</dt>
                            <dd className="col-2">87.60</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Statistical Modelling I</dt>
                            <dd className="col-2">85.88</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Analysis II</dt>
                            <dd className="col-2">81.14</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Multivariable Calculus & Differential Equations</dt>
                            <dd className="col-2">80.45</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Linear Algebra & Numerical Analysis</dt>
                            <dd className="col-2">77.25</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Lebesgue Measure and Integration</dt>
                            <dd className="col-2">70.43</dd>
                        </dl>
                    </dd>

                </dl>

                <dl className="row">
                    <dt className="col-sm-3">Year 1 (77.86)</dt>
                    <dd className="col-sm-9">
                        <dl className="row">
                            <dt className="col-10">Intro. to Computation</dt>
                            <dd className="col-2">88.60</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Analysis I</dt>
                            <dd className="col-2">85.02</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Linear Algebra and Groups</dt>
                            <dd className="col-2">78.36</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Probability and Statistics</dt>
                            <dd className="col-2">77.09</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Calculus and Applications</dt>
                            <dd className="col-2">77.08</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Research Project</dt>
                            <dd className="col-2">67.00</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-10">Applied Mathematics</dt>
                            <dd className="col-2">65.00</dd>
                        </dl>
                    </dd>

                </dl>
            </div>
        </Row>
    </Container>
}