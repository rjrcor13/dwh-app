export const fadeInViewProps = (delay = 0.1, duration = 0.4, offsetY = 20) => ({
	initial: { opacity: 0, y: offsetY },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration, delay },
	viewport: { once: true, amount: 0.2 },
});
