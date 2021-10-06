import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {useRef, useState,useEffect} from "react"
import List from "../components/list";
import Form from "../components/form";
import {useDispatch,useSelector} from 'react-redux';
import {setInitialData,addAddress,setFilteringStatus,setFilteredData,deleteAddress} from "../store/actions"


export default function Home() {
  const inputText = useRef(null);
  const addresses = useSelector(state=>state.addresses);
  const appLoadedStatus = useSelector(state=>state.appLoaded);

  const dispatch  =  useDispatch();
  
  const getUsers = ()=>{
    const init =  [
      {
        id:1,
        name:"Aniezt",
        age:50
      },
       {
        id:2,
        name:"Jenny",
        age:23
      },
       {
          id:3,
        name:"Sophie",
        age:2
      }
    ];  

    if(!appLoadedStatus){
        dispatch(setInitialData(init));
         dispatch({
         type:"SET_APP_LOADING_STATUS",
         payload:true
       });
    }

  }

  useEffect(()=>{
    getUsers();
  },[] )


  const getLastId = (data)=>{

    if(data.length > 0){
      return data[0].id +1;
    }else{
      return 1;
    }

  }

  const processSearch = ()=>{
    const value = inputText.current.value
    if(!value) {
      alert("Enter address");
      return;
    }

    let data = [];

    const checker = addresses.find((v)=>v.name.toLowerCase() == value.toLowerCase());
    if(checker) {
      alert("Value already exist");
      return;
    }
    Object.assign(data,addresses);

    data.sort((a, b)=>{
      return b.id - a.id; 
    })

    const lastId = getLastId(data);

    const itemToAdd =  {
      id:lastId,
      name:value,
      age:10
      }

    data.push(itemToAdd);
    
    data.sort((a, b)=>{
      return b.id - a.id; 
    })
   
    // setAddress([...data]);  //update state
    dispatch(addAddress(data));

    inputText.current.value = "";
    dispatch(setFilteringStatus(false));
  }

  const search = ()=>{
    const input =  inputText.current.value;
     
    if(addresses.length > 0 && input){

      dispatch(setFilteringStatus(true));

      const list  = addresses.filter((v)=>{
        return v.name.toLowerCase().includes(input);
      });

      dispatch(setFilteredData(list))
  

    }else{
       dispatch(setFilteringStatus(false));
    }

  }

  const deleteAddressNow =  id =>{

    if(confirm("Do you want to continue")){

        const data = [];
        Object.assign(data,addresses);

        const index = data.findIndex((v)=>v.id == id );
        if(index > -1){
            data.splice(index,1);
            //setAddress(addresses)
            dispatch(deleteAddress(data));
        }
      

    }
   
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Address Hand Book
        </h1>
        <Form inputRef={inputText} searchFn={search}  styles={styles} processSearch={processSearch} />
        <List deleteAddress={deleteAddressNow} />
      </main>

      <footer className={styles.footer}>
      
          Powered by Anietz
       
      </footer>
    </div>
  )
}
