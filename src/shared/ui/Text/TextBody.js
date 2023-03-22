const TextBody = ({ text, styled }) => {
	return (
		<div
			className={`${styled} text-[14px] leading-[16.8px] tracking-[-0.013em]`}
		>
			{text}
		</div>
	)
}

export default TextBody
