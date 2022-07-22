/* if you have two function components instead of class 
components, you don’t even need to use props. 
You can do something like the following:*/

import React from 'react';

function Parent(){
    const data = 'Data from parent';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}
export default Parent