import React from "react";

interface NavbarProps {
  childrenList?: {
    tabChildren: React.ReactNode;
    contentChildren: React.ReactNode;
    contentStyle?: React.CSSProperties;
  }[];
}

function Navbar({ childrenList }: NavbarProps) {
  let [selectedIndex, setSelectedIndex] = React.useState(-1);

  /* Automatically open the first tab after 2 seconds if no tab was selected */
  const AUTO_OPEN_DELAY = 1500;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex((currentIndex) =>
        currentIndex === -1 ? 0 : currentIndex,
      );
    }, AUTO_OPEN_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="content-overhaul-container">
      <nav
        className="navbar navbar-expand-lg"
        style={{ width: "100%", height: "fit-content" }}
      >
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          {childrenList?.map((child, index) => (
            <a
              key={index}
              style={{ marginRight: "30px" }}
              className={`nav-link${selectedIndex === index ? " active" : ""}`}
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
                src="/close-icon.png"
                alt="Close"
                className="nav-close-button"
                style={{}}
              />
            </div>
          ) : null}
        </div>
      </nav>

      {childrenList?.[selectedIndex] ? (
        <div
          className="tab-content"
          style={childrenList?.[selectedIndex]?.contentStyle}
        >
          {childrenList?.[selectedIndex]?.contentChildren}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
