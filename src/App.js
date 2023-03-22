import React from 'react'
import './App.css'
import Login from './pages/Login'
import Login2 from './pages/Login2'
import Login3 from './pages/Login3'
import Profile from './pages/Profile'
import SetName from './pages/SetName'
import Layout from './shared/ui/Layout'

function App() {
	return (
		<div className='h-full'>
			{/* <Layout>
				<Login />
			</Layout> */}
			<Profile />
		</div>
	)
}

export default App
