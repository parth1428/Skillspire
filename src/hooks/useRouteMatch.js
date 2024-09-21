<<<<<<< HEAD
import { useLocation, matchPath } from "react-router-dom";

export default function useRouteMatch(path) {
  const location = useLocation();
  return matchPath(location.pathname, { path });
}

=======
import { useLocation, matchPath } from "react-router-dom";

export default function useRouteMatch(path) {
  const location = useLocation();
  return matchPath(location.pathname, { path });
}

>>>>>>> c3f353a8bb1b7cdc320641c7cb7a57411cadd631
// this custom hook check if current location is same as path or not;