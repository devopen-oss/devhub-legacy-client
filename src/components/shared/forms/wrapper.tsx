import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	save?: ReactNode;
	title: string;
	subtitle?: string;
}

export default function FormWrapper({
	children,
	title,
	subtitle,
	save
}: Props) {
	return (
		<div className="bg-page-surface rounded-xl border border-page-overlay flex flex-col gap-5">
			<div className="px-6 py-4 border-b border-b-page-overlay">
				<h2 className="mb-1 text-lg font-semibold text-page-text">{title}</h2>
				{subtitle && (
					<span className="text-page-subtle text-sm">{subtitle}</span>
				)}
			</div>
			<div className="px-6 py-4">{children}</div>
			{save && (
				<div className="p-4 border-t border-t-page-overlay justify-end flex">
					{save}
				</div>
			)}
		</div>
	);
}
