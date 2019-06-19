import React from 'react'
import { Link } from '../server/next-routes';

const Home = () => (
	<Link href="/login">	
		<a>login</a>
	</Link>
)

Home.getInitialProps = async ({req, res}) => {
	console.log("home res")
	return {};
}

export default Home
