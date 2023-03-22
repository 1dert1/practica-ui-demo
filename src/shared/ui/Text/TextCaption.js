const TextCaption = ({ text, styled }) => {
	return (
		<div
			className={`${styled} text-[13px] leading-[15.51px] tracking-[-0.5px]`}
		>
			{text}
		</div>
	)
}

export default TextCaption
