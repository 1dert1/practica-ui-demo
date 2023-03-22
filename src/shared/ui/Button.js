import convertObjToString from '../utils/convertObjToString'

const Button = ({ text, onPress, styled = '', secondary = false }) => {
	return (
		<div
			className={`${styled} ${
				secondary ? 'bg-[#E7E7E7]' : 'bg-[#5875E8]'
			} p-[15px] rounded-[20px] text-center ${
				secondary ? 'text-[#767676]' : 'text-white'
			} text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium`}
		>
			{text}
		</div>
	)
}

export default Button
