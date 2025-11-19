export interface PortfolioItem {
	image: string;
	alt: string;
	title: string;
	blurb: string;
	stack: string;
	links: { label: string; href: string; icon: string }[];
	internal?: boolean;
}

export interface PortfolioGroup {
	title: string;
	id: string;
	items: PortfolioItem[];
}

export const portfolioGroups: PortfolioGroup[] = [
	{
		id: 'fullstack',
		title: 'Full-Stack',
		items: [
			{
				image: '/images/bullean.png',
				alt: 'Bullean',
				title: 'Bullean',
				blurb: 'Portfolio Management Application',
				stack: 'Node | Express | Sequelize | Handlebars',
				links: [
					{
						label: 'Heroku',
						href: 'https://bullean-app.herokuapp.com/',
						icon: 'icon-heroku mfizz-icon'
					},
					{ label: 'GitHub', href: 'https://github.com/mahume/Bullean', icon: 'fab fa-github' }
				]
			},
			{
				image: '/images/colorado-campgrounds.png',
				alt: 'Colorado Campgrounds',
				title: 'Colorado Campgrounds',
				blurb: 'Campground searching tool',
				stack: 'MongoDB | Express | React | Node | Passport',
				links: [
					{
						label: 'Heroku',
						href: 'https://colorado-campgrounds.herokuapp.com/',
						icon: 'icon-heroku mfizz-icon'
					},
					{
						label: 'GitHub',
						href: 'https://github.com/mahume/Colorado-Campgrounds',
						icon: 'fab fa-github'
					}
				]
			},
			{
				image: '/images/friend-finder.png',
				alt: 'Friend Finder',
				title: 'Friend Finder',
				blurb: 'Find your next pal.',
				stack: 'Bootstrap | Express | jQuery | Node',
				links: [
					{
						label: 'Heroku',
						href: 'https://mahume-friend-finder.herokuapp.com/',
						icon: 'icon-heroku mfizz-icon'
					},
					{
						label: 'GitHub',
						href: 'https://github.com/mahume/friend-finder',
						icon: 'fab fa-github'
					}
				]
			}
		]
	},
	{
		id: 'backend',
		title: 'Back-End',
		items: [
			{
				image: '/images/cliri.png',
				alt: 'Cliri',
				title: 'Cliri',
				blurb: 'Search for movies, songs and concerts via API requests.',
				stack: 'Node | Axios | Moment | Chalk',
				links: [{ label: 'Repo', href: 'https://github.com/mahume/cliri', icon: 'fab fa-github' }]
			},
			{
				image: '/images/bamazon.png',
				alt: 'Bamazon',
				title: 'Bamazon',
				blurb: "Utilize this online store's database as either a customer, manager or supervisor.",
				stack: 'Node | MySQL | Inquirer',
				links: [{ label: 'Repo', href: 'https://github.com/mahume/bamazon', icon: 'fab fa-github' }]
			},
			{
				image: '/images/word-guess.png',
				alt: 'Word Guess',
				title: 'Word Guess',
				blurb: 'Hangman style game using JavaScript constructors.',
				stack: 'Node | Inquirer | Chalk',
				links: [
					{ label: 'Repo', href: 'https://github.com/mahume/word-guess', icon: 'fab fa-github' }
				]
			}
		]
	},
	{
		id: 'frontend',
		title: 'Front-End',
		items: [
			{
				image: '/images/marvel-memory.png',
				alt: 'Marvel Memory',
				title: 'Marvel Memory',
				blurb: 'Memory based image game.',
				stack: 'React | animate.css',
				links: [
					{
						label: 'Demo',
						href: 'https://mahume.github.io/marvel-memory/',
						icon: 'fab fa-github'
					},
					{
						label: 'Repo',
						href: 'https://github.com/mahume/marvel-memory',
						icon: 'fab fa-github'
					}
				]
			},
			{
				image: '/images/giphy.png',
				alt: 'Giphy',
				title: 'Giphy',
				blurb: "Search gifs to your heart's content.",
				stack: 'Bootstrap | jQuery | AJAX',
				links: [
					{ label: 'Demo', href: 'https://mahume.github.io/giphy/', icon: 'fab fa-github' },
					{ label: 'Repo', href: 'https://github.com/mahume/giphy', icon: 'fab fa-github' }
				]
			},
			{
				image: '/images/trip-over-this.png',
				alt: 'Trip Over This',
				title: 'Trip Over This',
				blurb: 'Search for things to do on a business trip.',
				stack: 'HTML | CSS | Bootstrap | JavaScript | jQuery | moment.js | AJAX | Firebase',
				links: [
					{
						label: 'Demo',
						href: 'https://mahume.github.io/Trip-Over-This/',
						icon: 'fab fa-github'
					},
					{
						label: 'Repo',
						href: 'https://github.com/mahume/trip-over-this',
						icon: 'fab fa-github'
					}
				]
			},
			{
				image: '/images/train-scheduler.png',
				alt: 'Train Scheduler',
				title: 'Train Scheduler',
				blurb: 'Schedule your trip with the assurance of a database.',
				stack: 'HTML | CSS | Bootstrap | jQuery | JavaScript | Firebase',
				links: [
					{
						label: 'Demo',
						href: 'https://mahume.github.io/train-scheduler/',
						icon: 'fab fa-github'
					},
					{
						label: 'Repo',
						href: 'https://github.com/mahume/train-scheduler',
						icon: 'fab fa-github'
					}
				]
			},
			{
				image: '/images/star-wars-rpg.png',
				alt: 'Star Wars RPG',
				title: 'Star Wars RPG',
				blurb: 'Role-playing game in a galaxy far far away.',
				stack: 'HTML | CSS | Bootstrap | JavaScript | jQuery',
				links: [
					{
						label: 'Demo',
						href: 'https://mahume.github.io/star-wars-rpg/',
						icon: 'fab fa-github'
					},
					{
						label: 'Repo',
						href: 'https://github.com/mahume/star-wars-rpg',
						icon: 'fab fa-github'
					}
				]
			},
			{
				image: '/images/wild-west-hangman.png',
				alt: 'Wild West Hangman',
				title: 'Wild West Hangman',
				blurb: 'Western themed word guess game.',
				stack: 'HTML | CSS | Bootstrap | JavaScript',
				links: [
					{
						label: 'Demo',
						href: 'https://mahume.github.io/wild-west-hangman/',
						icon: 'fab fa-github'
					},
					{
						label: 'Repo',
						href: 'https://github.com/mahume/wild-west-hangman',
						icon: 'fab fa-github'
					}
				]
			}
		]
	}
];
