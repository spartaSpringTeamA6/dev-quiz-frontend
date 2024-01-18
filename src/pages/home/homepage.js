import React, { useContext, useEffect, useState } from 'react';

export default function Homepage() {
    return (<>
        <div className="Page" style={{ width: 1440, height: 1176, paddingTop: 80, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
            <div className="TopBar" style={{ width: 1440, height: 80, padding: 20, left: 0.33, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                <div className="Rectangle4137" style={{ width: 40, height: 40, background: 'rgba(0, 0, 0, 0.10)', borderRadius: 100 }} />
                <div className="Title" style={{ width: 118, color: 'black', fontSize: 28, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 36, wordWrap: 'break-word' }}>DevQuiz</div>
                <div className="Navigation" style={{ height: 24, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex' }}>
                    <div className="Tab" style={{ color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Quiz</div>
                    <div className="Tab" style={{ color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Rank</div>
                    <div className="Tab" style={{ color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Board</div>
                    <div className="Tab" style={{ color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Group</div>
                </div>
                <div className="Navigation" style={{ height: 24, background: 'white' }} />
                <div className="Button" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                    <div className="Primary" style={{ height: 48, padding: 12, background: 'black', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <div className="Title" style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>Login</div>
                    </div>
                </div>
            </div>
            <div className="Section" style={{ width: 1439, padding: 60, justifyContent: 'center', alignItems: 'center', gap: 60, display: 'inline-flex' }}>
                <div className="Container" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                    <div className="Title" style={{ width: 520, textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 48, wordWrap: 'break-word' }}>Welcome to DevQuiz</div>
                </div>
                <div className="Vector200" style={{ width: 1439, height: 0, left: 0, top: 168, position: 'absolute', border: '1px rgba(0, 0, 0, 0.10) solid' }}></div>
            </div>
            <div className="Section" style={{ width: 1220, padding: 60, justifyContent: 'center', alignItems: 'center', gap: 60, display: 'inline-flex' }}>
                <div className="Container" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                    <div className="Title" style={{ width: 520, textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 48, wordWrap: 'break-word' }}>Choose a Quiz Category</div>
                    <div className="List" style={{ alignSelf: 'stretch', height: 516, paddingTop: 20, paddingBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex' }}>
                        <div className="Row" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>Java</div>
                                </div>
                            </div>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>Computer Science</div>
                                </div>
                            </div>
                        </div>
                        <div className="Row" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>Database</div>
                                </div>
                            </div>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>Design Pattern</div>
                                </div>
                            </div>
                        </div>
                        <div className="Row" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>Spring java</div>
                                </div>
                            </div>
                            <div className="Article" style={{ flex: '1 1 0', height: 132, padding: 16, borderRadius: 6, border: '1px rgba(0, 0, 0, 0.10) solid', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                                <div className="ImageContainer" style={{ width: 100, height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Image" style={{ width: 100, height: 100, position: 'relative', background: 'rgba(216.75, 216.75, 216.75, 0.50)' }} />
                                </div>
                                <div className="Frame427318906" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word' }}>JPA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Vector200" style={{ width: 1220, height: 0, left: 0, top: 708, position: 'absolute', border: '1px rgba(0, 0, 0, 0.10) solid' }}></div>
            </div>
            <div className="Section" style={{ alignSelf: 'stretch', padding: 60, justifyContent: 'center', alignItems: 'center', gap: 60, display: 'inline-flex' }}>
                <div className="Container" style={{ width: 493, justifyContent: 'center', alignItems: 'center', gap: 60, display: 'flex' }}>
                    <div className="Title" style={{ width: 150, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>Terms of Service</div>
                    <div className="Title" style={{ width: 124, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>Privacy Policy</div>
                    <div className="Title" style={{ width: 99, alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>Contact Us</div>
                </div>
            </div>
        </div>
    </>);
}