import React, { useState } from 'react';


function Onchange() {
    const [getInputs, setInputs] = useState({});
    const [getRank, setRank] = useState('');
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]:value}));

    }

    const handleSubmit = () => {
        const avg= (Object.values(getInputs).reduce( (total, value) =>  total + Number(value), 0))/(Object.values(getInputs).length);
        console.log(avg)
        if(avg >= 9) {
            setRank('Xuat sac');
        } else if(avg >= 8) {
            setRank('Gioi');
        } else if(avg >= 7) {
            setRank('Kha');
        } else if(avg >= 6) {
            setRank('TB');
        } else {
            setRank('Yeu');
        }
    }
    return (
        <>
            <form action={handleSubmit}>
                <div>
                    <label htmlFor="diemToan"></label>
                    <input name="diemToan" type="number" onChange = {handleChange}/>
                </div>
                <div>
                    <label htmlFor="diemLy"></label>
                    <input name="diemLy" type="number" onChange = {handleChange}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <h1>Xep hang {getRank}</h1>
        </>
    )
}

export default Onchange;