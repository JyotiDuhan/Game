import React, { useContext } from 'react';
import { ContestContext } from './Game';

export default function Winner() {
	const contestants = useContext(ContestContext);
	return (
		<div>
			<span>Congratulations {contestants}!!!</span>
		</div>
	)
}