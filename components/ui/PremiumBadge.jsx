import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const PremiumBadge = ({ text = "World-Class Care", icon: Icon = Sparkles, className }) => {
    return (
        <Badge variant="premium" className={cn("rounded-full px-5 py-2.5 gap-2", className)}>
            <Icon className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-xs font-bold tracking-widest uppercase">
                {text}
            </span>
        </Badge>
    );
};

export default PremiumBadge;
