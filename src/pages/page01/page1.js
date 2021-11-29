import styles from './page1.module.css';

function Page1(){
    return(
    <div>  
      <h1>About React and Express</h1>
      
      <div className={styles.row}>
        <div className={styles.col-4-box}>
          <h3>React</h3>
          <p>React has been used by:<br>
          • Facebook<br>
          • Instagram<br>
          • Uber Eats<br>
          • Discord<br>
          • Dropbox<br>
          • Salesforce<br>
          • Reddit<br>
          ...and many more
          </p>

          <p>• Satisfaction rating from 2016–2020 is consistently > 85%, being top pick in 2016, 2017, 2019, and second pick in 2018 and 2020<br>
          • Usage has been highest-rated consistently and has been increasing rapidly from ~50% in 2016 to ~80% in 2020<br>
          • Awareness rating is a consistent 100% across all five years
          </p>
        </div>
        <div class="col-4">
          <h3>Popularity</h3>
        </div>
        <div class="col-4-box">
          <h3>Express</h3>
          <p>Express has been used by:<br>
          • Twitter<br>
          • Stack (StackExchange)<br>
          • Intuit<br>
          • PLAID<br>
          ...and many more
          </p>

          <p>Based on activity and star rankings for various GitHub repositories, Express has maintained a relatively high popularity throughout its lifespan.</p>

          <p>• Consistently ranked 4th–3rd from Jan 2012–May 2014, with it being not far behind the 3rd and 2nd-ranked back-ends<br>
          • Starting around 2016, Express has begun catching up to both of the top 2 back-ends, Meteor and Ruby on Rails<br>
          • Express even overtook Meteor by 2018!<br>
          • As of March 2021, Express is ranked 4th, not too far behind the 3rd and 2nd
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col-4-box}>
          <h3>React</h3>
          <p>• Popular (see above)<br>
          • Promotes reusable code via components<br>
          • Easy to learn<br>
          • Allows optional use of JSX
          </p>
        </div>
        <div className={styles.col-4}>
          <h3>Strengths</h3>
        </div>
        <div className={styles.col-4-box}>
          <h3>Express</h3>
          <p>• As a server-side framework based on Node.js, it makes Node.js app development much quicker<br>
          • Uses JavaScript, allowing easy consistency between front-end and back-end<br>
          • Easy to set up and customize<br>
          • Supported by a large community of developers
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col-4-box}>
          <p>• Use of JSX, which may be too complex for some developers<br>
          • Covers only the UI-layers of the app, nothing more<br>
          • Fast-paced development may make relearning often necessary, documentation difficult
        </p>
        </div>
        <div className={styles.col-4}>
          <h3>Weaknesses<h3>
        </div>
        <div className={styles.col-4-box}>
          <p>• Event-driven call-back nature, which can be difficult to understand<br>
          • Can be difficult to maintain code as a result<br>
          • Uses middlewares, which can cause several client issues
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;