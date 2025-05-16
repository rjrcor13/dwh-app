import { Clock4, Stethoscope, Trophy } from 'lucide-react';
import React from 'react';
import SearchDoctor from './SearchDoctor';

const Stats = () => {
	return (
		<div className="bg-primary ">
			<div className="max-w-7xl container_  mx-auto align-middle p-6  text-center justify-center">
				<div className="grid grid-cols-9 gap-4  ">
					<div className="flex gap-1 flex-col text-white lg:col-span-2 col-span-3 ">
						<div className="flex flex-row  font-bold text-2xl sm:text-3xl md:text-4xl justify-center items-center gap-2">
							<Clock4 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" /> 24/7
						</div>

						<span className="text-sm">Emergency Care</span>
					</div>
					<div className="flex gap-1 flex-col lg:col-span-2 col-span-3 text-white border sm:border-x-2 border-x-1 border-y-0">
						<div className="flex flex-row  font-bold text-2xl sm:text-3xl md:text-4xl justify-center items-center gap-2">
							<Stethoscope className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />{' '}
							200+
						</div>

						<span className="text-sm">Expert Doctors</span>
					</div>
					<div className="flex gap-1 flex-col lg:col-span-2 col-span-3 text-yellow-300">
						{' '}
						<div className="flex flex-row  font-bold text-2xl sm:text-3xl md:text-4xl justify-center items-center gap-2">
							<Trophy className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" /> 60
						</div>
						<span className="text-sm text-white">Years of Exellence</span>
					</div>
					<div className="col-span-3 relative top-[-50px] hidden lg:block">
						<SearchDoctor classNames="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
