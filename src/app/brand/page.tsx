'use client';

import { colorArray } from '@/lib/constants';
import { cn, isLight } from '@/lib/utils';
import { Clipboard, Palette } from '@phosphor-icons/react';
import { toast } from 'sonner';

export default function Page() {
	const copyColor = (color: string) => {
		toast.success(`You've copied the color ${color}`);
		navigator.clipboard.writeText(color);
	};
	return (
		<div className="flex flex-col gap-5">
			<div className="p-6">
				<h1 className="mb-3 text-4xl font-extrabold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-page-text to-page-subtle">
					Our branding
				</h1>
				<p className="text-lg text-page-subtle md:text-xl">
					i don't know what to put here, later maybe
				</p>
			</div>
			<div className="bg-page-surface">
				<div className="text-left px-6 py-10 flex gap-10 flex-wrap justify-between items-center">
					<h3 className='text-2xl font-bold flex items-center'>
						Color <span className='text-page-gold mx-1'>palette</span>
						<Palette weight='duotone' className='text-page-gold' />
					</h3>
					<div className='flex gap-5 flex-wrap'>
						{colorArray.map((color, __) => (
							<div
								title={color.name}
								style={{
									backgroundColor: color.hex
								}}
								onClick={() => copyColor(color.hex)}
								className="h-12 cursor-pointer w-12 rounded-full ring-1 ring-white/25 hover:ring-4 duration-150 group flex justify-center"
							>
								<Clipboard
									weight='duotone'
									className={cn(
										'group-hover:opacity-100 group-active:-rotate-12 duration-150 opacity-0 h-5 w-5 flex justify-center my-auto',
										isLight(color.hex) ? 'text-page-base' : 'text-page-text'
									)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
