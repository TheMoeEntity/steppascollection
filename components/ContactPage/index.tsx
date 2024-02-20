"use client";
import Image from "next/image";
import styles from "./index.module.css";
import furniture from "../../public/images/furniture-2.jpeg";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div>
        Home <i className="fa-solid fa-angle-right"></i>{" "}
        <strong>Contact Us</strong>
        <h2 className="h2 my-4">
          We beleive in sustainable Sports Collection. {`We're`} passionate{" "}
          <br />
          about your sports lifestyle.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ratione dolore nihil sequi, consectetur asperiores reprehenderit at
          officiis fugiat voluptatibus.
        </p>
        <div className={styles.sales}>
          <div>
            <Image
              alt="Sales Picture"
              style={{ objectFit: "cover" }}
              src={furniture}
              fill
              quality={100}
              priority={true}
              //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
          <div>
            <div>
              <h2 className="my-3">About Us</h2>
              <p className="my-3">
                Steppas collection is an online store collection of the best
                sports brands Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Delectus architecto veritatis saepe omnis ullam numquam
                deserunt nemo repellat!
              </p>
              <button className="mt-3">Shop Now &rarr;</button>
            </div>
          </div>
        </div>
        <div className="text-center h2 mt-5">Contact Us</div>
        <div className={styles.categories}>
          <div>
            <div>
              <i className="fa-solid fa-house"></i>
            </div>
            <div>
              <h5 className="fw-light my-3">Address</h5>
            </div>
            <div className="text-center">
              <p>Co-op villas, Badore, Lagos.</p>
              <p>District 1, HMC</p>
              <p>Abakaliki </p> <p>Ebonyi, Nigeria</p>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-phone"></i>
            </div>
            <div>
              <h5 className="fw-light text-dark my-3">Contact Us</h5>
            </div>
            <div className="text-center">
              <p>(+234) 807 548 9362</p>
            </div>
          </div>
          <div>
            <div>
              <i className="fa fa-envelope"></i>
            </div>
            <div>
              <h5 className="fw-light text-dark my-3">Email</h5>
            </div>
            <div className="text-center">
              <p>mosesnwigberi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.maps}>
          <div>
            <form action="">
              <div className={styles.formGroup}>
                <label htmlFor="">FULL NAME</label>
                <input type="text" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">EMAIL ADDRESS</label>
                <input type="text" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">MESSAGE</label>
                <textarea name="" id="" rows={10}></textarea>
              </div>
            </form>
          </div>
          <div>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ikoyi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
        <div className={styles.guarantee}>
          <div>
            <div>
              <i className="fa-solid fa-truck"></i>
            </div>
            <div>
              <h5 className="fw-light my-3">Free Shipping</h5>
            </div>
            <div className="text-center">
              <p>Orders above $40.00</p>
            </div>
          </div>

          <div>
            <div>
              <i className="fa fa-money"></i>
            </div>
            <div>
              <h5 className="fw-light my-3">Money back</h5>
            </div>
            <div className="text-center">
              <p>30 days guarantee</p>
            </div>
          </div>

          <div>
            <div>
              <i className="fa fa-credit-card" aria-hidden="true"></i>
            </div>
            <div>
              <h5 className="fw-light my-3">Secure Payments</h5>
            </div>
            <div className="text-center">
              <p>Secured by Stripe</p>
            </div>
          </div>

          <div>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h5 className="fw-light my-3">24/7 Assitance</h5>
            </div>
            <div className="text-center">
              <p>Phone and email support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
