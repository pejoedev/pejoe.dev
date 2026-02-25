import React from 'react'
import './Home.css'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Sidebar from '../../components/Sidebar/Sidebar'
import SpinningPFP from '../../components/SpinningPFP/SpinningPFP'

const Home: React.FC = () => {
    const handleEnvelopeClick = () => {
    };
    return (
        <>
            <div className="home">
                <section className="hero">
                    <ContentBlock>
                        <h1>🍁Welcome to Pejoe.dev</h1>
                        <p>
                            Welcome to my small website. This website is inspired by all these neocities sites.
                            This website is my blog, and my little digital garden.
                        </p>
                    </ContentBlock>
                </section>
                <section className="sidebar">
                    <Sidebar></Sidebar>
                    <ContentBlock>
                        <div style={{ margin: '20px auto', width: '140px' }}>
                            <SpinningPFP src={'images/1mb_cat.png'} ></SpinningPFP>
                            <p style={{ textAlign: 'center' }}>Click me!</p>
                        </div>
                    </ContentBlock>
                </section>


            </div>
            <div className="overlay">
                <div className="envelope">
                    <img src="/images/envelope-stamp-low.svg" onClick={handleEnvelopeClick} style={{ width: '4rem' }}></img>
                </div>
                <div className="message">
                    <span>Chromatic aberration, that delightful misalignment of light’s intentions, rarely behaves according to the polite geometry of lenses. What was once a dot of pure focus becomes a soft echo of spectral confusion, red and blue whispering secrets along the edges. In optical folklore, it is said that every misplaced photon carries an unfinished thought, yearning for a home among the well-corrected wavelengths.</span>
                    <span>Through each refractive experiment, the observer becomes the distortion. One cannot separate the studied error from the intimacy of perception itself. The curvature of glass becomes a metaphor for cognitive bias, bending reason through invisible prisms. And yet, even miscalibrated optics sometimes reveal a hidden truth: that clarity can be overrated when beauty resides in the blur.</span>
                    <span>Engineers and dreamers alike chase the zero-dispersion ideal, armed with coatings, formulas, and quiet despair. Some insist that every artifact can be mathematically tamed; others simply surrender, turning imperfection into aesthetic. It’s no coincidence that the most memorable photographs often glow with the faint chromatic sigh of imperfection—a small rebellion against sterile precision.</span>
                    <span>In simulation space, aberration becomes performance. Textures bloom at the edges of renderings; light bleeds into memory. The unreal feels more real when it fails slightly, when the algorithm falters by a pixel. Designers introduce intentional flaws, crafting nostalgia from error, as if our eyes have learned to trust mistakes more than mastery.</span>
                    <span>Ultimately, chromatic aberration tells a story of divided loyalties between perception and truth. Where one expects accuracy, one finds interpretation. And where clarity fades, imagination fills the gap. Perhaps that’s all distortion really is—a polite reminder that even light, for all its speed, still stumbles on the way to understanding.</span>
                </div>
            </div>
        </>
    )
}

export default Home