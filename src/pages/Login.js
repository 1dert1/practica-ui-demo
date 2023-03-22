const Login = () => {
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
			{/* <div className='absolute m-auto left-0 right-0 top-0 bottom-0 h-full backdrop-brightness-50 flex justify-center items-center'>
				<div className='rounded-[20px] bg-white grid grid-cols-4'>
					<div className='bg-[#5875E8] rounded-l-[20px]'></div>
					<div className='col-span-3 p-[20px] flex flex-col justify-start items-start'>
						<div className='font-medium text-[22px] leading-[26.4px] tracking-[-0.027em]'>
							Создать аккаунт
						</div>
						<div className='mt-[40px] bg-[#44678D] text-white py-[15px] text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium px-[50px] rounded-[20px]'>
							Войти через ВКонтакте
						</div>
						<div className='mt-[10px] bg-[#44678D] text-white py-[15px] text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium px-[50px] rounded-[20px]'>
							Войти через Telegram
						</div>
						<div className='mt-[20px] text-[#BFBFBF] font-medium text-[16px] leading-[19.2px] tracking-[-0.015em] self-center'>
							или
						</div>
						<input
							spellCheck='false'
							class='mt-[20px] w-full antialiased bg-[#E3E3E3] p-[15px] outline-none rounded-[20px] text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium placeholder:text-[#787878]'
							placeholder='Введите e-mail'
						/>
						<div className='mt-[10px] bg-[#5875E8] w-full p-[15px] rounded-[20px] text-center text-white text-[16px] leading-[19.2px] tracking-[-0.015em]'>
							Продолжить
						</div>
						<div className='text-[16px] leading-[19.2px] tracking-[-0.015em] text-[#787878] font-medium mt-[54px] whitespace-pre flex'>
							Уже есть аккаунт?<div className='text-[#5875E8]'>{` Войти`}</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Login
