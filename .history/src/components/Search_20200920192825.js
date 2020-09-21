import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from '../mapStyles';
import { RequestContext } from '../context';




export const Map = () => {
    const { userLat, userLng } = useContext(RequestContext);
    
    return (
        <div>
            Map here
        </div>
    )
}


