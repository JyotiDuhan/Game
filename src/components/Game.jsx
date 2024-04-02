import { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import Winner from './Winner';
import reset from "../icons/reset.svg";

export const ContestContext = createContext(null);
function Square({value, onSquareClick}){
	return (
		<div className='square' onClick={onSquareClick}>
			<span>{value}</span>
		</div>
	)
}

export default function Board(){
	let navigate = useNavigate();
	const [val, setValue] = useState(Array(9).fill(null));
	const [addVal, setAddVal] = useState('X');
	const [winner, setWinner] = useState('');
	// let winner = '';

	function insertVal(i) {
		console.log(i)
		if(winner) return;

		let cloneArr;
		cloneArr = val.slice();
		if(!val[i]) {
			cloneArr[i] = addVal;
			setValue(cloneArr);
		}
		
		if(addVal === 'X') {
			setAddVal('O');
		} else {
			setAddVal('X');
		}

		let winnerr = DeclareWinner(cloneArr);
		if(winnerr) {
			setWinner(winnerr);
			// navigate('/winner');
		}
	}

	function resetBoard() {
		let arr = val.slice();
		setValue(Array(9).fill(null));
		setWinner('');
	}

	function DeclareWinner(cloneArr) {
		let matchingArray = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];
		for(let i = 0; i < matchingArray.length; i++) {
			let [a,b,c] = matchingArray[i];
			if(cloneArr[a] && cloneArr[a] === cloneArr[b] && cloneArr[a] === cloneArr[c]){
				return cloneArr[a];
			}
		}
	}

	return (
		<ContestContext.Provider value={winner}>
			<div>
				<Link to='/aboutus' className='about-link'>About the game</Link>
				{winner && <Winner />}
				<div className='main-container'>
					<div className='board-wrap'>
						<div className='board'>
							<Square onSquareClick={() => insertVal(0)} value={val[0]} />
							<Square onSquareClick={() => insertVal(1)} value={val[1]} />
							<Square onSquareClick={() => insertVal(2)} value={val[2]} />
						</div>
						<div className='board'>
							<Square onSquareClick={() => insertVal(3)} value={val[3]} />
							<Square onSquareClick={() => insertVal(4)} value={val[4]} />
							<Square onSquareClick={() => insertVal(5)} value={val[5]} />
						</div>
						<div className='board'>
							<Square onSquareClick={() => insertVal(6)} value={val[6]} />
							<Square onSquareClick={() => insertVal(7)} value={val[7]} />
							<Square onSquareClick={() => insertVal(8)} value={val[8]} />
						</div>
					</div>
					{/*<button onClick={() => resetBoard()}>Reset</button>*/}
					<img src={reset} className='reset' onClick={() => resetBoard()} />
				</div>
			</div>
		</ContestContext.Provider>
	)
}