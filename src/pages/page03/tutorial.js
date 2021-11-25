import { Helmet } from "react-helmet";
import styles from "./tutorial-styles.module.css";

const Tutorial = () => {
	return (
		<div>
			<Helmet>
				<title>Weather App Tutorial</title>
				<body style="background-color: white; box-sizing: border-box; height: 100vh; margin: 0; padding: 0" />
			</Helmet>
			<div className={styles.mainContainer}>
				<div className={styles.textContainer}>
					<div className={styles.main}>
						<div className={styles.headerContainer}>
							<h1>
								Creating a Weather Application using <span className={styles.reactWord}>React</span> and <span className={styles.expressWord}>Express</span>
							</h1>
						</div>
						<div className={styles.imgContainer}>
							<img src="https://reactjs.org/logo-og.png" alt="" />
						</div>
					</div>
					<section>
						<h3>What we need to do</h3>
						<ul>
							<li>Create a React App</li>
							<li>Install the required dependencies for the React application</li>
							<li>Create an Express.js App</li>
						</ul>
					</section>
					<section>
						<h3>Creating our React App</h3>
						<p>Let's first get started by creating a React application for our project. In a directory of your choice, type "npx create-react-app weather-app" in your terminal. This will generate files/folder and install packages required to run your React app. </p>
						<p>** "weather-app" can be replaced with a name of your choice **</p>
						<p>Once everything has been successfully install, you will see a new directory named "weather-app/". Go into this directory by typing "cd weather-app/" in your terminal. Then type "npm start" in your terminal. </p>
						<p>A new window/tab will open up:</p>
						<img src="" alt="" />
						<p>This is the default React app template.</p>


					</section>
					<section>
						<h3>File and Code Cleanup</h3>
						<p>Now let's take a step back and look at the files generating this template. Open your project folder in an IDE of your choice. I will be using, and recommend highly, Visual Studio Code.</p>


						<p>Once you open your project folder you will be visited with a bunch of files and folders:</p>
						<img src="" alt="" />
						<p>What you are seeing is the boilerplate code for a React application. You can basically ignore most of it as you will be making most of your changes in the "src" folder.</p>
						<p>In fact, you can delete some of these files/folders as they are somewhat useless for this project:</p>
						<ul>
							<li>App.test.js</li>
							<li>logo.svg</li>
							<li>reportWebVitals.js</li>
							<li>setupTests.js</li>
						</ul>
						<p>In the "App.js" file remove all code inside the first "div" tag. You should be left with this:</p>
						<img src="" alt="" />
						<p>Now that we have cleaned up our project a little we can move onto actually talking about React and its usefullness to our Weather Application!</p>
					</section>

					<section>
						<h3>How React Works (kinda)</h3>
						<p>React makes designing user interfaces (UI) simple by allowing the developer to divide the interface into smaller "pieces". These "pieces" are called components.</p> 
						<p>A component is essentially just a bundle of code generating some visual with or without functionality. Examples of components could be a navbar, sections, or, as you will see, a single day in a week for something like a weather forecast. In most cases, something is made into a component when you think it will be used repeatedly in a page/application, however that does not always have to be the case.</p>

					</section>

				</div>
			</div>
		</div>
	);
};

export default Tutorial;
