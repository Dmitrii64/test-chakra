import { SearchPanel } from "../components/SearchPanel/SearchPanel"
import { Requests } from "../components/Requests/Requests"
import { PopUp } from "../components/PopUp/PopUp"
import { useState } from "react"

export const RequestsPage = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <>
      <SearchPanel openPopup={() => setShowPopUp(true)} />
      <Requests />
      {showPopUp && <PopUp closePopup={() => setShowPopUp(false)} />}
    </>
  )
}
