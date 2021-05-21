import "./css/main.css";
import React from "react";
import propTypes from "prop-types";
//import Item from "./Item";

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;

const item = {
  brand: "Роберто Сафарелли",
  title: "Пальтецо",
  description: "Мужское пальтецо синего цвета",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price:  "20",
  currency: '₿',
};

class ShopItemClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {item.currency} {parseFloat(item.price).toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

// ShopItemClass.propTypes = {
//   item: propTypes.instanceOf(Item).isRequired,
// };

ShopItemClass.propTypes = { item: propTypes.object.isRequired };