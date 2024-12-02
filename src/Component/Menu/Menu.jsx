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
            

            <div>
                {
                    pizza.map( pizzas =><MenuCard key={pizzas} pizzas={pizzas}></MenuCard> )
                }
            </div>
        </div>
    );
};

export default Menu;