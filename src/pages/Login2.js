import Button from '../shared/ui/Button'
import CloseIcon from '../shared/ui/Icons/CloseIcon'
import Input from '../shared/ui/Input'

const Login2 = () => {
	return (
		<div className='h-full flex flex-col justify-center [@media(pointer:coarse)]:items-center [@media(pointer:coarse)]:text-center'>
			<div className='text-[#2C2C2C] text-[38px] leading-[45.6px] font-medium break-words small:text-[32px]'>
				Соцсеть для профессионалов
			</div>
			<div className='mt-[10px] text-[#8F8F8F] text-[22px] leading-[26.4px] tracking-[-0.027em] break-words'>
				Practica объединяет людей и компании
			</div>
			<div className='mt-[50px] flex flex-row justify-start [@media(pointer:coarse)]:justify-center items-center gap-[10px] flex-wrap'>
				<div className='py-[15px] px-[30px] bg-[#5875E8] text-white rounded-[20px]'>
					Создать аккаунт
				</div>
				<div className='py-[15px] px-[30px] bg-white text-[#5875E8] rounded-[20px]'>
					Войти
				</div>
			</div>
			<div className='absolute m-auto left-0 right-0 top-0 bottom-0 h-full backdrop-brightness-50 flex justify-center items-center'>
				<div className='rounded-[20px] bg-white grid grid-cols-4'>
					<div className='bg-[#5875E8] rounded-l-[20px]'></div>
					<div className='col-span-3 p-[20px] flex flex-col justify-start items-start'>
						<div className='w-full flex flex-row justify-between items-center'>
							<div className='font-medium text-[22px] leading-[26.4px] tracking-[-0.027em]'>
								Подвердите почту
							</div>
							<div className='p-[8px] bg-[#E7E7E7] rounded-[50px]'>
								<CloseIcon />
							</div>
						</div>
						<div className='mt-[54px] text-[16px] leading-[19.2px] tracking-[-0.015em] text-[#787878] font-medium'>
							Введите код, который был отправлен
						</div>
						<div className='text-[16px] leading-[19.2px] tracking-[-0.015em] text-[#787878] font-medium  whitespace-pre flex'>
							{`на почту`}
							<div className='text-[#5875E8]'>{` nikolai_afanasiev@yahoo.com.`}</div>
						</div>
						<Input placeholder='Код' />
						<Button text='Продолжить' styled='mt-[20px]' />
						<Button text='Назад' styled='mt-[10px]' secondary />

						<div className='text-[16px] leading-[19.2px] tracking-[-0.015em] text-[#787878] font-medium mt-[54px] whitespace-pre flex'>
							Уже есть аккаунт?<div className='text-[#5875E8]'>{` Войти`}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login2
