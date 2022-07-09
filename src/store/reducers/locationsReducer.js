import us1 from "./../../assets/Users/1.png"
import us2 from "./../../assets/Users/2.png"
import us3 from "./../../assets/Users/3.png"
import us4 from "./../../assets/Users/4.png"
import us5 from "./../../assets/Users/5.png"

const ADD_LOCATION = "ADD_LOCATION";
const DELETE_LOACATION = "DELETE_LOCATION";
const SET_DEFAULT = "SET_DEFAULT";

const initialState = {
    locations: [{
        id: 0,
        region: "Australia",
        defaultReg: true,
        holidays: [],
        leavePolicies: null,
        users: [us1,us2,us3, us4, us5,us1,us2,us3, us4, us5,us1,us2,us3]
    },{
        id: 1,
        region: "Belarus",
        defaultReg: false,
        holidays: [],
        leavePolicies: null,
        users: [us1,us2,us3, us4, us5 ]
    },{
        id: 2,
        region: "USA",
        defaultReg: false,
        holidays: null,
        leavePolicies: [],
        users: [us1,us2,us3, us4, us5,us1,us2,us3, us4]
    }]
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            if(action.payload.region == '') {
                return {...state}
            }
            let currentId = 0;
            state.locations.forEach(el => {
                if(el.id > currentId) {
                    currentId = el.id
                }
            })
            const newLocation = {
                id: currentId + 1,
                region: action.payload.locationName,
                defaultReg: action.payload.makeDefault || false,
                holidays: [],
                leavePolicies: action.payload.accountingYear || null,
                users: [us1, us2, us3]
            }
            state.locations.push(newLocation)
            let newLocationsDefault = [];
            if(action.payload.makeDefault) {
                newLocationsDefault = state.locations.map(el => {
                    if(el.id === currentId + 1) return {...el, defaultReg: true}
                    else return {...el, defaultReg: false}
                })
            return {...state, locations: newLocationsDefault}
            }
            return {...state}
        case DELETE_LOACATION:
            let newLocations = state.locations.filter(el => {
                if(el.id !== action.payload) return true
            })
            return {...state, locations: newLocations}
        case SET_DEFAULT:
            let locationsDefault = state.locations.map(el => {
                if(el.id === action.payload) return {...el, defaultReg: true}
                else return {...el, defaultReg: false}
            })
            return {...state, locations: locationsDefault}
        default:
            return {...state}
    }
}

export const addLocation = (location) => ({
    type: ADD_LOCATION,
    payload: location
})

export const deleteLocation = (id) => ({
    type: DELETE_LOACATION,
    payload: id
})

export const setDefault = (id) => ({
    type: SET_DEFAULT,
    payload: id
})

export default locationReducer;
