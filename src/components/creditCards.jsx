const CreditCards = ({ ...props }) => {
  console.log(props);
  return (
    <div className="">
      <div
        id="cards-background"
        className="flex flex-col items-center relative xxl:flex-row"
      >
        <img
          id="bg-mobile"
          src="../assets/bg-main-mobile.png"
          className="h-[240px] w-[100%] xxl:w-[483px] xxl:h-[100vh]"
          alt=""
        />
        <img id="bg-desktop" src="../assets/bg-main-desktop.png" alt="" />
        <section
          id="cards-section"
          className="flex flex-col mt-[32px] w-[343px] absolute"
        >
          <div className="flex flex-col relative">
            <img
              id="back-card"
              className="absolute left-[50px] w-[285px] xxl:w-[447px] xxl:top-[-70px] xxl:left-[330px]"
              src="../assets/bg-card-back.png"
              alt=""
            />
            <span className="mr-[40px] mb-[5px] absolute top-[65px] left-[270px] text-white xxl:top-[12px] xxl:left-[600px]">
              {props.Cvc}
            </span>
          </div>

          <div id="front-card" className="flex flex-col relative">
            <img
              src="../assets/bg-card-front.png"
              className="absolute top-[90px] w-[285px] xxl:w-[447px]  xxl:top-[-300px] xxl:left-[250px]"
              alt=""
            />
            <img
              src="../assets/card-logo.svg"
              alt="card-logo"
              className="absolute top-[100px] left-[19px] w-[70px] xxl:top-[-280px] xxl:left-[270px] xxl:w-auto"
            />
            <p className="mt-[37px] text-[18px] w-[270px] h-[23px] font-medium text-white absolute top-[130px] left-[20px] xxl:top-[-250px] xxl:left-[270px] xxl:text-[28px] xxl:w-[372px]">
              {props.cardNumber}
            </p>

            <span className="text-[12px] h-[11px] font-medium text-white absolute top-[210px] left-[20px] xxl:top-[-150px] xxl:left-[270px] xxl:text-[18px] xxl:h-[18px] xxl:w-[138px] whitespace-nowrap">
              {props.UserName}
            </span>

            <p className="w-[32px] h-[11px] text-[12px] font-medium text-white absolute top-[210px] left-[230px] p-[0] xxl:top-[-144.5px] xxl:left-[540px] ">
              <span>{props.month}</span>/<span>{props.year}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreditCards;
