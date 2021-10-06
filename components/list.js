
import {useSelector} from "react-redux";

export default function List({deleteAddress}){
    const addresses =useSelector(state=>state.addressReducer.addresses);
    const filteredAddress = useSelector(state=>state.addressReducer.filteredAddress);
    const filterStatus = useSelector(state=>state.addressReducer.filterStatus);

    const data = !filterStatus ? addresses : filteredAddress;

    return (
        <ul className="list">
        { data.map((value,i)=>{  
              return (
                   <li key={i} > <span  className="list-name">{value.name}</span>  
                   <span onClick={()=>{deleteAddress(value.id)}} className="list-delete" >x</span> </li>
             )            
        }) }

         </ul>
    )
}


