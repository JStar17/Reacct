import { useState } from "react";

export const SelectDemo = () => {
  const [value, setvalue, setIsChecked, isChecked,checkedState] = useState([]);
  var options = [
    {
      lable: "VOlVO",
      value: "volovo",
    },
    {
      lable: "BMW",
      value: "bmw",
    },
    {
      lable: "AUDI",
      value: "audi",
    },
  ];
  const selectChangeHandler = (e) => {
    var selectedOption = e.target.value;
    alert(selectedOption);
  };
  const genderChangeHandler = (e) => {
    alert(e.target.value);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <form>
        <label>Select</label>
        <select
          onChange={(e) => {
            selectChangeHandler(e);
          }}
        >
          {options.map((option) => {
            return <option value={option.value}>{option.lable}</option>;
          })}
        </select>
        <br />
        <label>MALE</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => {
            genderChangeHandler(e);
          }}
        />
        <label>FEMALE</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => {
            genderChangeHandler(e);
          }}
        />
        <br />
        <label>Apple</label>
        <input
          type="checkbox"
          name="fruits"
          value="apple"
          checked={checkedState}
          onChange={() => handleOnChange()}
        />
        <label>Watermelon</label>
        <input
          type="checkbox"
          name="fruits"
          value="watermelon"
          checked={checkedState}
          onChange={() => handleOnChange()}
          
        />
      </form>
    </div>
  );
};
