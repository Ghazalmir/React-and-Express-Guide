import styles from './page2.module.css';

function Page2() {
  return (
    <div className={styles.main}>  
      <h1 className={styles.h1Style}>Installing <span className={styles.reactWordHeader}>React</span> as a front-end</h1>
      <div className={styles.all}>
        <div className={styles.col-8}>
          <p className={styles.pStyle}>React can be added to a website in various ways, from adding it directly to an HTML page or through creating a more integrated app; this tutorial will handle the latter.<br>
          Creating a React app and running it can be done in three simple commands:</p>
          <div className={styles.reactPop}>
            <li><span style="font-size:16pt">1.</span> <span style="font-family:monospace">npx create-react-app my-app</span></li>
            <li><span style="font-size:16pt">2.</span> <span style="font-family:monospace">cd my-app</span></li>
            <li><span style="font-size:16pt">3.</span> <span style="font-family:monospace">npm start</span></li>
            <li>Once it is ready to deploy, run <span style="font-family:monospace">npm run build</span> to create an optimized build of the app in the build folder.</li>
          </div>
        </div>
        <div className={styles.col-4}>

        </div>
      </div>

      <h1>Installing <span className={styles.expressWordHeader}>Express</span> as a back-end</h1>
      <div className={styles.row}>
        <div className={styles.col-4}>

        </div>
        <div className={styles.col-8}>
          <div className={styles.expressWord}>
            <li><span style="font-size:16pt">1.</span> Create a working directory to hold the application. This can be done with a simple <span style="font-family:monospace">mkdir</span> and <span style="font-family:monospace">cd</span> operation.</li>
            <li><span style="font-size:16pt">2.</span> Use the command <span style="font-family:monospace">npm init</span> to create a .json package for your application. This command prompts you for several other parameters; you can hit RETURN to accept the defaults for all except for <span style="font-family:monospace">entry point: (index.js)</span>, where <span style="font-family:monospace">index.js</span> is whatever you want the file to be named.</li>
            <li><span style="font-size:16pt">3.</span> Install Express into your created directory with the command <span style="font-family:monospace">npm install express --save</span>. To install it only temporarily, simply replace <span style="font-family:monospace">--save</span> with <span style="font-family:monospace">--no-save</span>.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
