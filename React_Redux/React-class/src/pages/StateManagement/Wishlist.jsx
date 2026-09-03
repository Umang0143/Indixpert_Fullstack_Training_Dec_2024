import { useStore } from "../../context/StoreProvider";
import { Button, Table } from "react-bootstrap";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return <p>No items in wishlist</p>;
  }

  return (
    <>
      <h2>Wishlist</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Button
                  size="sm"
                  variant="success"
                  className="me-2"
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                  }}
                >
                  Move to Cart
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}