
import './CardsList.css'
const CardsList = ({ item }) => {


    return (
        <div className='CardsBox'>
            <h4 className="itemTitle">{item.title}</h4>
            <img className="itemImage" src={item.image} alt="" />
            <p>{item.description}</p>
            <p className="paisa">${item.price}</p>
        </div>
    )
}
export default CardsList;