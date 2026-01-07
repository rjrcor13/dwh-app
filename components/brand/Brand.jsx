import logo from '@/public/assets/logo_w.png';
import Image from 'next/image';
import Link from 'next/link';

const Brand = () => {
	return (
		<Link href="/home">
			<div className="flex items-center gap-2 sm:gap-4 justify-center">
				<Image
					src={logo}
					width={90}
					height={90}
					alt="logo"
					aria-label="logo"
					className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]" // Reduced size on small screens
				/>
				<div>
					<h4 className="font-bold text-white text-base md:text-xl text-nowrap">
						Divine Word Hospital
					</h4>
					<p className="text-xs text-white/50 italic text-nowrap md:text-sm">
						Serving, Caring & Healing.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Brand;
