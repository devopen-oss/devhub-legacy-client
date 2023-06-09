import { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M0 0h24v24H0z" stroke="none" />
			<path
				d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM8 11H6l-.117.007A1 1 0 006 13h2l.117-.007A1 1 0 008 11zm4-3H6l-.117.007A1 1 0 006 10h6l.117-.007A1 1 0 0012 8zm-2-3H6l-.117.007A1 1 0 006 7h4l.117-.007A1 1 0 0010 5z"
				fill="currentColor"
				stroke="none"
			/>
		</svg>
	);
}
