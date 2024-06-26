// pages/resume.js
import Link from 'next/link';

export const metadata = {
	title: 'Isaac Lloyd - Resume',
	description: 'isaacclloyd.com',
};

export default function About() {
	return (
		<main className="gap-10 flex items-left flex-col text-xl Aller-Light fade-in mx-auto px-24 py-20 bg-white text-black">

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
				<div className="text-lg mt-2">
					<div className="mb-4">
						<h2 className="font-bold inline">Cedarville University <span className="italic">- Cedarville, OH</span></h2>
						<p>BS Cyber Operations, BS Computer Science, Minors: Bible</p>
						<p>GPA: 3.48 - Expected Graduation: May 2027</p>
					</div>
					<ul className="list-disc pl-8">
						<li>Cedarville University is one of 18 schools in America designated for NCAE-CO (Cyber Operations) and NCAE-CD (Cyber Defence) by The National Centers of Academic Excellence in Cybersecurity (NCAE-C).</li>
						<li>Relevant Coursework: Object-Oriented Programming with C++, Digital Logic Design.</li>
					</ul>
				</div>
			</section>

			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Work history</h1>
				<div className="text-lg mt-2">
					<h2 className="font-bold inline">Nordhavn Yachts <span className="italic">- Dana Point, CA</span></h2>

					<p>Commissioning Technician (Aug 2022 - Present)</p>
					<ul className="list-disc pl-8">
						<li>Skilled in commissioning luxury yachts by conducting system-wide tests and quality checks, servicing extensive electrical systems, plumbing, bilge systems, and automated controls, while ensuring all systems meet ABYC standards.</li>
						<li>Demonstrated exceptional problem-solving abilities by designing and implementing creative solutions for custom installations of furniture, appliances, and lighting fixtures, using bespoke methods to adapt to unique yacht designs and client specifications.</li>
						<li>Worked constructively with a small team of technicians through the multi-month commissioning process to ensure the flawless functionality of every onboard system without external guidance.</li>
						<li>Experienced in navigating high-pressure environments by delivering exceptional customer facing service to high net worth clients, ensuring their satisfaction throughout the commissioning process.</li>
					</ul>
				</div>
			</section>

			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Achievements</h1>
				<div className="text-lg mt-2">
					<h2 className="font-bold inline">Boy Scouts of America - Troop 12 <span className="italic">- San Juan Capistrano, CA</span></h2>
					<p>Eagle Scout Rank (2015 - 2023)</p>
					<ul className="list-disc pl-8">
						<li>Over 150 hours of community service for various Orange County based organizations.</li>
						<li>Served in 4 important roles in Troop 12, including assistant patrol leader, patrol leader, and assistant senior patrol leader.</li>
						<li>As patrol leader, led an organized patrol of 20+ boys. Led weekly meetings and planned troop campouts, meal plans, and activities.</li>
						<li><strong>Eagle Scout Rank</strong> (2023) - Recognized by U.S. House of Representatives, California State Assembly, and California State Senate. Eagle is the highest rank in the scouting program, as it requires a great amount of effort to complete. Only approx. 4% of scouts achieve Eagle.</li>
					</ul>
				</div>
				<div className="text-lg mt-2">
					<h2 className="font-bold inline">The National Centers of Academic Excellence in Cybersecurity <span className="italic">- Cedarville, OH</span></h2>
					<p>VIVID Cyber Competition (Apr 2024)</p>
					<ul className="list-disc pl-8">
						<li>With three other students on the team, we ranked 23rd nationally, out of 200 teams.</li>
						<li>Three day CTF competition, required knowledge to implement offensive and defensive cyber techniques.</li>
					</ul>
				</div>
			</section>



			<section className="flex text-left flex-col gap-5">
				<h1 className="text-2xl font-bold">Skills</h1>
				<div className="text-lg mt-2">
					<h2 className="font-bold">Proficient in:</h2>
					<ul className="list-disc pl-8">
						<li>C++</li>
						<li>Javascript</li>
						<li>Python</li>
						<li>Node.js</li>
						<li>React.js</li>
						<li>Next.js</li>
						<li>Git</li>
						<li>Github</li>
					</ul>
				</div>
				<div className="text-lg mt-2">
					<h2 className="font-bold">Certifications:</h2>
					<ul className="list-disc pl-8">
						<li>ABYC General (In Progress)</li>
					</ul>
				</div>
			</section>


		</main>
	);
}

// separator