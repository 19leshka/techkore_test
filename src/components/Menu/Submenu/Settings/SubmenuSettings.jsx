import {NavLink} from "react-router-dom";
import {useState} from "react";

const settingsArea = [
    {
        id: 1,
        link: 'settings/general',
        img: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.8063 1.05901C12.2332 1.20459 11.6583 1.58161 11.294 2.05076C11.1347 2.25588 10.835 2.81839 10.835 2.91215C10.835 2.94545 9.62251 2.95591 5.74037 2.95621L0.645762 2.95658L0.460166 3.04374C0.241906 3.14626 0.175128 3.21449 0.0732732 3.43906C-0.062286 3.7379 0.00148475 4.06693 0.241423 4.30661C0.484516 4.54944 0.0903483 4.5324 5.71702 4.54331L10.8254 4.55323L10.89 4.72891C11.2045 5.58347 12.0166 6.27589 12.9214 6.46082C14.1908 6.72024 15.5167 6.00195 16.0031 4.79127L16.0918 4.57052L17.2403 4.5517C18.482 4.53136 18.5311 4.52368 18.7524 4.31577C18.8898 4.18664 18.9994 3.93783 19 3.7539C19.0005 3.59002 18.8658 3.2695 18.7552 3.17132C18.7162 3.13672 18.6095 3.07444 18.518 3.03294C18.3626 2.96245 18.2774 2.9574 17.228 2.95666L16.1043 2.95584L16.0636 2.85376C15.9362 2.53461 15.7406 2.19011 15.5682 1.98105C15.2394 1.58247 14.7239 1.24127 14.2071 1.08013C13.896 0.983142 13.1492 0.971895 12.8063 1.05901ZM13.9361 2.67604C14.4359 2.89793 14.7121 3.41953 14.6142 3.95687C14.5662 4.22053 14.4774 4.39005 14.288 4.57939C14.0379 4.82954 13.8442 4.90471 13.4519 4.90396C13.1748 4.90344 13.0893 4.88849 12.9508 4.81651C12.7233 4.69825 12.5184 4.4961 12.4008 4.27357C12.3159 4.1131 12.3025 4.04276 12.3019 3.7539C12.3011 3.36166 12.3762 3.16794 12.6261 2.91805C12.8151 2.72912 12.9474 2.65707 13.2106 2.60005C13.4655 2.54482 13.6945 2.5688 13.9361 2.67604ZM5.19286 7.33412C4.28459 7.46333 3.48812 8.0356 3.09878 8.83867C3.00958 9.02271 2.92696 9.20251 2.91519 9.23826C2.89544 9.29824 2.8061 9.30329 1.75121 9.30403C0.468889 9.30496 0.422602 9.31298 0.19276 9.57478C-0.0642533 9.86746 -0.0642533 10.298 0.19276 10.5907C0.422602 10.8525 0.468889 10.8605 1.75121 10.8614C2.8061 10.8621 2.89544 10.8672 2.91519 10.9272C2.92696 10.9629 3.00958 11.1427 3.09878 11.3268C3.44065 12.032 4.10263 12.5651 4.89806 12.7758C5.18703 12.8524 5.78591 12.8618 6.10228 12.7948C6.97551 12.6097 7.72372 11.9745 8.09083 11.1065L8.1863 10.8808L13.3246 10.8622C19.0499 10.8415 18.5628 10.866 18.8081 10.5867C19.0601 10.2997 19.0601 9.86576 18.8081 9.57871C18.5628 9.29943 19.0499 9.32389 13.3246 9.30322L8.1863 9.28466L8.09083 9.05893C7.79517 8.35998 7.2849 7.83556 6.60795 7.53512C6.2146 7.36051 5.61041 7.27469 5.19286 7.33412ZM5.84801 8.94669C6.07451 9.007 6.34062 9.18143 6.4751 9.35771C6.7908 9.77162 6.78987 10.395 6.47295 10.8105C6.33695 10.9888 6.0303 11.1797 5.79196 11.2343C4.83299 11.4541 4.03975 10.424 4.49138 9.54538C4.75118 9.04 5.29583 8.79966 5.84801 8.94669ZM12.8951 13.7074C12.0105 13.8955 11.1999 14.5945 10.89 15.4365L10.8254 15.6122L5.71702 15.6221C0.0903483 15.633 0.484516 15.616 0.241423 15.8588C0.00148475 16.0985 -0.062286 16.4275 0.0732732 16.7264C0.175128 16.951 0.241906 17.0192 0.460166 17.1217L0.645762 17.2089L5.74037 17.2092C9.62251 17.2095 10.835 17.22 10.835 17.2533C10.835 17.347 11.1347 17.9096 11.294 18.1147C11.6733 18.6032 12.2932 18.9947 12.8913 19.1236C13.244 19.1997 13.8976 19.1803 14.2071 19.0847C14.7214 18.9259 15.239 18.5835 15.5682 18.1844C15.7406 17.9753 15.9362 17.6308 16.0636 17.3117L16.1043 17.2096L17.228 17.2092C18.3294 17.2089 18.3553 17.2071 18.5372 17.1217C18.7555 17.0192 18.8222 16.951 18.9241 16.7264C19.1026 16.3328 18.9248 15.8792 18.5186 15.6923C18.4113 15.6429 18.1891 15.6293 17.2403 15.6137L16.0918 15.5949L16.0031 15.3742C15.5144 14.1577 14.1695 13.4365 12.8951 13.7074ZM13.9602 15.3473C14.1654 15.4476 14.4139 15.6853 14.5094 15.8726C14.6693 16.186 14.6706 16.6345 14.5124 16.9445C14.2165 17.5246 13.4893 17.7631 12.9129 17.4691C12.7261 17.3737 12.4882 17.1254 12.387 16.9199C12.263 16.668 12.2641 16.1512 12.3893 15.9104C12.5449 15.611 12.8184 15.3784 13.1364 15.2752C13.3178 15.2163 13.7741 15.2562 13.9602 15.3473Z" fill="#AFB6C6"/>
        </svg>,
        name: "General",
        sub: null
    },{
        id: 2,
        link: 'settings/vacation',
        img: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.12079 0.0489507C3.83984 0.173801 3.74968 0.381038 3.74968 0.901768V1.24386L2.86096 1.24452C1.85704 1.2453 1.60902 1.28089 1.18708 1.48473C0.829329 1.65759 0.4163 2.06644 0.244494 2.41786C-0.0151675 2.94906 0.000692683 2.41626 6.76507e-05 10.6229C-0.000518317 17.923 0.0010052 18.0741 0.0770248 18.3714C0.177069 18.7626 0.346922 19.0576 0.64182 19.3525C0.936718 19.6474 1.23173 19.8172 1.62289 19.9173C1.9206 19.9934 2.07389 19.9948 10 19.9948C17.9163 19.9948 18.0798 19.9933 18.376 19.9176C18.784 19.8132 19.032 19.672 19.3385 19.3698C19.6515 19.061 19.8204 18.7726 19.923 18.3714C19.999 18.0741 20.0005 17.923 19.9999 10.6229C19.9993 2.41626 20.0152 2.94906 19.7555 2.41786C19.5856 2.07038 19.1708 1.65821 18.8174 1.48571C18.4008 1.28237 18.1435 1.2453 17.1434 1.24452L16.259 1.24386L16.2443 0.816295C16.2322 0.460925 16.2162 0.370608 16.1497 0.281541C15.8765 -0.0843765 15.4052 -0.0931661 15.1671 0.263259C15.0885 0.380882 15.0784 0.444206 15.0784 0.819928V1.24386H13.7697H12.4611V0.851961C12.4611 0.396937 12.4114 0.242594 12.2213 0.10704C12.0474 -0.0170684 11.7347 -0.0234359 11.5776 0.0938749C11.3437 0.268532 11.3097 0.35549 11.2955 0.816881L11.2822 1.24386H10H8.71778L8.70454 0.816881C8.69028 0.35549 8.65634 0.268532 8.42238 0.0938749C8.26526 -0.0234359 7.95263 -0.0170684 7.77867 0.10704C7.58859 0.242594 7.53894 0.396937 7.53894 0.851961V1.24386H6.23027H4.92161V0.819928C4.92161 0.444206 4.91153 0.380882 4.83294 0.263259C4.67359 0.0247307 4.37643 -0.064688 4.12079 0.0489507ZM3.75604 2.83574C3.77331 3.31818 3.82816 3.45151 4.06399 3.58406C4.34361 3.74121 4.67785 3.65504 4.84368 3.38299C4.90841 3.27685 4.92134 3.18583 4.92146 2.83574L4.92161 2.41579H6.23027H7.53894L7.53909 2.83574C7.53921 3.18583 7.55214 3.27685 7.61687 3.38299C7.85485 3.77332 8.41578 3.75602 8.62298 3.35193C8.69646 3.20861 8.71087 3.11786 8.71087 2.79816V2.41579H10H11.2891V2.79816C11.2891 3.11786 11.3035 3.20861 11.377 3.35193C11.5842 3.75602 12.1452 3.77332 12.3831 3.38299C12.4479 3.27685 12.4608 3.18583 12.4609 2.83574L12.4611 2.41579H13.7697H15.0784L15.0785 2.83574C15.0787 3.30904 15.1296 3.44475 15.3613 3.59027C15.5209 3.69051 15.835 3.67808 15.9861 3.56558C16.1815 3.42002 16.2277 3.28881 16.244 2.83324L16.2592 2.41075L17.1825 2.42306L18.1059 2.43532L18.3148 2.55103C18.5313 2.67096 18.702 2.87648 18.7833 3.11501C18.8125 3.2004 18.8286 3.56636 18.8286 4.14045V5.03312H10H1.17142V4.14045C1.17142 3.5605 1.18743 3.2013 1.21712 3.11501C1.28619 2.91445 1.42815 2.71936 1.5798 2.6167C1.84544 2.43689 1.95966 2.41931 2.87615 2.41751L3.74104 2.41579L3.75604 2.83574ZM18.8286 12.0968C18.8286 18.7173 18.8521 18.2073 18.5325 18.5268C18.2099 18.8494 18.9748 18.8229 10 18.8229C1.02516 18.8229 1.79008 18.8494 1.46749 18.5268C1.14794 18.2073 1.17142 18.7173 1.17142 12.0968V6.20505H10H18.8286V12.0968ZM3.12425 8.24617C3.05323 8.29453 2.95835 8.38372 2.91338 8.44439C2.83393 8.55162 2.83166 8.59479 2.83166 9.99435C2.83166 11.3939 2.83393 11.4371 2.91338 11.5443C2.95835 11.6049 3.05323 11.6941 3.12425 11.7424C3.25231 11.8296 3.26532 11.8303 4.66769 11.8303C6.07007 11.8303 6.08308 11.8296 6.21113 11.7424C6.28215 11.6941 6.37704 11.6049 6.422 11.5443C6.50146 11.437 6.50373 11.3939 6.50373 9.99431C6.50373 8.59475 6.50146 8.55158 6.422 8.44435C6.37704 8.38368 6.28215 8.29453 6.21113 8.24617C6.08308 8.15902 6.07007 8.15828 4.66769 8.15828C3.26532 8.15828 3.25231 8.15902 3.12425 8.24617ZM13.7889 8.24617C13.7178 8.29453 13.623 8.38368 13.578 8.44435C13.4985 8.55158 13.4963 8.59475 13.4963 9.99431C13.4963 11.3939 13.4985 11.437 13.578 11.5443C13.623 11.6049 13.7178 11.6941 13.7889 11.7424C13.9169 11.8296 13.9299 11.8303 15.3323 11.8303C16.7347 11.8303 16.7477 11.8296 16.8757 11.7424C16.9468 11.6941 17.0417 11.6049 17.0866 11.5443C17.1661 11.437 17.1683 11.3939 17.1683 9.99431C17.1683 8.59475 17.1661 8.55158 17.0866 8.44435C17.0417 8.38368 16.9468 8.29453 16.8757 8.24617C16.7477 8.15902 16.7347 8.15828 15.3323 8.15828C13.9299 8.15828 13.9169 8.15902 13.7889 8.24617ZM11.154 8.54986C11.083 8.57182 10.7546 8.86898 10.3046 9.31853L9.57095 10.0515L9.30696 9.79258C9.16171 9.65019 8.98667 9.5055 8.91791 9.471C8.45613 9.23954 7.94079 9.72496 8.12736 10.2156C8.15022 10.2757 8.39972 10.558 8.68185 10.8429C9.27164 11.4385 9.41759 11.5245 9.69854 11.442C9.8357 11.4016 10.0258 11.2323 10.8343 10.4302C11.3684 9.90044 11.8299 9.41037 11.8598 9.34123C12.0536 8.89316 11.6192 8.40606 11.154 8.54986ZM5.35132 9.99431V10.6584H4.66769H3.98406V9.99431V9.33021H4.66769H5.35132V9.99431ZM16.0159 9.99431V10.6584H15.3323H14.6487V9.99431V9.33021H15.3323H16.0159V9.99431ZM3.23172 13.2134C3.03444 13.2851 2.96905 13.3447 2.8849 13.5296C2.82072 13.6708 2.81377 13.8143 2.81299 15.0156C2.81213 16.3177 2.81396 16.3489 2.90002 16.5196C2.96424 16.6469 3.03487 16.7176 3.16222 16.7818C3.33282 16.8678 3.36489 16.8697 4.66769 16.8697C5.97073 16.8697 6.00253 16.8678 6.17226 16.7818C6.27496 16.7297 6.3779 16.6381 6.4247 16.5571C6.50001 16.4268 6.50373 16.3546 6.50373 15.0141C6.50373 13.67 6.50021 13.6018 6.42423 13.4724C6.38048 13.398 6.28379 13.3013 6.20937 13.2576C6.0812 13.1823 6.00257 13.1776 4.72629 13.169C3.66659 13.1619 3.34719 13.1714 3.23172 13.2134ZM8.57879 13.198C8.51692 13.2171 8.42297 13.2731 8.36999 13.3225C8.16467 13.5143 8.16397 13.52 8.16397 15.0259C8.16397 16.416 8.16475 16.4295 8.25186 16.5575C8.30022 16.6286 8.38937 16.7234 8.45004 16.7684C8.55727 16.8479 8.60044 16.8501 10 16.8501C11.3996 16.8501 11.4427 16.8479 11.55 16.7684C11.6106 16.7234 11.6998 16.6286 11.7481 16.5575C11.8353 16.4295 11.836 16.4165 11.836 15.0141C11.836 13.6117 11.8353 13.5987 11.7481 13.4707C11.6998 13.3996 11.6106 13.3048 11.55 13.2598C11.4436 13.1809 11.3928 13.1778 10.0656 13.1707C9.30973 13.1667 8.64071 13.179 8.57879 13.198ZM13.8869 13.2163C13.6945 13.2855 13.5708 13.4231 13.5152 13.6295C13.4876 13.7321 13.4769 14.244 13.4846 15.1036C13.498 16.6084 13.4994 16.6153 13.8277 16.7818C13.9975 16.8678 14.0293 16.8697 15.3323 16.8697C16.6351 16.8697 16.6672 16.8678 16.8378 16.7818C16.9651 16.7176 17.0358 16.6469 17.1 16.5196C17.186 16.349 17.1879 16.3169 17.1879 15.0141C17.1879 13.0492 17.3171 13.1819 15.3909 13.169C14.299 13.1617 14.0135 13.1707 13.8869 13.2163ZM5.33179 15.0141V15.6782H4.66769H4.0036L3.99281 15.0547C3.98684 14.7118 3.99086 14.4082 4.00168 14.3799C4.01711 14.3397 4.16364 14.3309 4.6766 14.3393L5.33179 14.35V15.0141ZM10.6641 15.0141V15.6977H10H9.3359V15.0141V14.3305H10H10.6641V15.0141ZM15.9964 15.0141V15.6782H15.3323H14.6682L14.6574 15.0547C14.6515 14.7118 14.6555 14.4082 14.6663 14.3799C14.6817 14.3397 14.8283 14.3309 15.3412 14.3393L15.9964 14.35V15.0141Z" fill="#AFB6C6"/>
        </svg>,
        name: "Vacation Manager",
        sub: [
            {
                id: 1,
                name: "Leave Types",
                link: "/leaveTypes"
            },
            {
                id: 2,
                name: "Locations",
                link: "/locations"
            }
        ]
    }
]


const SubmenuSettings = () => {
    const [currentSetting, setCurrentSetting] = useState(0);

    return (
          <div className="subMenuContainer">
              <span>Settings</span>
              {
                  settingsArea.map(el => <><NavLink key={el.id} to={el.link} onClick={() => setCurrentSetting(el.id)}
                                                    className={"subSettings"}>
                          {el.img}
                          {el.name}
                      </NavLink>
                  {el.id == currentSetting ? (el.sub == null ? null : el.sub.map(subel => <><NavLink key={subel.id} className="subSettingsChild" to={el.link + subel.link}>{subel.name}</NavLink><br/></>)) : null}
                  </>)
              }
          </div>
      )
}

export default SubmenuSettings;