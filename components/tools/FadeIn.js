"use client";

import { useTrail, a } from '@react-spring/web';
import React, { useState, useEffect } from 'react';

const FadeIn = ({ children, className }) => {
	const [open, setOpen] = useState(false);
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 2000, friction: 600 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 10,
		height: open ? 100 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

	useEffect(() => {
		setOpen(true);
	}, []);

	return (
		<div className={className}>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} className="trailsText" style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
};

export default FadeIn;