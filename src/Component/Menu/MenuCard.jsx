

const MenuCard = ( {pizzas}) => {

    const {name, image} = pizzas;
    return (
        <div>
        <p> {name} </p>
        <img src={image} />
            
        </div>
    );
};

export default MenuCard;