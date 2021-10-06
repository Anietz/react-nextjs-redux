
export default function Form({inputRef,searchFn,styles,processSearch}){
    return (
        <div>
          <input onKeyUp={searchFn} ref={inputRef} className={styles.searchInput} type="text" placeholder="Enter search message" />
          <button onClick={processSearch} className={styles.searchButton} >Add</button>
        </div>
    )
}


