import React from "react";

interface NavbarProps {
  childrenList?: {
    tabChildren: React.ReactNode;
    contentChildren: React.ReactNode;
  }[];
}

function Navbar({ childrenList }: NavbarProps) {
  let [selectedIndex, setSelectedIndex] = React.useState(-1);

  return (
    <div
      style={{
        padding: "10px",
        paddingTop: "50px",
        display: "flex",
        width: "80%",
        height: "500px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{ width: "100%", height: "fit-content" }}
      >
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          {childrenList?.map((child, index) => (
            <a
              key={index}
              style={{ marginRight: "30px" }}
              className="nav-link"
              href="#"
              onClick={() => setSelectedIndex(index)}
            >
              {child.tabChildren}
            </a>
          ))}
          {childrenList?.[selectedIndex] ? (
            <div
              className="nav-close-button-container"
              style={{}}
              onClick={() => setSelectedIndex(-1)}
            >
              <img
                src="./src/assets/close-icon.png"
                alt="Close"
                className="nav-close-button"
                style={{}}
              />
            </div>
          ) : null}
        </div>
      </nav>

      {childrenList?.[selectedIndex] ? (
        <div className="tab-content">
          {childrenList?.[selectedIndex]?.contentChildren}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
