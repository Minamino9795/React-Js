import React, { useState } from 'react';

const UseIncrement = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (

        <div>
            
            <button onClick={() => setCount1(count1 + 1)}>
               Bạn đã click vào tôi {count1} phát rồi
            </button>
            <div><br></br>
       
        <button onClick={() => setCount2(count2 + 1)}>
        Bạn đã bấm mạnh vào tôi {count2} lần rồi
       </button>
      </div>

        </div>
    );
}

export default UseIncrement;
