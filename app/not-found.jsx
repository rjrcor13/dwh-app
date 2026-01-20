import Link from 'next/link';
import { Home, Search, Calendar, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AmbientBackground from '@/components/ui/AmbientBackground';

const NotFound = () => {
	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">

			{/* Ambient Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<AmbientBackground variant="light" />
			</div>

			<div className="max-w-4xl w-full text-center relative z-10">
				{/* 404 Graphic */}
				<h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-cyan-500 select-none opacity-20 transform -rotate-6 scale-110">
					404
				</h1>

				<div className="mt-[-80px] md:mt-[-100px] relative">
					<div className="inline-flex items-center justify-center p-4 bg-white rounded-3xl shadow-xl shadow-blue-900/5 mb-8 border border-white/50 backdrop-blur-sm">
						<Search className="w-12 h-12 text-blue-600 animate-pulse" strokeWidth={1.5} />
					</div>

					<h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
						Page Not Found
					</h2>

					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
						We searched our medical archives but couldn't find the page you were looking for.
						It might have been moved, renamed, or doesn't exist.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link href="/home">
							<Button size="lg" className="h-14 px-8 rounded-2xl bg-primary hover:bg-blue-800 text-base font-semibold shadow-lg shadow-blue-900/20 group">
								<Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
								Return Home
							</Button>
						</Link>

						<Link href="/doctors">
							<Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold group">
								<Stethoscope className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
								Find a Doctor
							</Button>
						</Link>

						<Link href="/events">
							<Button size="lg" variant="ghost" className="h-14 px-8 rounded-2xl text-slate-600 hover:text-primary hover:bg-blue-50 text-base font-semibold group">
								<Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
								Browse Events
								<ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
