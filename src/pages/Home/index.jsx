import styles from './style.module.scss'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className={styles.root}>
			<div className={'title'}>MyReactTemplate</div>
			<div className={'tip'}>
				範例
				<Link to={'/dash/example'}>
					{' <'}點擊前往{'>'}
				</Link>
			</div>
		</div>
	)
}

export default Home
