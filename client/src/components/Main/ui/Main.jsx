import FAQ from '@/components/FAQ/ui/FAQ';
import For from '@/components/For/ui/For';
import Hero from '@/components/Hero/ui/Hero';
import Participation from '@/components/Participation/ui/Participation';
import Program from '@/components/Program/ui/Program';
import Skills from '@/components/Skills/ui/Skills';
import Team from '@/components/Team/ui/Team';
import Testimonials from '@/components/Testimonials/ui/Testimonials';

const Main = () => {
	return (
		<main className='main'>
			<Hero />
			<For />
			<Team />
			<Program />
			<Participation />
			<Skills />
			<Testimonials />
			<FAQ />
		</main>
	);
};

export default Main;
