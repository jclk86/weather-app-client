import React from "react";
import { useSelector } from "react-redux";

const Forecast = () => {
  const forecasts = useSelector((state) => state.forecast);

  //   const [isOpen, setOpen] = useState(false);

  //   const [selectedDay, setSelectedDay] = useState(null);

  return <div>{forecasts && JSON.stringify(forecasts)}</div>;
};

export default Forecast;
