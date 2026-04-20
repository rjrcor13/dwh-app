'use client';

/**
 * DoctorCardSkeleton — animated pulse placeholder that mirrors DoctorCard layout.
 */
const DoctorCardSkeleton = () => (
    <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm animate-pulse">
        {/* Photo area */}
        <div className="h-56 bg-slate-100" />
        {/* Content area */}
        <div className="p-5 space-y-3">
            {/* Name */}
            <div className="h-5 bg-slate-100 rounded-full w-3/4" />
            {/* Specialty */}
            <div className="h-4 bg-slate-100 rounded-full w-1/2" />
            {/* Tags row */}
            <div className="flex gap-2 pt-1">
                <div className="h-6 bg-slate-100 rounded-full w-16" />
                <div className="h-6 bg-slate-100 rounded-full w-20" />
            </div>
            {/* Divider */}
            <div className="h-px bg-slate-100 my-2" />
            {/* Button */}
            <div className="h-10 bg-slate-100 rounded-xl w-full" />
        </div>
    </div>
);

/**
 * DoctorGridSkeleton — a full grid of skeleton cards matching the doctors page layout.
 * @param {number} count - Number of skeleton cards to render (default: 8)
 */
const DoctorGridSkeleton = ({ count = 8 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {Array.from({ length: count }).map((_, i) => (
            <DoctorCardSkeleton key={i} />
        ))}
    </div>
);

export { DoctorCardSkeleton, DoctorGridSkeleton };
export default DoctorGridSkeleton;
