// app/data/eucharisticEvents.js

export const eucharisticEvents = [
	{
		id: '1',
		title: 'Solemnity of the Body and Blood of Christ',
		date: 'Sunday, June 15, 2025',
		time: '9:00 AM - 10:30 AM',
		location: 'Main Church Sanctuary',
		description:
			'A special Mass celebrating the Solemnity of the Most Holy Body and Blood of Christ. All parishioners are encouraged to attend this beautiful service.',
		organizer: 'Parish Liturgy Committee',
		media: [
			// <-- NEW: 'media' array
			{
				type: 'image',
				src: 'https://images.unsplash.com/photo-1543787752-6c3e387c2c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYyNTJ8MHwxfHNlYXJjaHwyM3x8ZXVjaGFyaXN0aWN8ZW58MHx8fHwxNzE4MjUxODA3fDA&ixlib=rb-4.0.3&q=80&w=400',
			},
			// You can add more images or a video here if needed
			// { type: 'video', src: 'https://www.youtube.com/embed/your_video_id_1' }
		],
	},
	{
		id: '2',
		title: 'Adoration of the Blessed Sacrament',
		date: 'Friday, June 20, 2025',
		time: '6:00 PM - 7:00 PM',
		location: 'Adoration Chapel',
		description:
			'An hour of silent adoration before the Blessed Sacrament. A time for personal prayer and reflection. Confession will be available during this hour.',
		organizer: 'Eucharistic Adoration Ministry',
		media: [
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
		],
	},
	{
		id: '3',
		title: 'First Holy Communion Celebration',
		date: 'Saturday, June 28, 2025',
		time: '10:00 AM - 11:30 AM',
		location: 'Main Church Sanctuary',
		description:
			'Join us in celebrating our young parishioners receiving the Sacrament of First Holy Communion. Families and friends are welcome.',
		organizer: 'Religious Education Program',
		media: [
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
		],
	},
	{
		id: '4',
		title: 'Healing Mass with Anointing of the Sick',
		date: 'Tuesday, July 1, 2025',
		time: '7:00 PM - 8:30 PM',
		location: 'Parish Hall',
		description:
			'A special Mass dedicated to healing, with the Sacrament of Anointing of the Sick available for those who wish to receive it. All are welcome to pray for healing.',
		organizer: 'Parish Healing Ministry',
		media: [
			{
				type: 'video',
				src: 'https://www.youtube.com/embed/zaH9dw5zeq8',
			}, // Example YouTube embed
		],
	},
	{
		id: '5',
		title: 'Corpus Christi Procession',
		date: 'Sunday, June 15, 2025',
		time: '10:45 AM (immediately after 9 AM Mass)',
		location: 'Around Church Grounds',
		description:
			'Following the 9:00 AM Mass, we will have our annual Corpus Christi procession around the parish grounds, honoring the real presence of Christ in the Eucharist. All are encouraged to participate.',
		organizer: 'Parish Liturgy Committee',
		media: [
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'video',
				src: 'https://www.youtube.com/embed/zaH9dw5zeq8',
			}, // Example YouTube embed
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
			{
				type: 'image',
				src: 'https://res.cloudinary.com/drshv1xtt/image/upload/v1750147217/cld-sample-4.jpg',
			},
		],
	},
];
