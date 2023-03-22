import Button from '../shared/ui/Button'
import Input from '../shared/ui/Input'
import Layout from '../shared/ui/Layout'

const SetName = () => {
	return (
		<div className='flex-grow flex flex-col mt-[36px] [@media(pointer:coarse)]:justify-center [@media(pointer:coarse)]:text-center'>
			<div className='text-[#2C2C2C] text-[38px] leading-[45.6px] font-medium break-words small:text-[32px]'>
				Придумайте имя
			</div>
			<div className='mt-[10px] text-[#8F8F8F] text-[22px] leading-[26.4px] tracking-[-0.027em] break-words'>
				Придумайте себе имя, оно может быть ненастоящим
			</div>
			<Input placeholder='Введите имя' />
			<Button text='Продолжить' styled='mt-[10px]' />
		</div>
	)
}

export default SetName
