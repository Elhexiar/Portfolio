import CPButton from "./CPButton";
import char0 from "/character-standing-0.png";
import char1 from "/character-standing-1.png";
import char2 from "/character-standing-2.png";
import char3 from "/character-standing-3.png";
import char4 from "/character-standing-4.png";
import { useState } from "react";

const ImageArray = [char0, char1, char2, char3, char4];

function CharacterPreviewer() {
  let [selectedIndex, setSelectedIndex] = useState(2);

  const handleChangeIndex = (indexToAdd: number) => {
    let newIndex = selectedIndex + indexToAdd;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= ImageArray.length - 1) {
      newIndex = ImageArray.length - 1;
    }
    setSelectedIndex(newIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        left: 0,

        animation: "dropLeftCharacter 0.8s ease-in forwards",
      }}
    >
      <img
        src={selectedIndex === -1 ? char0 : ImageArray[selectedIndex]}
        alt="Character Preview"
        style={{ objectFit: "contain", width: "100%", height: "90%" }}
      />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
