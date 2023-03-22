const Layout = ({ children }) => {
	return (
		<div className='h-full bg-[#F3F2EF] [@media(pointer:coarse)]:px-[10px] px-[15%] py-[20px] flex flex-col justify-start items-start [@media(pointer:coarse)]:items-center'>
			<div className='text-[#5875E8] font-semibold text-[32px] leading-[38.4px] self-start'>
				Practica
			</div>
			<div className='flex-grow flex flex-col'>{children}</div>
		</div>
	)
}

export default Layout
