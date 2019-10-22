const Food = require("../models/Food");
const FoodCat = require("../models/FoodCat");
const FoodTag = require("../models/FoodTag");
const uuid4 = require("uuid/v4");
const ObjectId = require("mongoose").Types.ObjectId;

const foodCat1 = new FoodCat({
  _id: new ObjectId(),
  name: "Pizza",
  isPinned: false
});
const foodCat2 = new FoodCat({
  _id: new ObjectId(),
  name: "Spaghetti",
  isPinned: false
});
const foodCat3 = new FoodCat({
  _id: new ObjectId(),
  name: "Maincourses",
  isPinned: false
});
const foodCat4 = new FoodCat({
  _id: new ObjectId(),
  name: "BestSeller",
  isPinned: true
});

const foodTag1 = new FoodTag({
  _id: new ObjectId(),
  name: "Vegan"
});
const foodTag2 = new FoodTag({
  _id: new ObjectId(),
  name: "Vegitarian"
});
const foodTag3 = new FoodTag({
  _id: new ObjectId(),
  name: "Seafood"
});
const foodTag4 = new FoodTag({
  _id: new ObjectId(),
  name: "White meat"
});
const foodTag5 = new FoodTag({
  _id: new ObjectId(),
  name: "Red meat"
});
const food = new Food({
  _id: new ObjectId(),
  name: "Spaghetti Allo Scoglio",
  price: 13.8,
  desc: "Sauteed assorted seafood, garlic, chilli & parsley in tomato sauce",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/spaghetti-allo-scoglio.png",
  sizes: [
    {
      name: "Small",
      qty: "320",
      unit: "g",
      selected: true,
      price: 0
    },
    {
      name: "Medium",
      qty: "380",
      unit: "g",
      selected: false,
      price: 1
    },
    {
      name: "Medium",
      qty: "450",
      unit: "g",
      selected: false,
      price: 2
    }
  ],
  toppings: [
    {
      name: "Seafood",
      selected: true
    },
    {
      name: "Spaghetti",
      selected: true
    },
    {
      name: "Prawn",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag3._id],
  category: [foodCat2._id, foodCat4]
});

const food1 = new Food({
  _id: new ObjectId(),
  name: "Pizza Margherita (Large)",
  price: 13.8,
  desc: "Mozzarella cheese, basil, oregano & tomato sauce",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/pizza-margherita.png",
  sizes: [
    {
      name: "Small",
      qty: "320",
      selected: true,
      unit: "g",
      price: 0
    },
    {
      name: "Medium",
      qty: "380",
      selected: false,
      unit: "g",
      price: 2
    },
    {
      name: "Medium",
      qty: "450",
      selected: false,
      unit: "g",
      price: 3
    }
  ],
  toppings: [
    {
      name: "Seafood",
      selected: true
    },
    {
      name: "Chicken",
      selected: true
    },
    {
      name: "Prawn",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag1._id],
  category: [foodCat1._id, foodCat4]
});

const food2 = new Food({
  _id: new ObjectId(),
  name: "Pizza Ortolano (Large)",
  price: 13.8,
  desc: "Mozzarella cheese, vegetables & tomato sauce",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/pizza-ortolano.png",
  sizes: [
    {
      name: "Small",
      qty: "320",
      unit: "g",
      selected: true,
      price: 0
    },
    {
      name: "Medium",
      qty: "450",
      unit: "g",
      selected: false,
      price: 2
    }
  ],
  toppings: [
    {
      name: "Anchovies",
      selected: true
    },
    {
      name: "Parma Ham",
      selected: true
    },
    {
      name: "Salmon",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  category: [foodCat1._id, foodCat4],
  tags: [foodTag1._id]
});

const food3 = new Food({
  _id: new ObjectId(),
  name: "Pizza Frutti Di Mare",
  price: 13.8,
  desc: "Mozzarella cheese, seafood, garlic, chili & tomato sauce.",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/_0019_pizza-frutti-di-marejpg.png",
  sizes: [
    {
      name: "Small",
      qty: "320",
      unit: "g",
      selected: true,
      price: 0
    },
    {
      name: "Medium",
      qty: "450",
      unit: "g",
      selected: false,
      price: 2
    }
  ],
  toppings: [
    {
      name: "Anchovies",
      selected: true
    },
    {
      name: "Mussle",
      selected: true
    },
    {
      name: "Prawn",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag2._id],
  category: [foodCat3._id, foodCat4]
});

const food4 = new Food({
  _id: new ObjectId(),
  name: "Spaghetti Aglio Olio E Peperoncino",
  price: 13.8,
  desc:
    "Great flavors recipe with golden sautéed garlic, olive oil, chilli & parsley",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/spaghetti-aglio-olio-e-peperoncino.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Beef",
      selected: true
    },
    {
      name: "Prawn",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag1._id, foodTag2._id],
  category: [foodCat2._id, foodCat4]
});

const food5 = new Food({
  _id: new ObjectId(),
  name: "Spaghetti Alla Napoletana",
  price: 13.8,
  desc: "Tossed in tomato sauce with garlic & basil on top parmesan",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/spaghetti-alla-napoletana.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Broccoli",
      selected: true
    },
    {
      name: "Prawn",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag1._id, foodTag2._id],
  category: [foodCat2._id, foodCat4]
});

const food6 = new Food({
  _id: new ObjectId(),
  name: "Spaghetti Alla Vongole ",
  price: 13.8,
  desc:
    "Clams cooked in pan with garlic, chilli, parsley, cherry tomatoes in white wine",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/_0028_spaghetti-alla-vongolejpg.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Clam",
      selected: true
    },
    {
      name: "Anchovies",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tag: [foodTag3._id],
  category: [foodCat3._id, foodCat4]
});

const food7 = new Food({
  _id: new ObjectId(),
  name: "Petto Di Pollo Alla Milanese",
  price: 13.8,
  desc: "Pan fried Chicken breast, Milanese style served with French fries",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/petto-di-pollo-alla-milanese.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Spaghetti Aglio Olio E Peperoncino",
      selected: true
    },
    {
      name: "Spahgetti Alla Napoletana",
      selected: true
    },
    {
      name: "Penne Alla Arrabiata",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  tags: [foodTag4._id],
  category: [foodCat3._id, foodCat4]
});
const food8 = new Food({
  _id: new ObjectId(),
  name: "Braciola di maiale alla griglia ",
  price: 13.8,
  desc:
    "Grilled pork chops marinated in rosemary & olive oil served with vegetables",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/braciola-di-maiale-alla-griglia.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Spaghetti Aglio Olio E Peperoncino",
      selected: true
    },
    {
      name: "Spahgetti Alla Napoletana",
      selected: true
    },
    {
      name: "Penne Alla Arrabiata",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  category: [foodCat3._id, foodCat4],
  tags: [foodTag5._id]
});

const food9 = new Food({
  _id: new ObjectId(),
  name: "Scaloppine Con Gamberi",
  price: 13.8,
  desc:
    "Pork tenderloin & shrimp cooked in cream sauce with garlic, shallot served spinach & green bean",
  status: 1,
  imgUrl:
    "https://static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/_0025_scaloppine-con-gamberijpg.png",
  sizes: [
    {
      name: "Small",
      qty: "",
      unit: "",
      selected: true,
      price: 1
    }
  ],
  toppings: [
    {
      name: "Spaghetti Aglio Olio E Peperoncino",
      selected: true
    },
    {
      name: "Spahgetti Alla Napoletana",
      selected: true
    },
    {
      name: "Penne Alla Arrabiata",
      selected: true
    }
  ],
  extras: [
    {
      name: "Seafood",
      selected: false,
      price: 5
    },
    {
      name: "Spaghetti",
      selected: false,
      price: 1
    },
    {
      name: "Prawn",
      selected: false,
      price: 2.5
    }
  ],
  category: [foodCat3._id, foodCat4],
  tags: [foodTag3._id, foodTag5._id]
});

FoodCat.create([foodCat1, foodCat2, foodCat3, foodCat4], err => {
  if (err) {
    console.error("An error is occured", err);
    return;
  }
  FoodTag.create(
    [foodTag1, foodTag2, foodTag3, foodTag4, foodTag5],
    foodTagErr => {
      if (foodTagErr) {
        console.error("An error is occured", foodTagErr);
        return;
      }
      Food.create(
        [food, food1, food2, food3, food4, food5, food6, food7, food8, food9],
        foodErr => {
          if (foodErr) {
            console.error("An error is occured", foodErr);
            return;
          }
        }
      );
    }
  );
});
