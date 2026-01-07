// import {
// 	Facebook,
// 	Instagram,
// 	LocateIcon,
// 	Mail,
// 	Map,
// 	MapPin,
// 	MapPinCheckInside,
// 	Phone,
// 	Twitter,
// 	Youtube,
// } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react';

// const TopWidget = () => {
// 	return (
// 		<div className="bg-[#1A429B]_ bg-primary ">
// 			<div className="max-w-7xl container py-3 mx-auto">
// 				<div className="flex justify-between items-center text-white text-sm">
// 					{/* Left Side: Connect With Us (Hidden on small screens) */}
// 					<div className="hidden md:flex flex-row gap-4 items-center  ">
// 						<span>Connect with Us:</span>
// 						<div className="flex flex-row gap-4">
// 							<Facebook size={18} />
// 							<Twitter size={18} />
// 							<Instagram size={18} />
// 							<Youtube size={18} />
// 							<Mail size={20} />
// 						</div>
// 					</div>

// 					{/* Right Side: Location and Phone */}
// 					<div className="hidden md:flex flex-row gap-4 items-center sm:text-right  px-2 justify-self-end">
// 						<div className="flex flex-row gap-1 items-center">
// 							<MapPin size={18} />
// 							<span className="whitespace-nowrap">
// 								Avenida Veteranos Street, Tacloban City, Leyte, 6500, PH
// 							</span>
// 						</div>
// 						<div className="flex flex-row gap-1 items-center">
// 							<Phone size={18} />
// 							<span>+653 888 8888</span>
// 						</div>
// 					</div>
// 					<div className="md:hidden flex flex-row gap-4 items-center sm:text-right  px-2 justify-end w-full">
// 						<div className="flex flex-row gap-1 items-center">
// 							<MapPin size={18} />
// 							<span className="whitespace-nowrap">
// 								<Link href="#connect-with-us" className="underline">
// 									Get Direction
// 								</Link>
// 							</span>
// 						</div>
// 						<div className="flex flex-row gap-1 items-center">
// 							<Phone size={18} />
// 							<span>+653 888 8888</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default TopWidget;
import { contactInfo } from '@/app/data/contactInfo';
import {
	Facebook,
	Instagram,
	InstagramIcon,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
	YoutubeIcon,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const addressInfo = contactInfo.find((info) => info.title === 'Location');
const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
const TopWidget = () => {
	return (
		<div className="bg-background border-b border-b-gray-200 font-regular">
			<div className="max-w-7xl_ container py-2 mx-auto">
				<div className="flex justify-between items-center text-gray-700 text-sm">
					{/* Left Side: Connect With Us (Hidden on small screens) */}
					<div className="hidden md:flex flex-row gap-4 items-center px-2">
						{/* <span>Connect with Us:</span> */}
						<div className="flex flex-row gap-1">
							<Link
								href="https://www.facebook.com/dwhtofficial"
								target="_blank"
								aria-label="Facebook"
								className="  p-2 rounded-full"
							>
								<Facebook size={18} />{' '}
							</Link>
							<Link
								href="https://www.facebook.com/dwhtofficial"
								target="_blank"
								aria-label="instagram"
								className=" p-2 rounded-full"
							>
								<InstagramIcon size={20} />
							</Link>
							<Link
								href="https://www.facebook.com/dwhtofficial"
								target="_blank"
								aria-label="Youtube"
								className=" p-2 rounded-full"
							>
								<YoutubeIcon size={20} />
							</Link>
							<Link
								href="mailto:divinewordhosp.marketing@gmail.com"
								target="_blank"
								aria-label="Email"
								className=" p-2 rounded-full"
							>
								<Mail size={20} />
							</Link>
						</div>
					</div>

					{/* Right Side: Location and Phone */}
					<div className="hidden md:flex flex-row gap-4 items-center sm:text-right px-2 justify-self-end">
						<div className="flex flex-row gap-1 items-center">
							<MapPin size={15} />

							<span className="whitespace-nowrap">{addressInfo.text}</span>
						</div>
						<span className="text-gray-300">|</span>
						<div className="flex flex-row gap-1 items-center">
							<Phone size={15} />
							<span>{phoneInfo.text}</span>
						</div>
					</div>

					{/* Right Side (Mobile): Location and Phone as Link */}
					<div className="md:hidden flex flex-row gap-4 items-center sm:text-right px-2 justify-end w-full">
						<div className="flex flex-row gap-1 items-center">
							<MapPin size={18} />
							<span className="whitespace-nowrap">
								<Link href="#connect-with-us" className="underline">
									Get Direction
								</Link>
							</span>
						</div>
						<div className="flex flex-row gap-1 items-center">
							<Phone size={18} />
							<span>{phoneInfo.text}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopWidget;
