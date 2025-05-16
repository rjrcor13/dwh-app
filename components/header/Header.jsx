import { menuItems } from '@/app/data/navigationItems';
import MainNavigation from '../navigation/MainNavigation';
import MobileNavigation from '../navigation/MobileNavigation';

const Header = () => {
	return (
		<>
			<MainNavigation menuItems={menuItems} />

			{/* <div className="lg:hidden">
				<MobileNavigation menuItems={menuItems} />
			</div> */}
		</>
	);
};

export default Header;
