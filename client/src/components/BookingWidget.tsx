import React, { useEffect, useRef } from "react";

interface BookingWidgetProps {
  venueId: string; // Ensure this prop is passed when using this component
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ venueId }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current || !venueId) {
      return; // Container div is not initialized or venueId is not set
    }

    // Clear any existing content
    widgetRef.current.innerHTML = "";

    // Create the script tag for the booking widget
    const script = document.createElement("script");
    script.src = "//widgets.designmynight.com/bookings-partner.min.js";
    script.async = true;
    script.setAttribute("dmn-booking-form", "true");
    script.setAttribute("venue", venueId);
    script.setAttribute("hide-offers", "false");
    script.setAttribute("hide-powered-by", "false");
    script.setAttribute("search-venues", "false");
    script.setAttribute("monday-first", "true");
    script.setAttribute("locale", "undefined");
    // Append the script to the container div
    widgetRef.current.appendChild(script);

    // Add the stylesheet for the booking widget
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
      "https://onsass.designmynight.com/?background-color=%23FFFFFF&primary-color=%236DA8A6&body-text-color=%23000000&outer-border-color=gray";
    document.head.appendChild(link);

    // Cleanup function to remove script and link on unmount
    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ""; // Clear the container
      }
      document.head.removeChild(link); // Remove the stylesheet
    };
  }, [venueId]);

  // Style for the container of the widget
  const widgetStyle: React.CSSProperties = {
    height: "min-content",
    width: "auto",
    overflow: "hidden", // Use 'auto' if you want to allow scrolling
    display: "flex", // Use flexbox to center content
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically if desired
  };

  return (
    <div ref={widgetRef} style={widgetStyle}>
      {/* The widget will render inside this div */}
    </div>
  );
};

export default BookingWidget;
