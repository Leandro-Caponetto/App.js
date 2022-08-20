import {  useState } from "react";
import ItemList from "../ItemList";
import { Users } from "../Users";



function Search() {

    const [query, setQuery] = useState("");
    const Search = (productos) =>{
        return productos.filter(producto => producto.category.toLowerCase().includes(query));
        
    };

  return (
        <div className="app ">
            <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <ItemList productos={Search(Users)}/>
            

            
            {/* <ul className="list">
                {Users.filter((asd) =>
                asd.category.toLowerCase().includes(query)
                ).map((user) => (
                <li className="listItem" key={user.id}>
                    {user.category}
                </li>
                ))}
            </ul> */}
        </div>
        
  )
}
export default Search


