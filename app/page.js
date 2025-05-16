import HomePage from './(public)/home/page';
import PublicLayout from './(public)/layout';

export default function Home() {
	return (
		<div>
			<PublicLayout>
				<HomePage />
			</PublicLayout>
		</div>
	);
}
