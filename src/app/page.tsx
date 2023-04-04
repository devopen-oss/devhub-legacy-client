'use client';

import { Button } from '@/components/ui/button';
import { Sparkle } from '@phosphor-icons/react';

export default function Page() {
	return (
		<section className="px-4 py-24 mx-auto max-w-7xl">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
				<div className='flex justify-center mb-3'>
					<span className='px-3 py-1 w-auto text-page-pine flex items-center bg-page-pine/10 hover:bg-page-pine/20 rounded-full'>
						<Sparkle className='mr-2' weight='duotone' /> This website is
						work-in-progress, join us
					</span>
				</div>
				<h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-page-text to-page-subtle">
					The largest developer community
				</h1>
				<p className="px-0 mb-6 text-lg text-page-subtle md:text-xl lg:px-24">
					We provide a place for developers to share their work with the world,
					and for the world to share their work with developers.
				</p>
				<div className="flex flex-col lg:flex-row gap-3 w-full justify-center">
					<Button size={'lg'}>Get started</Button>
					<Button size={'lg'} variant="ghost">
						Explore posts
					</Button>
				</div>
			</div>
		</section>
	);
}
