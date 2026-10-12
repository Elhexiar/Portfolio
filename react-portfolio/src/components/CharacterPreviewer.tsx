import CPButton from "./CPButton";
import char0 from "/character-standing-0.webp";
import char1 from "/character-standing-1.webp";
import char2 from "/character-standing-2.webp";
import char3 from "/character-standing-3.webp";
import char4 from "/character-standing-4.webp";
import { useState } from "react";
import { preloadImages } from "../preload";

const ImageArray = [char0, char1, char2, char3, char4];

function CharacterPreviewer() {
  let [selectedIndex, setSelectedIndex] = useState(2);

  // only fetch the poses the user is about to see : the ones next to the
  // current one, once their pointer reaches the arrow buttons
  const preloadNeighbours = (index = selectedIndex) => {
    preloadImages(
      [ImageArray[index - 1], ImageArray[index + 1]].filter(Boolean),
    );
  };

  const handleChangeIndex = (indexToAdd: number) => {
    let newIndex = selectedIndex + indexToAdd;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= ImageArray.length) {
      newIndex = ImageArray.length - 1;
    }
    setSelectedIndex(newIndex);
    preloadNeighbours(newIndex);
  };

  return (
    <div
      className="character-previewer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        left: 0,

        animation: "dropLeftCharacter 0.8s ease-in forwards",
        filter: "drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.555))",
      }}
    >
      <img
        src={selectedIndex === -1 ? char0 : ImageArray[selectedIndex]}
        alt="Character Preview"
        style={{ objectFit: "contain", width: "100%", height: "90%" }}
      />
      <div
        style={{ display: "flex", justifyContent: "space-evenly" }}
        onPointerEnter={() => preloadNeighbours()}
        onPointerDown={() => preloadNeighbours()}
      >
        <CPButton
          children={["=>"]}
          direction="left"
          onClick={() => handleChangeIndex(-1)}
        />
        <CPButton
          children={["=>"]}
          direction="right"
          onClick={() => handleChangeIndex(1)}
        />
      </div>
    </div>
  );
}

export default CharacterPreviewer;
