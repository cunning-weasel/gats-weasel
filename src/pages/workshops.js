import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Style.scss';
import Nav from "../components/Nav"




function workshops() {
    return (
        <>
            <Nav />

            <div className="d-flex flex-row flex-wrap justify-content-center">

                <div className="card  mb-3 bg-warning ">
                    <StaticImage className="img-workshops"
                        alt="workshps 1"
                        src="../images/Logos/mindchase_Logo komplett transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Presentation skills</h2>

                    <div className="card-body">
                        <p className="card-text">What if you are standing in a crowd o people and everyone is eagerly listening to your every word</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>


                <div className="card bg-warning" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-symbol-big.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Empowerment</h2>

                    <div className="card-body">
                        <p className="card-text">What if you are finally empowered to know what you want and you go to bed and know that you take the right decisions and actions to reach it.</p><a href="#" class="card-link">read more</a>
                    </div>
                </div>




                <div className="card bg-warning" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Motivation</h2>

                    <div className="card-body">
                        <p className="card-text">Wouldnt it be great to know exactly what drives you most and helps you to channel your strengths and achieve your goal easily?.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>



                <div className="card bg-warning" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Self-confidence</h2>
                    <div className="card-body">
                        <p className="card-text">Wouldn't it be great to be self-confident and to rely on your personal strengths, while knowing and improving your weaknesses? Wouldn't it be great to believe in yourself without worrying about others to much?</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>




                <div className="card bg-warning" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Time Management</h2>
                    <div className="card-body">
                        <p className="card-text">You never have enough time and every day is just to short to get things done? What if you learn how to structure your day, how to prioritize your tasks and still have enough time for your friends, family and hobbies?</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>



                <div className="card bg-warning " >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>Stress Management</h2>
                    <div className="card-body">
                        <p className="card-text">What if </p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>
            </div >



            <div>
                <p>you can see all of our shop add more details in our little Camp under this link </p>
                <a href="#" class="card-link">Digital campus</a>
            </div>


        </>
    )
}

export default workshops



