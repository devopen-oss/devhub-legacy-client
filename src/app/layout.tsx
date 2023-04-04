'use client';

import { client } from '@/lib/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans as NextFont } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import Header from '@/components/shared/header';

import '@/styles/globals.css';

export const metadata: Metadata = {
	themeColor: '#3e8fb0',
	description:
		'We provide a place for developers to share their work with the world, and for the world to share their work with developers.',
	openGraph: {
		images: [
			{
				url: '/favicon.ico'
			}
		]
	}
};

const font = NextFont({
	subsets: ['latin']
});

export default function RootLayout({
	children
}: {
	children: ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<title>DevHub · Developer hub</title>
			</head>
			<body
				className={cn(
					'bg-page-base selection:bg-page-highlightHigh/50 selection:text-page-text text-page-text',
					font.className
				)}
			>
				<ApolloProvider client={client}>
					<Header />
					{children}
					<Toaster
						theme='dark'
						toastOptions={{
							style: {
								backgroundColor: '#393552',
								borderColor: '#6e6a86'
							}
						}}
						expand
					/>
				</ApolloProvider>
			</body>
		</html>
	);
}
