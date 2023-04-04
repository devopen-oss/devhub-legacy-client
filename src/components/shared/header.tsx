import { Button } from '../ui/button';
import { GithubLogo } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { useState, useEffect, useCallback } from 'react';
import Logo from './logo';

export default function Header() {
	const [hideHeader, setHideHeader] = useState(false);

	useEffect(() => {
		const threshold = 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}
			setHideHeader(scrollY > lastScrollY ? true : false);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [hideHeader]);

	return (
		<header
			className={cn(
				'max-h-32 sticky top-0 py-3 px-4 h-full bg-page-surface border-b duration-500 border-b-page-overlay flex justify-between items-center z-[999]',
				hideHeader && '-translate-y-24'
			)}
		>
			<div className='flex items-center gap-2'>
				<Logo /> <span className='font-semibold text-lg'>Devhub</span>
			</div>
			<div>
				<Button
					className='hidden lg:flex'
					leftIcon={<GithubLogo weight='fill' className='h-5 w-5' />}
				>
					Login with GitHub
				</Button>
				<Button className='lg:hidden flex'>Login</Button>
			</div>
		</header>
	);
}
