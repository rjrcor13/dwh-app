import SectionHeader from '@/components/ui/section-header';
import { Stethoscope } from 'lucide-react';

const PageHeader = ({
    badgeIcon: Icon = Stethoscope,
    badgeText = 'Medical Excellence',
    title = 'Our',
    highlightText = 'Services',
    description,
    children,
    gradient = "from-primary via-blue-600 to-indigo-600",
    badgeClassName = "bg-white shadow-lg shadow-blue-900/5 ring-1 ring-black/5"
}) => {
    return (
        <SectionHeader
            badge={
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${badgeClassName}`}>
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold tracking-widest uppercase text-blue-900">
                        {badgeText}
                    </span>
                </div>
            }
            title={title}
            highlight={highlightText}
            description={description}
            gradient={gradient}
        >
            {children}
        </SectionHeader>
    );
};

export default PageHeader;
