import {useState} from "react";
import s from "./Submenu.module.css";

const Submenu = ({children}) => {
    const [subOpen, setSubOpen] = useState(true);

  return (
      <>
      <div className={(subOpen ? (s.subMenuContainer) : (s.subMenuContainerClosed)) + " subMenuContainer"}>
          {subOpen && children}
          <div className={s.closeBtnContainer}>
              <div onClick={() => setSubOpen(!subOpen)} className={subOpen ? s.closeBtn : s.closeBtnRotate}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 4.375C13.3452 4.375 13.625 4.65482 13.625 5C13.625 5.34518 13.3452 5.625 13 5.625V4.375ZM0.558059 5.44194C0.313981 5.19786 0.313981 4.80214 0.558059 4.55806L4.53553 0.580583C4.77961 0.336505 5.17534 0.336505 5.41942 0.580583C5.6635 0.82466 5.6635 1.22039 5.41942 1.46447L1.88388 5L5.41942 8.53553C5.6635 8.77961 5.6635 9.17534 5.41942 9.41942C5.17534 9.6635 4.77961 9.6635 4.53553 9.41942L0.558059 5.44194ZM13 5.625H1V4.375H13V5.625Z" fill="#868C98"/>
                  </svg>
              </div>
          </div>
      </div>

      </>
  )
}

export default Submenu;