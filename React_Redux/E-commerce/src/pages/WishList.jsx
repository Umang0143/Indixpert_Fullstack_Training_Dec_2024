import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { removeFromWishlist } from "../reduxs/WishlistSlice";
import { addToCart } from "../reduxs/CartSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state) => state.wishlist.items
  );

  if (items.length === 0) {
    return (
      <Card className="p-5 text-center shadow-sm">
        <h3>Your Wishlist is empty</h3>
        <p className="text-muted">Add items to see them here</p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </Card>
    );
  }

  return (
    <>
      <h3>My Wishlist</h3>

      {items.map((item) => (
        <Card key={item.id} className="p-3 mb-3">
          <h5>{item.title}</h5>
          <p>₹ {item.price.toFixed(2)}</p>

          <Button
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() =>
              dispatch(removeFromWishlist(item.id))
            }
          >
            Remove
          </Button>
        </Card>
      ))}
    </>
  );
};

export default Wishlist;
