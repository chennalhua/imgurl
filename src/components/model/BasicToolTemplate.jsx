"use client"
import React, { useState } from 'react';
import Header from '@/src/components/layout/Header';
import Nav from '@/src/components/layout/Nav'
import Footer from '@/src/components/layout/Footer'
import ThemeModel from '@/src/components/model/ThemeModel';

const BasicToolTemplate = ({ theme, children, proName }) => {
    let [templateMenuState, setTemplateMenuState] = useState(true)
    return (
        <ThemeModel theme={theme}>
            <Header theme={theme} proName={proName} menuOpen={true}
                state={templateMenuState} setState={setTemplateMenuState} />
            {/* Main */}
            <div className={`template basic ${templateMenuState ? 'active' : 'close'}`}>
                <div className='basic-small-box'>
                    <Nav proName={proName} />
                </div>
                <div className='basic-big-box'>
                    <div className='full-box-scroll'>
                        <div className='m-3 min-h-screen'>
                            {children}
                        </div>
                        <Footer theme={theme} />
                    </div>
                </div>
            </div>
        </ThemeModel>
    )
}
export default BasicToolTemplate