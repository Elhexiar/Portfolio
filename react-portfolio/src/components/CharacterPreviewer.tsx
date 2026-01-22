import Button from "./Button";
import char0 from "/character-standing-0.png";
import char1 from "/character-standing-1.png";
import char2 from "/character-standing-2.png";
import { useState } from "react";

const ImageArray = [char0, char1, char2];

function CharacterPreviewer() {
  let [selectedIndex, setSelectedIndex] = useState(1);

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
      }}
    >
      <img
        src={selectedIndex === -1 ? char0 : ImageArray[selectedIndex]}
        alt="Character Preview"
        style={{ objectFit: "contain", width: "100%", height: "90%" }}
      />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          text="<="
          onButtonClick={() => {
            handleChangeIndex(-1);
          }}
          buttonStyle={{ width: "30%", height: "50px", display: "block" }}
        />
        <Button
          text="=>"
          onButtonClick={() => {
            handleChangeIndex(1);
          }}
          buttonStyle={{ width: "30%", height: "50px", display: "block" }}
        />
      </div>
    </div>
  );
}

export default CharacterPreviewer;
