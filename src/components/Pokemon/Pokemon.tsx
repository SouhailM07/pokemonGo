import "./pokemon.css";
export default function Pokemon(props) {
  return (
    <>
      <div className="bg-black mb-12 text-white  w-[16rem] flex flex-col items-center rounded-xl">
        <img
          src={props.img}
          alt="image"
          className="w-[13rem] h-[13rem] rounded-xl my-7 "
        />
        <p className="title text-[1.6rem] font-semibold  mb-5">{props.title}</p>
      </div>
    </>
  );
}
