import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
import Items from "../accessories/accessories.js";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lora Piana",
      subTitle: "Luxury Italian Fabric",
      price: 1200,
    },
    {
      image:
        "https://ramrajcotton.in/cdn/shop/files/88A8923_600x600_crop_center.jpg?v=1694514179",
      title: "White Pants",
      subTitle: "Elegant Casual Wear",
      price: 75,
    },
    {
      image:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bidha Glasses",
      subTitle: "Stylish Sunglasses",
      price: 250,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1692809752577-72da691a28ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Brown Bomber",
      subTitle: "Vintage Leather Jacket",
      price: 320,
    },
    {
      image:
        "https://images.unsplash.com/photo-1638158980051-f7e67291efed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Leather Shoes",
      subTitle: "Classic Formal Shoes",
      price: 180,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689565524694-88720c282271?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Grey T-Shirt",
      subTitle: "Comfortable Cotton Tee",
      price: 35,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
