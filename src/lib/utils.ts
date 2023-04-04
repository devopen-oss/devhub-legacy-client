import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
export function isLight(color: string) {
	const hex = color.replace('#', '');
	const c_r = parseInt(hex.substring(0, 0 + 2), 16);
	const c_g = parseInt(hex.substring(2, 2 + 2), 16);
	const c_b = parseInt(hex.substring(4, 4 + 2), 16);
	const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
	return brightness > 155;
}
