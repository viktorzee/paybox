import { useLocation } from 'react-router-dom';

type Props = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isOpen, setOpen }: Props) => {
	const { pathname } = useLocation();
	const isOnClassPage = pathname.includes('/class/');

	return (
		<div
			className={`lg:hidden absolute z-20 top-3 right-4 ${
				isOpen ? `${isOnClassPage ? 'pl-82' : 'pl-34'}` : 'pl-6'
			} transition-all duration-300 ease-in-out`}>
			<div
				className={`${!isOpen ? 'flex justify-center bg-[rgba(45,70,150,1)] items-center text-lg py-1 px-5 cursor-pointer rounded-[10px] text-white' : 'hidden'}`}
				onClick={() => setOpen(!isOpen)}>
				Menu
			</div>
		</div>
	);
};

export default Hamburger;
