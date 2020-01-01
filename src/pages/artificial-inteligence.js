// ========Artificial Intelligence page ==================//
import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "../components/Styeles/artificial-inteligence.scss"
import Styles from "./../components/Styeles/atrificial.module.scss"
import Cards from "../components/cards/cards.js"
import DetailCards from "../components/detailsCards/detailsCards.js"
import git_icon from './../images/git.png'
import python_icon from './../images/python.png'
import statistics_icon from './../images/statistics.png'
import ai_icon from './../images/ai.ebc8e285.png'
import datascience_icon from './../images/datascience.png'
import keras_icon from './../images/keras.png'
import linux_icon from './../images/linux.png'
import docker_icon from './../images/docker.png'
import microservices_icon from './../images/microservices.png'
import container_icon from './../images/container.png'


const IndexPage = () => (
    <div>
        <div className="Rectangle-67 d-flex justify-content-center align-items-center">
            <div className="SliderData">
                <h1 className="Artificial-Intelligence">Artificial Intelligence</h1>
                <p className="paraDes">
                    A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
          <br /> GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
        </p>
            </div>
        </div>
        <div className="line2">
            <h1 className="program">Program Structure</h1>A four-quarter AI program in
            Data Science, Machine Learning, and Deep Learning.
    </div>
        <Grid container justifyContent={"center"}>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Cards
                    color="#192a56"
                    title="Quarter 4"
                    des="AI In Practice"
                    fontColor="white"
                />
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Cards
                    color="#525f80"
                    title="Quarter 3"
                    des="Deploying AI Solutions"
                    fontcolor="#ffffff"
                />
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Cards
                    color="#8b94aa"
                    title="Quarter 2"
                    des="Introduction to Data Science & Deep Learning"
                    fontcolor="#ffffff"
                />
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Cards
                    color="#ffffff"
                    title="Quarter 1"
                    des="All Foundation"
                    fontcolor="#192a56"
                />
            </Grid>
        </Grid>
        {/* ============ Detailed Program Structure=============== */}
        <div className="detailDiv">
            <div class="line">

            </div>
            <h2 className="detailed" style={{ textAlign: "center" }}>Detailed Program Structure</h2>
        </div>


        <Grid container justifyContent={"center"}>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line} >
                <span className={Styles.counter}>1A</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Version Control with Git"
                            cradsImg={git_icon}
                            cardsDes="You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github"
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} >1B</span>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={Styles.right_Side_box}>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Object Oriented and Functional Programming using Python"
                            cradsImg={python_icon}
                            cardsDes="In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time."
                        />
                    </Paper>
                </Grid>
            </Grid>


            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter}>1C</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Introduction to Linear Algebra and Statistics"
                            cradsImg={statistics_icon}
                            cardsDes=" In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow."
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(139, 148, 170)", borderColor: "rgb(139, 148, 170)", color: "white" }}>2A</span>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={Styles.right_Side_box}>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Introduction to Linear Algebra and Statistics"
                            cradsImg={statistics_icon}
                            cardsDes=" In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow."
                        />
                    </Paper>
                </Grid>
            </Grid>


            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(139, 148, 170)", borderColor: "rgb(139, 148, 170)", color: "white" }}>2B</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Data Science Essentials"
                            cradsImg={datascience_icon}
                            cardsDes="In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python."
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(139, 148, 170)", borderColor: "rgb(139, 148, 170)", color: "white" }}>2C</span>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={Styles.right_Side_box}>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="The Fundamentals of Deep Learning with Keras with TensorFlow Backend"
                            cradsImg={keras_icon}
                            cardsDes="efore implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice."
                        />
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(82, 95, 128)", borderColor: "rgb(82, 95, 128)", color: "white" }}>3A</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Introduction to Linux and Bash"
                            cradsImg={linux_icon}
                            cardsDes="Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started."
                        />
                    </Paper>
                </Grid>

            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(82, 95, 128)", borderColor: "rgb(82, 95, 128)", color: "white" }}>3B</span>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={Styles.right_Side_box}>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Docker Deep Dive"
                            cradsImg={docker_icon}
                            cardsDes="This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
                        />
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(82, 95, 128)", borderColor: "rgb(82, 95, 128)", color: "white" }}>3C</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Python Microservices Development"
                            cradsImg={microservices_icon}
                            cardsDes=" In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask."
                        />
                    </Paper>
                </Grid>

            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }} className={Styles.vertical_line}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(82, 95, 128)", borderColor: "rgb(82, 95, 128)", color: "white" }}>3D</span>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={Styles.right_Side_box}>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Build AI Microservices for ContainerDeployments"
                            cradsImg={container_icon}
                            cardsDes="  In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies."
                        />
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <span className={Styles.counter} style={{ backgroundColor: "rgb(25, 42, 86)", borderColor: "rgb(25, 42, 86)", color: "white" }}>4</span>
                <Grid xl={12} lg={12} sm={12} style={{ display: "flex", justifyContent: "center", paddingBottom: "80px", }}>
                    <Paper className={Styles.paper}>
                        <DetailCards
                            cardsTitle="Artificial Intelligence (AI) in Practice"
                            cradsImg={ai_icon}
                            cardsDes="This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design."
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            </Grid>
        </Grid>
        {/* ------------------------- end Program Structure ------------------------ */}


    </div>
)
export default IndexPage
