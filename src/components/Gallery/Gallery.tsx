import "./gallery.css";
// !img
import pikachu from "../../assets/pokemon_wallpapers/pikachu.jpg";
import gengar from "../../assets/pokemon_wallpapers/gengar.jpg";
import bulbasaur from "../../assets/pokemon_wallpapers/bulbasaur.jpg";
import cute_togepi from "../../assets/pokemon_wallpapers/cute_togepi.jpg";
import eevee from "../../assets/pokemon_wallpapers/eevee.jpg";
import flareon from "../../assets/pokemon_wallpapers/flareon.jpg";
import leafeon from "../../assets/pokemon_wallpapers/leafeon.jpg";
import lucario from "../../assets/pokemon_wallpapers/lucario.jpg";
import reshiram_turboblaze from "../../assets/pokemon_wallpapers/reshiram_turboblaze.jpg";
import spiritomb from "../../assets/pokemon_wallpapers/spiritomb.jpg";
import sylveon from "../../assets/pokemon_wallpapers/sylveon.jpg";
import ubreon from "../../assets/pokemon_wallpapers/umbreon.jpg";
// ! pokemon component
import { Pokemon } from "../../components";
export default function Gallery() {
  let arr = [
    pikachu,
    gengar,
    bulbasaur,
    cute_togepi,
    eevee,
    flareon,
    leafeon,
    lucario,
    reshiram_turboblaze,
    spiritomb,
    sylveon,
    ubreon,
  ];
  return (
    <>
      <div className=" w-[60rem] rounded-2xl ">
        <h1 className="bg-black text-white text-[2rem] rounded-t-2xl text-center mb-10">
          Pokemon Gallery
        </h1>
        <div
          id="pokemonContainer"
          className="flex justify-between flex-wrap capitalize"
        >
          {arr.map((e, i) => {
            return <Pokemon img={e} title={e.slice(31, -4)} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
