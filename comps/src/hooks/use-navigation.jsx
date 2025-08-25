import NavigationContext from "../context/navigation";
import { useContext } from "react";

import React from 'react'

function useNavigation() {
    
  return useContext(NavigationContext);
}

export default useNavigation