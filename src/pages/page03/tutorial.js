import styles from "./tutorial-styles.module.css";

const Tutorial = () => {
	return (
		<div className={styles.mainContainer}>
			<nav>
				<p>Nav here</p>
			</nav>
			<div className={styles.textContainer}>
				<div className={styles.headerContainer}>
					<h1>How to Create a "Good-Looking" Website with ReactJS</h1>
				</div>
                <div className={styles.imgContainer}>
                    <img src="https://reactjs.org/logo-og.png" alt="" />
                </div>
				<section>
					<h2>ksdjflksdjflkdsjflskdfj</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Soluta, omnis ab sunt quibusdam eveniet blanditiis
						saepe, dolorem suscipit assumenda alias est veniam
						officia nisi, dolorum quos. Nobis, vitae iure!
						Temporibus. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Soluta, omnis ab sunt quibusdam
						eveniet blanditiis saepe, dolorem suscipit assumenda
						alias est veniam officia nisi, dolorum quos. Nobis,
						vitae iure! Temporibus.
					</p>
				</section>
				<section>
					<h2>How to blah blah blah</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sapiente dolores natus adipisci aperiam cupiditate
						dolorem distinctio explicabo id officia atque deserunt
						reiciendis modi nesciunt quae amet nobis, fugiat
						assumenda! Nobis.
					</p>
				</section>
				<section>
					<h2>How to blah blah blah</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Autem omnis rerum excepturi, deserunt obcaecati
						expedita aperiam placeat recusandae, qui distinctio
						adipisci ea consequatur commodi nostrum debitis
						cupiditate officia incidunt consectetur!
					</p>
				</section>
			</div>
		</div>
	);
};

export default Tutorial;
