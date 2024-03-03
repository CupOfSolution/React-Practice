import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Data } from './Data';

const Practice3 = () => {
    const [buttonTexts, setButtonTexts] = useState('');
    const [clickedIndex, setClickedIndex] = useState('');

    const handleClick = (index) => {
        setButtonTexts(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        setClickedIndex(index);
    }

    return (
        <div className="flex justify-center items-center h-screen space-x-5">
            <div>{clickedIndex !== '' && <p>Clicked Index: {clickedIndex}</p>}</div>
            {Data.map((element, index) => (
                <Button key={index} variant="contained" color="primary" onClick={() => handleClick(index)}>
                    {buttonTexts[index] ? element.b : element.a}
                </Button>
            ))}
        </div>
    );
}

export default Practice3;
