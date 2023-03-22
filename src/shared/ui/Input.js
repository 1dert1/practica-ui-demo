const Input = ({ placeholder = '' }) => {
	return (
		<input
			spellCheck='false'
			class='mt-[20px] w-full antialiased bg-[#E3E3E3] p-[15px] outline-none rounded-[20px] text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium placeholder:text-[#787878]'
			placeholder={placeholder}
		/>
	)
}

export default Input
