import React from 'react';
import Card from './Card';
import { data } from './Data/Data'
const Travel = () => {
    return (
        <div class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            
        <div class="flex flex-wrap -m-4">
            {
                data.map(d => <Card travel={d}/>)
            }
        </div>
        </div>
        </div>
    );
};

export default Travel;