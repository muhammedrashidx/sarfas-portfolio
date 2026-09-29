import { CodeIcon, HomeIcon, NotebookIcon, Globe, Github } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import SarfasImg from '$lib/imgs/profile.jpg';
import BKGulfImg from '$lib/imgs/bk_gulf_llc.png';
import PondyUnivImg from '$lib/imgs/Pondy_Univ_logo.png';
import GecImg from '$lib/imgs/gec_logo.jpg';

// Your resume data
export let DATA = {
	name: 'Sarfas K',
	initials: 'SK',
	url: 'https://www.linkedin.com/in/sarfas-kollathodi',
	img: SarfasImg,
	location: 'Dubai, UAE',
	locationLink: 'https://www.google.com/maps/place/Dubai',
	description:
		'B.Tech. Civil Engineering | M.Sc. Disaster Management | HSE Engineer',
	summary:
		'I am an accomplished young professional with a proven track record in safety management, risk assessment, crisis recovery, and coordination. Specializing in occupational health and safety, I am committed to delivering exceptional results while continuously enhancing my skills. I thrive in dynamic environments that promote creativity, collaboration, and personal development. As a motivated and adaptable team player, my focus is on innovating safety protocols, strengthening crisis management strategies, and consistently contributing to overarching organizational goals.',
	avatarUrl: SarfasImg,
	skills: [
		{
			category: 'Technical Skills',
			items: [
				'HSE Reporting & Trend Analysis',
				'Hazard Identification & Risk Assessment (HIRA)',
				'Job Safety Analysis (JSA)',
				'Permit-to-Work (PTW) Systems',
				'Emergency Response Planning (ERP)',
				'HSE Audits & Inspections',
				'Microsoft Office (Word, Excel, PowerPoint)',
				'ArcGIS',
				'Remote Sensing'
			]
		},
		{
			category: 'Interpersonal & Communication Skills',
			items: [
				'Ability to work in fast paced environment',
				'Fast learning',
				'Good team work',
				'Well Communication Skills',
				'Leadership Qualities',
				'Teaching',
				'Personal Motivation',
				'Organizer',
				'Numerical Ability'
			]
		},
		{
			category: 'Language Skills',
			items: [
				'Malayalam',
				'English',
				'Arabic',
				'Hindi',
				'Tamil'
			]
		}
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Activities' }
	],
	contact: {
		email: 'sarfask007@gmail.com',
		tel: '+971506061914',
		social: {
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/sarfas-kollathodi',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:sarfask007@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'BK GULF LLC',
			href: '#',
			badges: [],
			location: 'DUBAI, UAE',
			title: 'HSE OFFICER',
			logoUrl: BKGulfImg,
			start: 'May 2023',
			end: 'Present',
			description:
				'Project: Khazna Data Center Project – DXB9 – June 2024 – CURRENT\nClient: Etisalat Data Center Ltd (Khazna) | PMC: AECOM\n\n• Implemented and enforced HSE policies and regulatory requirements across construction and MEP activities in compliance with company, client, and international standards.\n• Part of site inspections, audits, and high-risk works including lifting operations, rooftop chiller installation, and T&C with strict implementation of MSRA, ESSW, and PTW systems.\n• Managed HSE reporting, trend analysis, NCRs, and subcontractor performance reviews, coordinating with logistics and department heads to close out observations and enhance site safety performance.\n• Conducted emergency drills, toolbox talks, and safety awareness programs.\n• Conducted Internal trainings.\n\nProject: Khazna Data Center Project – DXB3 – May 2023 – June 2024\nClient: Etisalat Data Center Ltd (Khazna) | PMC: Mott MacDonald\n\n• Conducted daily HSE inspections for MEP, civil, and infrastructure activities per project safety standards.\n• Monitored high-risk activities such as excavation, electrical, lifting, and confined space entry.\n• Delivered toolbox talks, site inductions, and coordinated with teams for immediate corrective actions.\n• Prepared weekly/monthly HSE reports, LUX & noise monitoring and Near misses.'
		},
		{
			company: 'PLAN ARTS CONSTRUCTIONS',
			href: '#',
			badges: [],
			location: 'Kerala, India',
			title: 'JUNIOR SAFETY OFFICER',
			logoUrl: '',
			start: 'Nov 2020',
			end: 'Oct 2021',
			description:
				'Villa Project - Ernakulam\n\n• Promoted a zero-accident culture by enforcing safety policies, conducting audits, and recommending corrective actions for unsafe conditions.\n• Provided on-site safety training, inductions, and guidance to workforce, supervisors, and staff to improve safety awareness and compliance.\n• Coordinated emergency preparedness, fire safety measures, and site safety activities with clients, contractors, and internal teams.'
		}
	],
	education: [
		{
			school: 'Department of Coastal Disaster Management, Pondicherry University Port Blair Campus',
			href: 'https://www.pondiuni.edu.in',
			degree: 'Master of Science in Disaster Management',
			logoUrl: PondyUnivImg,
			start: 'Oct 2021',
			end: 'May 2023'
		},
		{
			school: 'Government Engineering College Thrissur, APJ Abdul Kalam Technological University',
			href: 'https://gectcr.ac.in',
			degree: 'Bachelor of Technology in Civil Engineering',
			logoUrl: GecImg,
			start: 'Aug 2015',
			end: 'May 2019'
		}
	],
	activities: [
		'Active Volunteer in NSS',
		'Volunteered In Flood Relief and Field Surveys',
		'Active Participant in Cultural programs And Techfest',
		'Active Member In Quiz Club'
	],
	publications: [
		{
			title: 'Pearson Test of English (PTE) Academic',
			authors: 'Overall Score: 70/90',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'NEBOSH IGC Occupational Health and Safety',
			authors: 'Certification',
			year: 'Dec 2022',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'IOSH Managing Safely',
			authors: 'Certification',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'First Aid, Adult CPR',
			authors: 'From HIS Approved Training Centre',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'Fire Fighting and Prevention Methods Training',
			authors: 'from Dubai Civil Defence Approved Centre',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'One Million Prompters AI Training Program',
			authors: 'from Dubai Centre for Artificial Intelligence',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'First Aid at Work',
			authors: 'From Knowledge & Human Development Authority Dubai',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'Behavior Based Safety Management',
			authors: 'From the CPD Certification Service',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'Control of Substances Hazardous to Health',
			authors: 'From the CPD Certification Service',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'Disaster Management with Advanced Emergency Response Principles',
			authors: 'From The CPD Standards Office',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		},
		{
			title: 'Lessons from Ebola: Preventing the Next Pandemic',
			authors: 'From Harvard University USA',
			year: '',
			venue: '',
			citations: null,
			quartile: null,
			image: '',
			links: []
		}
	]
};
