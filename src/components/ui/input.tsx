import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
	return (
		<input
			className={cn(
				'flex items-center w-full px-3 py-2 rounded-lg border bg-transparent outline-none placeholder:text-sm placeholder:text-page-muted',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';

export { Input };
