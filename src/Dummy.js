import React from 'react';

const Dummy = () => {

    const arr = [{
        name: 'Abhi',
        job: 'tcs'
    },
    {
        name: 'Manyu',
        job: 'tcs'
    },{
        name: 'Ram',
        job: 'tcs'
    },{
        name: 'Shayam',
        job: 'tcs'
    }
];
    return(
        <>
        {
            arr.map((data)=>(

                <div>
                    <p>{data.name}</p>
                    <p>{data.job}</p>
                </div>
            )
            )
        }
        </>
    );
}

export default Dummy;