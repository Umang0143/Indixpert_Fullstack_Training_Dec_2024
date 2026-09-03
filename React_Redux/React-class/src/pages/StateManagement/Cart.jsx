import { Table, Button, ButtonGroup } from "react-bootstrap";
import { IoAdd, IoRemove, IoTrashOutline } from "react-icons/io5";
import { useStore } from "../../context/StoreProvider";
export default function Cart() {
  const { cart, removeFromCart, incrementQty, decrementQty } = useStore(); 

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">No items in cart</div>
      ) : (
        <>
          <Table responsive hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        className="me-3 rounded"
                      />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>₹{item.price}</td>
                  <td className="text-center">
                    <ButtonGroup size="sm">
                      <Button
                        variant="outline-secondary" className="bg-danger"
                        onClick={() => decrementQty(item.id)}
                        disabled={item.qty <= 1}
                      >
                        <IoRemove />
                      </Button>
                      <Button
                        variant="light"
                        disabled
                        className="text-dark fw-bold"
                        style={{ width: "40px" }}
                      >
                        {item.qty}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => incrementQty(item.id)}
                      >
                        <IoAdd />
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>₹{(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoTrashOutline size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-end mt-4">
            <div className="text-end">
              <h4>
                Total Amount: <span className="text-success">₹{totalPrice.toFixed(2)}</span>
              </h4>
              <Button variant="primary" className="mt-2 px-5">
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}