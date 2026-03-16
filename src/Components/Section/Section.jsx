import React from 'react'
import './Section.css'
import SectionImg from './img/Rectangle (1).png'
const Section = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="section-container">
                        <div className="section-top">
                            <h1 className="section-top-h1">
                                Select project,
                            </h1>
                            <h2 className="section-top-h2">
                                check dependencies, checkout branch, view <br />
                                readme.txt, install tools, run build, run test,
                            </h2>
                            <h1 className="section-top-h1">
                                start coding.
                            </h1>
                        </div>
                        <div className="section-bottom">

                            <div className="section-left">
                                <h1 className="section-left-h1">
                                    Think CI/CD for dev environments
                                </h1>
                                <p className="section-left-info">
                                    We invented prebuilds so application code, configuration and <br />
                                    infrastructure can all be stored as machine-executable code <br />
                                    in your git repositories and applied to dev environments <br />
                                    automatically and continuously.
                                </p>
                                <div className="sectiob-buttons">
                                    <button className="section-left-btn">
                                        More on prebuilds
                                    </button>
                                    <button className="section-left-btn pink">
                                        Documentation
                                    </button>
                                </div>
                            </div>
                            <img src={SectionImg} alt="" className="section-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section