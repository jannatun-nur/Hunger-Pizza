import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";


const Menu = () => {

const [pizza , setPizza ] = useState([])

useEffect( ()=>{
    fetch('menu.json')
    .then( res => res.json())
    .then(data => setPizza(data))
},[])

    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    pizza.map( pizzas =><MenuCard key={pizzas} pizzas={pizzas}></MenuCard> )
                }
            </div>
        </div>
    );
};

export default Menu;