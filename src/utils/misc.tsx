import { TypesManager } from "types";

function getUserLocation(data: TypesManager.TUser.User | null) {
  const hasFillLocation = (location: TypesManager.TUser.Location | null) => {
    if (!location) {
      return false
    }
    
    if (
      location.additional_information && location.cep && location.city && 
      location.complement && location.state && location.street
    ) {
      return true
    } else {
      return false
    }
  }

  return {
    isFillLocation: hasFillLocation(data)
  }
}

export { getUserLocation };
