const TextMain = ({ text, styled }) => {
	return (
		<div
			className={`${styled} text-[16px] leading-[19.2px] tracking-[-0.015em]`}
		>
			{text}
		</div>
	)
}

export default TextMain
