import { SearchPanel } from "../components/SearchPanel/SearchPanel"
import { Requests } from "../components/Requests/Requests"
import { PopUp } from "../components/PopUp/PopUp"
import { useState } from "react"

export const RequestsPage = ({ isMobile }: { isMobile: boolean }) => {
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <>
      <SearchPanel isMobile={isMobile} openPopup={() => setShowPopUp(true)} />
      <Requests isMobile={isMobile} />
      {showPopUp && <PopUp isMobile={isMobile} closePopup={() => setShowPopUp(false)} />}
    </>
  )
}
