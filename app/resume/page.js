// pages/resume.js
import Link from 'next/link';

export const metadata = {
	title: 'Isaac Lloyd - Resume',
	description: 'isaacclloyd.com',
};

export default function About() {
	return (
		<main className="gap-10 flex items-left flex-col text-xl Aller-Light fade-in mx-auto px-24 pt-20 bg-white text-black">

			<section className="flex text-center flex-col gap-5 border-b border-gray-800 pb-4">
				<h1 className="text-5xl Anth-Regular">ISAAC C. LLOYD</h1>
				<p className=''>
					Orange County, CA
					<a> | </a>
					949-560-3470
					<a> | </a>
					<Link href="mailto:isaac@isaacclloyd.com" className="hover:text-red-900 transition">isaac@isaacclloyd.com</Link>
					<a> | </a>
					<Link href="https://www.linkedin.com/in/isaacll/" className="hover:text-red-900 transition">linkedin/isaacll</Link>
					<a> | </a>
					<Link href="https://github.com/theisaaclloyd/" className="hover:text-red-900 transition">github/theisaaclloyd</Link>
				</p>
			</section>

			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Professional Summary</h1>
				<p className="text-lg mt-2">
					--
				</p>
			</section>

			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Education</h1>
				<div className="flex flex-col text-lg gap-0">
					<p className=""><a className='italic'>Cedarville University</a>, Cedarville OH</p>
					<p className="">Freshman, Graduating May 2027</p>
					<p className="">Major: [Your Major]</p>
				</div>
			</section>

			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Skills</h1>
				<ul className="list-disc pl-8 text-lg mt-2">
					<li>Technical Proficiency: Advanced understanding of electrical, hydraulic, and marine systems.</li>
					<li>Quality Assurance: Rigorous testing and inspection to ensure peak performance and safety.</li>
					<li>Innovation and Customization: Custom solutions for unique installation challenges.</li>
					<li>Project Management: Efficient coordination and completion of long-term projects.</li>
					<li>Client Relations: Managing expectations with professionalism and grace.</li>
					<li>Problem-Solving: Resourceful in devising practical solutions with precision.</li>
					<li>Team Leadership: Effective communication and collaborative work management.</li>
					<li>Customer Service: Providing high-tier, knowledgeable support to clientele.</li>
				</ul>
			</section>



			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Skills</h1>
				<ul className="list-disc pl-8 text-lg mt-2">
					<li>Technical Proficiency: Advanced understanding of electrical, hydraulic, and marine systems.</li>
					<li>Quality Assurance: Rigorous testing and inspection to ensure peak performance and safety.</li>
					<li>Innovation and Customization: Custom solutions for unique installation challenges.</li>
					<li>Project Management: Efficient coordination and completion of long-term projects.</li>
					<li>Client Relations: Managing expectations with professionalism and grace.</li>
					<li>Problem-Solving: Resourceful in devising practical solutions with precision.</li>
					<li>Team Leadership: Effective communication and collaborative work management.</li>
					<li>Customer Service: Providing high-tier, knowledgeable support to clientele.</li>
				</ul>
			</section>



			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Certifications</h1>
				<p className="text-lg mt-2">
					--
				</p>
			</section>


		</main>
	);
}

// separator