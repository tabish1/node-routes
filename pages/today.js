import React from 'react'
import Link from 'next/link'

const Today = () => (
	<Link href="/">	
		<a>home</a>
	</Link>
)

Today.getInitialProps = async ({req, res}) => {
	console.log("today getinitprops")
	return {};
}

export default Today
