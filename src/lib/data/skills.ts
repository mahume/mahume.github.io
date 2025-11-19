export interface SkillCategory {
	title: string;
	id: string;
	items: { icon: string; label: string }[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: 'Client-side',
		id: 'client',
		items: [
			{ icon: 'fab fa-html5', label: 'HTML' },
			{ icon: 'fab fa-css3-alt', label: 'CSS' },
			{ icon: 'icon-bootstrap mfizz-icon', label: 'Bootstrap' },
			{ icon: 'fab fa-js', label: 'JavaScript' },
			{ icon: 'icon-jquery mfizz-icon', label: 'jQuery' },
			{ icon: 'fab fa-react', label: 'React' }
		]
	},
	{
		title: 'Server-side',
		id: 'server',
		items: [
			{ icon: 'fab fa-node-js', label: 'Node' },
			{ icon: 'fab fa-python', label: 'Python' }
		]
	},
	{
		title: 'Database',
		id: 'database',
		items: [
			{ icon: 'icon-mongodb mfizz-icon', label: 'MongoDB' },
			{ icon: 'icon-mysql mfizz-icon', label: 'MySQL' },
			{ icon: 'icon-heroku mfizz-icon', label: 'Firebase' }
		]
	},
	{
		title: 'Deployment',
		id: 'deployment',
		items: [
			{ icon: 'icon-git mfizz-icon', label: 'Git' },
			{ icon: 'fab fa-github', label: 'GitHub' },
			{ icon: 'icon-heroku mfizz-icon', label: 'Heroku' }
		]
	}
];
