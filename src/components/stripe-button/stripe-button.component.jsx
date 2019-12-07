import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_zSEnah286mU0ZUe9ZCl6eI1Y00jCt2OPac";
  const onToken = token => {
    console.log(token);
    alert("Payment Sucessfully");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD ."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
