import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Brand = () => {
	return (
		<Link href="/home">
			<div className="flex gap-4 items-center justify-center  ">
				<Image src={logo} width={90} height={90} alt="logo" aria-label="logo" />{' '}
				<div className="">
					<h4 className="font-bold text-primary text-xl">
						Divine Word Hospital
					</h4>
					<p className="text-sm text-gray-600 italic">
						60 years of Grace .... <br />
						Serving, Caring & Healing.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Brand;
