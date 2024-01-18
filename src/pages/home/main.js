import React from "react";
import "./style.css";

export default function Main() {
    return (
        <>
            <div className="page">
                <div className="top-bar">
                    <div className="rectangle" />
                    <button className="btn btn-primary title">DevQuiz</button>
                    <div className="navbar" >
                        <button className="tab">Quiz</button>
                        <button className="tab">Rank</button>
                        <button className="tab">Board</button>
                        <button className="tab">Group</button>
                    </div>
                    <div className="navigation" />
                        <button className="text-wrapper"class="list-group-item list-group-item-primary">Login</button>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="div">Welcome to DevQuiz</div>
                    </div>
                    <img className="vector" alt="Vector" src="vector-200.svg" />
                </div>
                <div className="section-2">
                    <div className="container">
                        <div className="div">Choose a Quiz Category</div>
                        <div className="list">
                            <div className="row">
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">Java</div>
                                    </div>
                                </div>
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">Database</div>
                                    </div>
                                </div>
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">Design Pattern</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">Spring java</div>
                                    </div>
                                </div>
                                <div className="article">
                                    <div className="image-container">
                                        <div className="image" />
                                    </div>
                                    <div className="frame">
                                        <div className="title-2">JPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="img" alt="Vector" src="image.svg" />
                </div>
                <div className="container-wrapper">
                    <div className="container-2">
                        <div className="title-3">Terms of Service</div>
                        <div className="title-4">Privacy Policy</div>
                        <div className="title-5">Contact Us</div>
                    </div>
                </div>
            </div>
        </>
    );
}