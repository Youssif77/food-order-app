import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) return setAmountIsVaild(false);

    props.onAddToCard(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsVaild && <p>Please enter a vaild amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
