import { Clock4, Stethoscope, Trophy } from 'lucide-react';
import React from 'react';
import SearchDoctor from './SearchDoctor';

const Stats = () => {
	return (
		<div className="bg-slate-900 border-y border-white/10 relative z-20">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
					<div className="flex flex-col items-center justify-center p-4">
						<div className="flex items-center gap-3 mb-2 text-secondary">
							<Clock4 className="w-8 h-8" />
							<span className="text-4xl md:text-5xl font-bold font-heading text-white">
								24/7
							</span>
						</div>
						<p className="text-slate-400 font-medium uppercase tracking-wide text-sm">
							Emergency Care
						</p>
					</div>

					<div className="flex flex-col items-center justify-center p-4">
						<div className="flex items-center gap-3 mb-2 text-secondary">
							<Stethoscope className="w-8 h-8" />
							<span className="text-4xl md:text-5xl font-bold font-heading text-white">
								200+
							</span>
						</div>
						<p className="text-slate-400 font-medium uppercase tracking-wide text-sm">
							Expert Doctors
						</p>
					</div>

					<div className="flex flex-col items-center justify-center p-4">
						<div className="flex items-center gap-3 mb-2 text-secondary">
							<Trophy className="w-8 h-8" />
							<span className="text-4xl md:text-5xl font-bold font-heading text-white">
								60+
							</span>
						</div>
						<p className="text-slate-400 font-medium uppercase tracking-wide text-sm">
							Years of Excellence
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
