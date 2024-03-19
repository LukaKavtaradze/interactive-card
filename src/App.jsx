import { useForm } from "react-hook-form";
import InputMask, { ReactInputMask } from "react-input-mask";
import ReactInputDateMask from "react-input-date-mask";
import CreditCards from "./components/creditCards";
import { useState, useSyncExternalStore } from "react";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [error, setError] = useState(false);
  const [userSurname, setUserSurname] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ccv, setCcv] = useState("");
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState(true);

  console.log(userSurname.length);
  console.log(cardNum.length);
  console.log(month.length);
  console.log(year.length);
  console.log(ccv.length);

  let userName = watch("UserName");
  let cardNumber = watch("CardNumber");
  let months = watch("Month");
  let years = watch("Years");
  let cvc = watch("Cvc");

  let details = {
    UserName: userName,
    cardNumber: cardNumber,
    month: months,
    year: years,
    Cvc: cvc,
  };

  return (
    <div className="flex flex-col items-center xxl:flex-row w-[375px]">
      <CreditCards {...details} />
      <div className="xxl:ml-[400px] xxl:mb-[50px]">
        {form && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[90px] flex flex-col items-start gap-[5px] mb-[50px] xxl:mt-0"
          >
            <label className="w-[140px]" htmlFor="">
              CARDHOLDER NAME
            </label>
            <input
              data-check={error}
              onInput={(e) => {
                setUserSurname(e.target.value);
              }}
              {...register("UserName", {
                required: "This field is required",

                pattern: {
                  value: /^[A-Za-z]+(?: [A-Za-z]+)+$/,
                  message: "Invalid Name format",
                },
                minLength: {
                  value: 10,
                  message: "Username should be at least 10 characters",
                },
              })}
              placeholder="e.g. Jane Appleseed"
              className="w-[327px] h-[45px] rounded-[10px] border-[1px solid #dfdee0] bg-white xxl:w-[381px]"
            />
            <p className="h-[15px] text-[12px] text-[#ff5050] font-medium ">
              {errors.UserName?.message}
            </p>

            <label className="w-[103px]" htmlFor="">
              CARD NUMBER
            </label>
            <InputMask
              onInput={(e) => {
                setCardNum(e.target.value.replace(/_/g, ""));
              }}
              data-check={error}
              mask="9999 9999 9999 9999"
              {...register("CardNumber", {
                required: "Can't be blank",
                validate: {
                  minLength: (value) => {
                    if (value && value.replace(/_/g, "").length < 19) {
                      return "Fill in this field";
                    }
                  },
                },
              })}
              placeholder="e.g 1234 5678 9123 0000 "
              className="w-[327px] h-[45px] rounded-[10px] border-[1px solid #dfdee0] bg-white xxl:w-[381px]"
            />
            <p className="h-[15px] text-[12px] text-[#ff5050] font-medium ">
              {errors.CardNumber?.message}
            </p>

            <section className="flex gap-[45px]">
              <label htmlFor="" className="w-[140px] ">
                Exp. Date (MM/YY)
              </label>
              <label htmlFor="">CVC</label>
            </section>

            <section className="flex gap-[5px] xxl:gap-[10px]">
              <div className="flex flex-col items-center">
                <InputMask
                  mask="99"
                  onInput={(e) => {
                    setMonth(e.target.value.replace(/_/g, ""));
                  }}
                  data-check={error}
                  className="w-[72px] h-[45px] rounded-[8px]"
                  {...register("Month", {
                    required: "Can't be blank",
                    validate: {
                      minLength: (value) => {
                        if (value && value.replace(/_/g, "").length < 2) {
                          return "Fill in this field";
                        }
                      },
                    },
                  })}
                  placeholder="MM"
                />
                <p className="h-[15px] text-[12px] text-[#ff5050] font-medium inline-flex xxl:w-[80px] whitespace-nowrap">
                  {errors.Month?.message}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <InputMask
                  mask="99"
                  onInput={(e) => {
                    setYear(e.target.value.replace(/_/g, ""));
                  }}
                  data-check={error}
                  className="w-[72px] h-[45px] rounded-[8px] xxl:w-[80px]"
                  {...register("Years", {
                    required: true,
                    validate: {
                      minLength: (value) => {
                        if (value && value.replace(/_/g, "").length < 2) {
                          return "Fill in this field";
                        }
                      },
                    },
                  })}
                  placeholder="YY"
                />
                <p className="h-[15px] text-[12px] text-[#ff5050] font-medium inline-flex">
                  {errors.Years?.message}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <InputMask
                  mask="999"
                  onInput={(e) => {
                    setCcv(e.target.value.replace(/_/g, ""));
                  }}
                  data-check={error}
                  className="w-[164px] h-[45px] xxl:w-[191px]"
                  {...register("Cvc", {
                    required: "Can't be blank",
                    validate: {
                      minLength: (value) => {
                        if (value && value.replace(/_/g, "").length < 3) {
                          return "Fill in this field";
                        }
                      },
                    },
                  })}
                  placeholder="e.g. 123
          "
                />
                <p className="h-[15px] text-[12px] text-[#ff5050] font-medium inline-flex">
                  {errors.Cvc?.message}
                </p>
              </div>
            </section>
            <input
              onClick={() => {
                if(userSurname.length >= 10 && cardNum.length === 19 && month.length === 2 && year.length === 2 && ccv.length === 3){
                   setForm(false);
                setRegistered(true);

                }
               
              }}
              type="submit"
              className="w-[327px] h-[53px] cursor-pointer rounded-[8px] mt-[10px] bg-[#21092f] text-white xxl:w-[381px]"
            />
          </form>
        )}
      </div>
      {console.log(cardNum.length)}
      {registered && (
        <div className="flex flex-col items-center gap-[16px] mt-[80px] xxl:mt-[-100px] xxl:ml-[30px]">
          <img
            className="w-[80px] h-[80px]"
            src="../assets/icon-complete.svg"
            alt=""
          />
          <h2 className="text-[#21092f] text-[28px] font-medium">THANK YOU!</h2>
          <p className="text-[#8f8694]">We’ve added your card details</p>
          <button className="mt-[20px] w-[327px] h-[53px] bg-[#21092f] text-white rounded-[10px] xxl:w-[381px]">
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
