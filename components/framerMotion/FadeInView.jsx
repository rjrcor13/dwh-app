'use client';

import { motion } from 'framer-motion';

export default function FadeInView({ children, className = '' }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			viewport={{ once: true, amount: 0.2 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
