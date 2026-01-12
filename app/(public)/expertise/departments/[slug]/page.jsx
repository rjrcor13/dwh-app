import { departmentsData } from '@/app/data/departments';
import DepartmentDetailsClient from '@/components/departments/DepartmentDetailsClient';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const department = departmentsData.find((d) => d.id === resolvedParams.slug);

    if (!department) {
        return {
            title: 'Department Not Found',
        };
    }

    return {
        title: `${department.name} | Divine Word Hospital`,
        description: department.description,
        openGraph: {
            title: `${department.name} - Centers of Excellence`,
            description: department.description,
        },
    };
}

export async function generateStaticParams() {
    return departmentsData.map((d) => ({
        slug: d.id,
    }));
}

export default async function DepartmentDetailPage({ params }) {
    const resolvedParams = await params;
    const department = departmentsData.find((d) => d.id === resolvedParams.slug);

    if (!department) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="text-white text-xl">Department Not Found</div>
            </div>
        );
    }

    // Important: We need to pass data that is serializable.
    // Data file has icons as components? Check departments.js.
    // If departments.js exports actual components in the object (e.g. icon: Brain), Next.js Server Components cannot pass functions to Client Components.
    // We need to strip the icon component or map it to a string name.

    // Assuming departmentsData has imported icons. 
    // Since we can't change the data file structure easily without breaking other things (potentially),
    // we'll try to rely on 'name' or 'id' to dynamically load icons in the Client Component,
    // and pass a stripped version of the object.

    const { icon, ...safeDepartment } = department;
    // We pass 'id' or 'name' so the client can map it if needed, or if the client uses DynamicIcons by name string (if we switch data to strings).
    // Current data file has `icon: Brain` (Component).
    // So we MUST NOT pass `icon` to the client component directly.
    // We'll pass a prop "iconName" if we can derive it, or just let client match by ID.
    // Or even better: Is there a way to get the name of the icon? Not reliably in production build.
    // Strategy: Pass `id` and let client handle the icon mapping or use a default.
    // Actually, `DepartmentDetailsClient.jsx` uses `DynamicIcons`. `DynamicIcons` expects a string name.
    // The `departments.js` has `icon: Brain` (the function).
    // We should probably update `departments.js` to use strings if we want fully dynamic icons, 
    // OR maintain a mapping in the client component.
    // For now, I'll pass the safe object.

    return <DepartmentDetailsClient department={safeDepartment} />;
}
