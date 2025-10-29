import React from 'react'

const Layout = ({ children} : { children: React.ReactNode })  => {
  return (
	<div>
		<h1>Dashboard Navbar</h1>
		{children}
	</div>
  )
}

export default Layout