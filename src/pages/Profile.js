import HomeIcon from '../shared/ui/Icons/HomeIcon'
import MessageIcon from '../shared/ui/Icons/MessageIcon'
import PlusIcon from '../shared/ui/Icons/PlusIcon'
import ProfileIcon from '../shared/ui/Icons/ProfileIcon'
import SearchIcon from '../shared/ui/Icons/SearchIcon'
import TextBody from '../shared/ui/Text/TextBody'
import TextMain from '../shared/ui/Text/TextMain'
import profileImage from './../assets/profileImage.png'
import TextCaption from './../shared/ui/Text/TextCaption'
import PencilIcon from './../shared/ui/Icons/PencilIcon'

const Profile = () => {
	return (
		<div className='  flex flex-col justify-start items-start'>
			<div className='text-[#5875E8] font-semibold text-[32px] leading-[38.4px] self-start bg-white w-full [@media(pointer:coarse)]:px-[10px] px-[15%] py-[10px] flex justify-start items-center border-b-[1px] border-[#EFEFF0]'>
				<div>Practica</div>
				<div className='m-auto flex flex-row justify-center items-center gap-[20px]'>
					<ProfileIcon />
					<MessageIcon />
					<SearchIcon />
					<HomeIcon />
				</div>
			</div>
			<div className='bg-white w-full [@media(pointer:coarse)]:px-[10px] px-[15%] py-[10px] flex flex-row justify-start items-center border-b-[1px] border-[#EFEFF0] text-[16px] leading-[19.2px] tracking-[-0.015em] font-medium gap-[30px]'>
				<div className='text-[#5875E8]'>Информация</div>
				<div>Посты и ответы</div>
				<div>Оценено</div>
			</div>
			<div className='flex-grow flex flex-col w-full [@media(pointer:coarse)]:px-[10px] px-[15%] py-[10px]'>
				<div className='flex flex-row justify-start items-start mt-[10px] gap-[20px]'>
					<div className='flex flex-col w-[320px] flex-shrink-0'>
						<div className='bg-white rounded-[20px] flex flex-col'>
							<div className='p-[10px]'>
								<img
									src={profileImage}
									width='300'
									height='300'
									alt='Фото профиля'
								/>
								<TextMain
									text='Анастасия Зимняя'
									styled='mt-[20px] font-medium'
								/>
								<TextBody text='Россия' styled='text-[#B1B3B7] mt-[5px]' />
							</div>
							<div className='mt-[20px] border-t-[1px] border-[#EFEFF0] grid grid-cols-2'>
								<div className='border-r-[1px] border-[#EFEFF0] p-[10px]'>
									<TextBody text='234' />
									<TextBody text='Связи' styled='text-[#B1B3B7]' />
								</div>
								<div className='p-[10px]'>
									<TextBody text='23' />
									<TextBody text='Просмотры' styled='text-[#B1B3B7]' />
								</div>
							</div>
						</div>
						<div className='mt-[20px] bg-white rounded-[20px] flex flex-col p-[10px]'>
							<TextBody
								text='Выбранные навыки'
								styled='text-[#B1B3B7] font-medium'
							/>
							<div className='flex flex-row justify-start items-center flex-wrap mt-[10px] gap-[10px]'>
								<div className='bg-[#5875E8] py-[5px] px-[10px] rounded-[20px]'>
									<TextCaption
										text='JavaScript'
										styled='text-white font-medium'
									/>
								</div>
								<div className='bg-[#5875E8] py-[5px] px-[10px] rounded-[20px]'>
									<TextCaption
										text='Делопроизводство'
										styled='text-white font-medium'
									/>
								</div>
								<div className='bg-[#5875E8] py-[5px] px-[10px] rounded-[20px]'>
									<TextCaption text='Netflix' styled='text-white font-medium' />
								</div>
								<div className='bg-[#5875E8] py-[5px] px-[10px] rounded-[20px]'>
									<TextCaption
										text='Водительские права'
										styled='text-white font-medium'
									/>
								</div>
								<div className='bg-[#5875E8] p-[5px] rounded-[20px]'>
									<PlusIcon />
								</div>
							</div>
						</div>
						<div className='mt-[10px] bg-white py-[15px] rounded-[20px] text-center'>
							<TextMain text='Подписаться' styled='text-[#5875E8]' />
						</div>
						<div className='mt-[10px] bg-white py-[15px] rounded-[20px] text-center'>
							<TextMain text='Связаться' styled='text-[#5875E8]' />
						</div>
					</div>
					<div className='flex flex-col w-full gap-[20px]'>
						<div className='bg-white rounded-[20px] flex flex-col p-[10px] gap-[10px]'>
							<div className='flex flex-row justify-between'>
								<TextBody text='Обо мне' styled='text-[#B1B3B7] font-medium' />
								<PencilIcon />
							</div>
							<TextBody text='Мой девиз - непрерывное обучение. Всегда открыт к новым знаниям и развитию навыков' />
						</div>
						<div className='bg-white rounded-[20px] flex flex-col p-[10px]'>
							<TextBody
								text='Образование'
								styled='text-[#B1B3B7] font-medium'
							/>
							<TextBody
								text='МГТУ (бывш. МГОПУ им. Шолохова)'
								styled='mt-[10px]'
							/>
							<TextBody
								text='Социальная педагогика - психология'
								styled='mt-[5px] text-[#B1B3B7]'
							/>
							<TextBody text='БКС' styled='mt-[10px]' />
							<TextBody
								text='Тех.анализ и торговля на фондовом рынке'
								styled='mt-[5px] text-[#B1B3B7]'
							/>
						</div>
						<div className='bg-white rounded-[20px] flex flex-col p-[10px]'>
							<TextBody
								text='Опыт работы'
								styled='text-[#B1B3B7] font-medium'
							/>
							<TextBody text='ПАО «Роснефть»' styled='mt-[10px]' />
							<TextBody
								text='Мой девиз - непрерывное обучение. Всегда открыт к новым знаниям и развитию навыков'
								styled='mt-[5px] text-[#B1B3B7]'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
