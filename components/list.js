
import {useSelector} from "react-redux";

export default function List({deleteAddress}){
    const addresses = useSelector(state=>state.addresses);
    const filteredAddress = useSelector(state=>state.filteredAddress);
    const filterStatus = useSelector(state=>state.filterStatus);

    const data = !filterStatus ? addresses : filteredAddress;

    return (
        <ul className="list">
        { data.map((value,i)=>{  
              return (
                   <li key={i} > <span  className="list-name">{value.name} <i>{value.age} year{value.age > 1 ?'s':''} </i> </span>  
                   <span onClick={()=>{deleteAddress(value.id)}} className="list-delete" >x</span> </li>
             )            
        }) }

         </ul>
    )
}


