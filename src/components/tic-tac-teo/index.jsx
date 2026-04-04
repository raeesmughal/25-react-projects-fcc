

import { useEffect, useState } from 'react';
import './style.css';

function Square({ value, onClick }) {
    return <button className='square' onClick={onClick}>{value}</button>
}



export default function TicTacTeo() {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }

        return null;
    }

    function handleClick(getCurrentSquare) {
        let copySquares = [...squares];
        
        if (getWinner(squares) || squares[getCurrentSquare]) return;
        copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(copySquares);
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus(`This is a Draw! Please restart the game`);
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`);
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }

    }, [squares, isXTurn])

    return (
        <div className="wrapper">
            <div className="tic-tac-teo-container">
                <div className="row">
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>

            </div>
                <h1>{status}</h1>
        </div>
    )
}