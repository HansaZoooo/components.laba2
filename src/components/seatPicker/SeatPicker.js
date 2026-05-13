import { useState } from "react";
import { Button } from "react-bootstrap";
import "./SeatPicker.css";

const SeatPicker = ({ onBook, maxSeats, movieId }) => {
  
    const storageKey = `bookedSeats_${movieId}`;
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    const [bookedSeats, setBookedSeats] = useState(() => {
    const saved = localStorage.getItem(storageKey);

    return saved ? JSON.parse(saved) : [];
    });

  const rows = 10;
  const seatsPerRow = 12;

  const toggleSeat = (seatNumber) => {

    if (bookedSeats.includes(seatNumber)) {
        alert("Це місце вже заброньоване");
        return;
    }

    if (selectedSeats.includes(seatNumber)) {

        setSelectedSeats(
        selectedSeats.filter(seat => seat !== seatNumber)
        );

    } else {

        if (selectedSeats.length >= maxSeats) {
        alert(`Можна вибрати тільки ${maxSeats} місць`);
        return;
        }

        setSelectedSeats([
        ...selectedSeats,
        seatNumber
        ]);

    }
    };

  const handleBooking = () => {

  if (selectedSeats.length === 0) {
    alert("Виберіть місце");
    return;
  }

  const updatedBookedSeats = [
    ...bookedSeats,
    ...selectedSeats
    ];

    setBookedSeats(updatedBookedSeats);

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedBookedSeats)
    );

    onBook(selectedSeats);

    setSelectedSeats([]);
    };
    
  return (
    <div className="cinema-wrapper">

      <div className="screen">
        ЕКРАН
      </div>

      <div className="hall">

        {[...Array(rows)].map((_, rowIndex) => (

          <div className="seat-row" key={rowIndex}>

            {[...Array(seatsPerRow)].map((_, seatIndex) => {

              const seatNumber = `${rowIndex + 1}-${seatIndex + 1}`;

              return (
                <div
                  key={seatNumber}
                  className={`seat
                    ${selectedSeats.includes(seatNumber) ? "selected" : ""}
                    ${bookedSeats.includes(seatNumber) ? "booked" : ""}
                    `}
                  onClick={() => toggleSeat(seatNumber)}
                >
                  {seatIndex + 1}
                </div>
              );
            })}

          </div>

        ))}

      </div>

      <div className="selected-info">
        Вибрані місця:
        {" "}
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "немає"}
      </div>

      <Button
        variant="success"
        className="mt-3"
        onClick={handleBooking}
      >
        Забронювати місця
      </Button>

    </div>
  );
};

export default SeatPicker;