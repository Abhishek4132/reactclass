
export const ListParentOrdered =()=>{
    return(
         <ol>
           <ListItems/>
         </ol>
    );
};


export const ListParentUnordered = ()=>{
    return( 
    <ul>
        <ListItems/>
    </ul>
    );
};

const ListItems = () => {
    return(
    <div>
        <li>banana</li>
        <li>mango</li>
    </div>
    );
};