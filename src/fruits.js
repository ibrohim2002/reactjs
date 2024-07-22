import React from "react";
import Card from "./card";
import "./fruit.css";

const data = [
  {
    title: "Pineapple",
    image:
      "https://images.pexels.com/photos/139229/pexels-photo-139229.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Avocado",
    image:
      "https://images.pexels.com/photos/142890/pexels-photo-142890.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Apple",
    image:
      "https://images.pexels.com/photos/575610/pexels-photo-575610.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Lemon",
    image:
      "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Strawberry",
    image:
      "https://images.pexels.com/photos/934055/pexels-photo-934055.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Kiwi",
    image:
      "https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Cherry",
    image:
      "https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Watermelon",
    image:
      "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Coconut",
    image:
      "https://images.pexels.com/photos/3986706/pexels-photo-3986706.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Banana",
    image:
      "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Pomegegranate",
    image:
      "https://images.pexels.com/photos/4226732/pexels-photo-4226732.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Orange",
    image:
      "https://images.pexels.com/photos/1738520/pexels-photo-1738520.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Blueberry",
    image:
      "https://images.pexels.com/photos/583837/pexels-photo-583837.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Lime",
    image:
      "https://images.pexels.com/photos/1047261/pexels-photo-1047261.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Grape",
    image:
      "https://images.pexels.com/photos/197910/pexels-photo-197910.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

class Fruits extends React.Component {
  render() {
    return (
      <div>
        <h1>Fruits</h1>
        <div className="fruits">
          {data.map((value) => {
            return <Card items={value} />;
          })}
        </div>
      </div>
    );
  }
}

export default Fruits;
