import React, { useRef } from 'react'
import './Home.css'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Sidebar from '../../components/Sidebar/Sidebar'
import SpinningPFP from '../../components/SpinningPFP/SpinningPFP'
import { possibleLetters, homescreenLetter } from './LetterText'
import parse from "html-react-parser";

const Home: React.FC = () => {
    let assigned = Number(sessionStorage.getItem("pejoe.homescreen.letter")) || null;
    let todaysText: homescreenLetter;
    if (assigned) {
        assigned = assigned % possibleLetters.length;
        todaysText = possibleLetters[assigned];
    } else {
        assigned = Math.floor(Math.random() * possibleLetters.length);
        sessionStorage.setItem("pejoe.homescreen.letter", String(assigned));
        todaysText = possibleLetters[assigned];
    }

    const letterRef = useRef<HTMLDivElement>(null);
    const evelopeRef = useRef<HTMLImageElement>(null);
    const handleEnvelopeClick = () => {
        if (letterRef.current) {
            letterRef.current.style.display = "flex"
        }
        if (evelopeRef.current) {
            evelopeRef.current.style.display = "none"
        }
    };
    const handleCloseEnvelopeClick = () => {
        if (letterRef.current) {
            letterRef.current.style.display = "none"
        }
        if (evelopeRef.current) {
            evelopeRef.current.style.display = "inline"
        }
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
                    <img ref={evelopeRef} src="/images/envelope-stamp-low.svg" onClick={handleEnvelopeClick} style={{ width: '4rem' }}></img>
                </div>
                <div ref={letterRef} id="message-box" style={{ display: "none" }}>
                    <div className="message">
                        <div style={{ display: 'flex', justifyContent: 'right', width: 'calc(100% - 3rem)' }}>
                            <img className="hoverGrow" src="/images/close.svg" onClick={handleCloseEnvelopeClick} style={{ width: '4rem', marginTop: '-4rem', cursor: 'pointer' }}></img>
                        </div>
                        {!todaysText.ignoreSpanInsertion ? <span>{parse(todaysText.text)}</span> : parse(todaysText.text)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home