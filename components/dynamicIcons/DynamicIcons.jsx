// 'use client';

// import * as FilledIcons from '@healthicons/filled';
// import * as NegativeIcons from '@healthicons/negative';
// import * as OutlineIcons from '@healthicons/outline';

// const IconFallback = () => (
// 	<div
// 		className="inline-block bg-gray-200 rounded"
// 		style={{ width: 24, height: 24 }}
// 	/>
// );

// const styleMap = {
// 	filled: FilledIcons,
// 	outline: OutlineIcons,
// 	negative: NegativeIcons,
// };

// const DynamicIcons = ({ name, style = 'filled', ...props }) => {
// 	const icons = styleMap[style] || FilledIcons;
// 	const IconComponent = icons[name];

// 	if (!IconComponent) return <IconFallback />;

// 	return <IconComponent {...props} />;
// };

// export default DynamicIcons;
// components/DynamicLucideIcon.jsx
// 'use client';

// import * as Icons from 'lucide-react';

// const IconFallback = () => (
// 	<div
// 		className="inline-block bg-gray-200 rounded"
// 		style={{ width: 24, height: 24 }}
// 	/>
// );

// /**
//  * Renders a Lucide icon dynamically based on its name.
//  * @param {Object} props
//  * @param {string} props.name - The icon name (e.g., "User", "Bell")
//  * @param {Object} props.props - Any additional props passed to the icon
//  */
// const DynamicLucideIcon = ({ name, ...props }) => {
// 	const LucideIcon = Icons[name];

// 	if (!LucideIcon) return <IconFallback />;

// 	return <LucideIcon {...props} />;
// };

// export default DynamicLucideIcon;
'use client';

import * as FilledIcons from 'healthicons-react/filled';
import * as OutlineIcons from 'healthicons-react/outline';

const fallbackStyle = {
	width: 24,
	height: 24,
	backgroundColor: '#e5e7eb',
	borderRadius: '4px',
	display: 'inline-block',
};

const IconFallback = () => <div style={fallbackStyle} />;

const styleMap = {
	filled: FilledIcons,
	outline: OutlineIcons,
};

/**
 * Props:
 * - name: string (e.g. BloodBag, Ambulance)
 * - style: 'filled' | 'outline' | 'negative'
 * - any SVG props: size, color, etc.
 */
const DynamicHealthIcon = ({ name, style = 'outline', ...props }) => {
	const icons = styleMap[style] || styleMap.outline;
	const IconComponent = icons[name];

	if (!IconComponent) {
		console.warn(`Health icon "${name}" not found in style "${style}"`);
		return <IconFallback />;
	}

	return <IconComponent {...props} />;
};

export default DynamicHealthIcon;
