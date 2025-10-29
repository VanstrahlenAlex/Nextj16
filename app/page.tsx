import React from 'react'
import Hello from '../components/hello';
import Link from 'next/link';

const Home = () => {
	console.log("What type of a component am I?");
	
	return (
		<main>
			<div className='text-5xl underline'>Welcome to Next.js 16 !</div>
			<Hello />
			<Link href="/dashboard/users">Go to Users</Link>
		</main>
	)
}

export default Home