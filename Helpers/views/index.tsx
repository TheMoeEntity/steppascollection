import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
export const CartView = (
  active: string,
  counter: string,
  cartGrid: string,
  cartTitle: string,
  Image: any,
  cartDetail: string,
  cap: StaticImageData
): JSX.Element => {
  return (
    <div className={cartGrid}>
      <div>
        <div className={cartTitle}>
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
          <div key={i} className={`${cartDetail} my-3`}>
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
                <div className={counter}>
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
          <div className={active}>
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
  );
};

export const orderView = (
  checkoutGrid: string,
  twoCol: string,
  formGroup: string
): JSX.Element => {
  return (
    <div className={checkoutGrid}>
      <div>
        <div>
          <h4 className="h4 my-2">Contact information</h4>
          <form action="">
            <div className={twoCol}>
              <div className={formGroup}>
                <label htmlFor="">FULL NAME</label>
                <input type="text" />
              </div>
              <div className={formGroup}>
                <label htmlFor="">FULL NAME</label>
                <input type="text" />
              </div>
            </div>
            <div className={formGroup}>
              <label htmlFor="">FULL NAME</label>
              <input type="text" />
            </div>
            <div className={formGroup}>
              <label htmlFor="">EMAIL ADDRESS</label>
              <input type="text" />
            </div>
            <div className={formGroup}>
              <label htmlFor="">MESSAGE</label>
              <textarea name="" id="" rows={6}></textarea>
            </div>
          </form>
        </div>
        <div>
          <h4 className="h4 my-2">Shipping Address</h4>
          <form action="">
            <div className={formGroup}>
              <label htmlFor="">STREER ADDRESS</label>
              <input type="text" />
            </div>
            <div className={formGroup}>
              <label htmlFor="">HOUSE ADDRESS</label>
              <input type="text" />
            </div>

            <div className={twoCol}>
              <div className={formGroup}>
                <label htmlFor="">STATE</label>
                <input type="text" />
              </div>
              <div className={formGroup}>
                <label htmlFor="">ZIP CODE</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export const receivedOrder = (receivedOrderContainer: string): JSX.Element => {
  return (
    <div className={`${receivedOrderContainer} text-center py-5`}>
      <p className="font-weight-bold h3 mb-0">
        Your Order Has Been Received! 🥳
      </p>
      <i className="fa-solid fa-check-mark" />
      <p className="mt-2">
        We've recieved your order and will be shipping it to you as soon as
        possible.
      </p>

      <button
        className="btn-dark"
        style={{ padding: "10px", borderRadius: "7px", fontSize: "small" }}
        onClick={() => {
          window.location.href = "/myaccount";
        }}
      >
        Purchase History
      </button>
    </div>
  );
};
