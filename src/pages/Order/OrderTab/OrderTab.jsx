import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;