import React from "react";
import FoodCard from "./FoodCard";
import { Row } from "antd";
const foodList = [
  {
    uuid: "prod-01",
    name: "Lasagna Alla Bolognese",
    price: "17.5",
    desc:
      "Layers of pasta with Bolognese sauce and cream sauce, baked crispy in our wood fired oven with mozzarella",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/lasagna-alla-bolognese.png"
  },
  {
    uuid: "prod-02",
    name: "Pizza Margherita (Large) ",
    price: "13.5",
    desc: "Mozzarella cheese, basil, oregano & tomato sauce",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/pizza-margherita.png"
  },
  {
    uuid: "prod-03",
    name: "Tagliatelle Al Funghi porcini ",
    price: "13.5",
    desc: "Fettuccine tossed with mushroom cream sauce on top parmesan",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/tagliatelle-al-funghi.png"
  },
  {
    uuid: "prod-04",
    name: "Tagliatelle Nere Con Calamari E Vongole ",
    price: "13.5",
    desc:
      "Squid ink fettuccine tossed in clams, squid & cherry tomatoes sauteed in white wine sauce",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/tagliatelle-nere-con-calamari-e-vongole.png"
  },
  {
    uuid: "prod-05",
    name: "Calamari Alla Grigliata ",
    price: "13.5",
    desc:
      "Grilled squid marinated in garlic, olive oil & parsley served mashed potato",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/calamari-alla-grigliata.png"
  },
  {
    uuid: "prod-06",
    name: "Petto Di Pollo Alla Milanese",
    price: "13.5",
    desc: "Pan fried Chicken breast, Milanese style served with French fries",
    imgUrl:
      "//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/petto-di-pollo-alla-milanese.png"
  }
];

export const CardList = ({ props }) => {
  return (
    <Row className="container">
      {foodList.map(food => (
        <FoodCard key={food.uuid} food={food} />
      ))}
    </Row>
  );
};
export default CardList;
