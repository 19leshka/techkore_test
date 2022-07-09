import {useDispatch, useSelector} from "react-redux";
import LocationCard from "./LocationCard/LocationCard";
import s from "./Locations.module.css";
import {useState} from "react";
import Modal from "../Modals/Modal";
import CreateLocation from "../Modals/CreateLocation";

const Locations = () => {
    const [createLocation, setCreateLocation] = useState(false);
  const {locations} = useSelector(state => state.locations);

  return (
      <div className={s.locationsContainer}>
          <div className={s.createLocationContainer}>
              <div>
                  <h1>Locations</h1>
                  <p>Create new users or update the existng users. You can then set their permissons here too.</p>
              </div>
              <div onClick={() => setCreateLocation(true)} className={s.createLocationBtn}>Create Location</div>
          </div>
          <div className={s.cardsContainer}>
            {locations.map(card => <LocationCard
                key={card.id}
                id={card.id}
                region={card.region}
                defaultReg={card.defaultReg}
                holidays={card.holidays}
                leavePolicies={card.leavePolicies}
                users={card.users}
            />)}
          </div>
          <Modal title={"Create Location"} isOpen={createLocation} onClose={() => setCreateLocation(false)}>
            <CreateLocation onClose={() => setCreateLocation(false)}/>
          </Modal>
      </div>
  )
}

export default Locations;