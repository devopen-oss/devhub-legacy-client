import FormWrapper from '@/components/shared/forms/wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
	return (
		<div className="max-w-3xl mx-auto my-12">
			<FormWrapper
				title="Submit a new post"
				subtitle="Please make sure to follow post submit guidelines, otherwise you could get suspended from our services"
				save={
					<Button loading variant={'secondary'} loadingMessage='Saving...'>
						Save
					</Button>
				}
			>
				<Label>Title</Label>
				<Input
					placeholder='The title of your post, e.g: How to extend theme on TailwindCSS'
					className='border-page-overlay focus:border-page-muted'
				/>
			</FormWrapper>
		</div>
	);
}
