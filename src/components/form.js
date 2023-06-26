import { useController, useForm } from "react-hook-form"
import { useState } from "react";
import GenericSelect from '../components/GenericSelect.js';
import styles from "./Form.module.css";

// From https://github.com/orgs/react-hook-form/discussions/7852
const select = ({ control, name, provideRules }) => {

  const { field } = useController({
    control,
    name,
    rules: provideRules
  });

  const options = {
    type: "async",
    loadOptions: () => fetch("http://localhost:8083/asks").then((val) => val.json()),
    placeHolder: "Stock Name",
    passField: field
  }


  return (
    <GenericSelect {...options}/>
  );
};


export default function Form() {
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setSuccessMsg("Bid request sent.");
    reset();
  }

  const attr = {
    control: control,
    name: "stockName",
    provideRules: {
      required: "Stock name is required",
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "First name should contain only characters."
      }
    }
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      {successMsg && <p className={styles.successMsg}>{successMsg}</p>}

      <div>
        <div className="form-control">
          <label>Select stock</label>
          {select({...attr})}
        </div>

        {errors.stockName && <span className={styles.errorMsg}>{errors.stockName.message}</span>}

        <div className="form-control">
          <label>Amount</label>
          <input placeholder="1" {...register("amount", {
            min: {
              value: 1,
              message: "Amount should be positive and at least 1."
            }
          })} />
        </div>

        {errors.amount && <span className={styles.errorMsg}>{errors.amount.message}</span>}

        <div className="form-control">
          <label>Price to offer</label>
          <input placeholder="1" {...register("price", {
            min: {
              value: 1,
              message: "Amount should be positive and at least 1."
            }
          })} />
        </div>

        {errors.amount && <span className={styles.errorMsg}>{errors.amount.message}</span>}

      </div>

      <input type="submit" />
    </form>
  )
}

// To do:
// 1. Validation
// 2. React select
// 3. Ping backend every x interval

// For react select:
//https://dev.to/elyngved/turn-anything-into-a-form-field-with-react-hook-form-controller-42c
// More: https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

// For interval:
// https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197



// Display + make orders page
// Account management page (order history; manage orders - Add new orders, cancel, or replace orders)
// Registration/login Page

// Notes:
// We are working on the assumption that only asks/sells can be partially filled; buys/bids cannot

// Immediately buy what's available (market order) vs general buy request (Limit order)

// Look up: localStorage variable