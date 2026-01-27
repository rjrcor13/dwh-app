import { statsData } from '@/app/data/stats';
import React from 'react';
import SearchDoctor from './SearchDoctor';

const Stats = () => {
	return (
		<div className="bg-slate-900 border-y border-white/10 relative z-20">
			<div className="max-w-[1440px] mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
					{statsData.map((stat, idx) => (
						<div key={idx} className="flex flex-col items-center justify-center p-4">
							<div className="flex items-center gap-3 mb-2 text-secondary">
								<stat.icon className="w-8 h-8" />
								<span className="text-4xl md:text-5xl font-bold font-heading text-white">
									{stat.value}
								</span>
							</div>
							<p className="text-slate-400 font-medium uppercase tracking-wide text-sm">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Stats;
