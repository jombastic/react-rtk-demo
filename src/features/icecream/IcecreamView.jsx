import { useSelector } from "react-redux";

const IcecreamView = () => {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button>Order ice creams</button>
            <button>Restock ice creams</button>
        </div>
    );
}

export default IcecreamView;