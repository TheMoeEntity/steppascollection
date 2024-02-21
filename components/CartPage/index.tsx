import Image from "next/image";
import styles from "../../app/page.module.css";
import cap from "../../public/images/cap.jpeg";

const CartPage = () => {
  return (
    <div className={styles["cart"]}>
      <h1 className="h1 text-center my-5">Cart</h1>
      <div className={styles.handles}>
        <div className={styles.active}>
          <div className={styles.active}>1</div>
          <div>Shopping Cart</div>
        </div>
        <div>
          <div>2</div>
          <div>Checkout Details</div>
        </div>
        <div>
          <div>3</div>
          <div>Order Complete</div>
        </div>
      </div>
      <div className={styles.cartGrid}>
        <div>
          <div className={styles.cartTitle}>
            <div>
              <b>Product</b>
            </div>
            <div>
              <div>Quantity</div>
              <div>Price</div>
              <div>Subtotal</div>
            </div>
          </div>
          {[...Array(3)].map((_x, i) => (
            <div key={i} className={`${styles.cartDetail} my-3`}>
              <div>
                <div>
                  <Image alt="Cart item picture" src={cap} fill quality={100} />
                </div>
                <div>
                  <span className="my-1">
                    <b>Cart item 1</b>
                  </span>
                  <span className="my-1">
                    <small>Color: black</small>
                  </span>
                  <span>
                    <small>
                      <strong>&times; &nbsp; Remove</strong>
                    </small>
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <div className={styles.counter}>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
                <div>$26.00</div>
                <div>
                  <strong>$30.00</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h4 className="h4 my-2">Cart Summary</h4>
          </div>
          <div>
            <div className={styles.active}>
              <span>Free Shipping</span>
              <span>$0.00</span>
            </div>
            <div>
              <span>Express Shipping</span>
              <span>$0.00</span>
            </div>
            <div>
              <span>Pay on Delivery</span>
              <span>$0.00</span>
            </div>
          </div>
          <div>
            <span>Subtotal</span>
            <span>
              <b>$1234.60</b>
            </span>
          </div>
          <div style={{ borderBottom: "none" }}>
            <span>
              <b>TOTAL</b>
            </span>
            <span>
              <b>$1234.60</b>
            </span>
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
