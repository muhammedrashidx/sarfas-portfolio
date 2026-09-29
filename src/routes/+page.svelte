<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import PublicationCard from '$lib/components/portfolio/PublicationCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from '$lib/data/resume';
	import { marked } from 'marked';
	let BLUR_FADE_DELAY = 0.04;
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={DATA.name} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />

	<meta name="google-site-verification" content="your-google-verification-code" />
	<meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>
<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I'm {DATA.name.split(' ')[0]}</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>{DATA.description}</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">About Me</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>
	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Education and Training</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.school}
						title={edu.school}
						subtitle={edu.degree}
						start={edu.start}
						end={edu.end}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-col gap-y-4">
				{#each DATA.skills as skillCategory, categoryId}
					<div class="flex flex-col gap-y-2">
						<BlurFade delay={BLUR_FADE_DELAY * categoryId}>
							<h3 class="font-semibold text-sm">{skillCategory.category}</h3>
						</BlurFade>
						<div class="flex flex-wrap gap-1">
							{#each skillCategory.items as skill, id}
								<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
									<Badge>{skill}</Badge>
								</BlurFade>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section id="publications">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							Certification and Training
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Certification and Training</h2>
					</div>
				</div>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
					{#each DATA.publications as publication}
						<BlurFade delay={BLUR_FADE_DELAY}>
							<PublicationCard {...publication} />
						</BlurFade>
					{/each}
				</ul>
			</BlurFade>
		</div>
	</section>
	<section id="activities">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Activities</h2>
			</BlurFade>
			<ul class="list-disc ml-6 space-y-1 text-muted-foreground text-sm sm:text-base">
				{#each DATA.activities as activity, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<li>{activity}</li>
					</BlurFade>
				{/each}
			</ul>
		</div>
	</section>
	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						Contact
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Feel free to reach out to me on 
						<a href={DATA.contact.social.LinkedIn.url} class="text-blue-500 hover:underline">
							LinkedIn
						</a>.
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
