import React, { useState, useCallback, useContext, useEffect } from "react";
// import moment from "moment";
// import { Calendar, Views, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import Toolbar from "./components/cust";
// import AppContext from "@/context/AppContext";

// const localizer = momentLocalizer(moment);
// const milliseconds = 1575909015 * 1000;

const CalendarCustom = () => {
  // const [currentDate, setCurrentDate] = useState(moment());
  // const [events, setEvents] = useState([]);
  // const [def, setDef] = useState(new Date(milliseconds));
  // const {selecteddate,setSelecteddate} = useContext(AppContext)
  // const [defEnd, setDefEnd] = useState(new Date());
  // if(typeof window === 'undefined'){
  //   console.log("window undefined...");
  // }

  // // You can use the useCallback hook if necessary
  // const handleOnSelection = useCallback((date) => {
  //   if (def > date || date > defEnd) {
  //     return false;
  //   }
  // }, [def, defEnd]);

  // useEffect(() => { 
  // },[])
  // // You can use the useCallback hook if necessary
  // const onNavigate = useCallback((date, view) => {
  //   let start, end;
  //   if (view === 'week') {
  //     start = moment(date);
  //     console.log(start,"11111111111111");
  //     end = moment(date).add(1, 'day');
  //     console.log(date);
  //    console.log(date,"55555555555555555");
  //   }
  //   setSelecteddate(date)
  //      console.log("date---",date , "start---" ,start, "end----", end); 
  // }, []);

  return (
    <div>
      {/* {moment(selecteddate).format("DD-MM-YYYY")}
      <Calendar
        style={{ height: 500 }}
        localizer={localizer}
        events={events}
        step={4}
        timeslots={5}
        startAccessor="start"
        endAccessor="end"
        onNavigate={onNavigate}
        defaultView={Views.MONTH}
        defaultDate={def}
        toolbar={true}
        length={30}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 22, 0, 0)}
        views={["month"]}
        slotPropGetter={(date) => {
          if (def > date || date > defEnd) {
            let newStyle = {
              backgroundColor: "#E8E8E8",
            };
            return {
              className: "rbc-time-slot",
              style: newStyle,
            };
          }
        }}
        onSelecting={handleOnSelection}
        selectable={true}
        components={{ toolbar: Toolbar }}
      /> */}
    </div>
  );
};

export default CalendarCustom;