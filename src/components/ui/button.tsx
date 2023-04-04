import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Ring } from '@uiball/loaders';
import { cn } from '@/lib/utils';
import { Icon } from '@phosphor-icons/react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-full text-page-base text-sm font-semibold transition-colors outline-none disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
	{
		variants: {
			variant: {
				solid: 'bg-page-pine hover:bg-opacity-70 active:bg-opacity-60',
				secondary:
					'bg-white/5 hover:bg-white/10 active:bg-white/20 !text-page-text',
				danger: 'bg-page-love hover:bg-opacity-70',
				outline:
					'bg-white/0 hover:bg-white/5 active:bg-white/10 border border-white/10 !text-page-text',
				ghost:
					'bg-transparent hover:bg-white/5 active:bg-white/10 !text-page-text',
				link: 'bg-transparent hover:bg-transparent text-page-text hover:underline hover:text-page-subtle'
			},
			size: {
				default: 'py-2 px-4',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8'
			}
		},
		defaultVariants: {
			variant: 'solid',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
	loadingMessage?: string;
	leftIcon?: React.ReactNode;
	icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			children,
			loading,
			loadingMessage,
			leftIcon,
			icon,
			...props
		},
		ref
	) => {
		return (
			<button
				disabled={loading || props.disabled}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{loading ? (
					<div className='mr-2'>
						<Ring
							color={variant?.toString() !== 'solid' ? 'white' : 'black'}
							size={16}
						/>
					</div>
				) : (
					leftIcon && <div className='mr-2'>{leftIcon}</div>
				)}
				{loading ? loadingMessage ?? children : children}
				{icon && <div className='mr-2'>{icon}</div>}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
