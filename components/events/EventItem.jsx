/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import styles from "./EventItem.module.css";

const EventItem = ({ title, image, date, location, id }) => {
  const readableTime = new Date(date).toLocaleDateString("en-US", {
    dy: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li key={id} className={styles.item}>
      <img src={image} alt={title} />
      {/* <Image src={"/" + image} alt={title} /> */}
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableTime}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
