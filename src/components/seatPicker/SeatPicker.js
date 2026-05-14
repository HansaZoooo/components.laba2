import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./SeatPicker.css";

const SeatPicker = ({ onBook, movieId, maxSeats = 8 }) => {
  const storageKey = `bookedSeats_${movieId}`;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const rows = 10;
  const seatsPerRow = 14;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setBookedSeats(JSON.parse(saved));
  }, [storageKey]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      alert("Це місце вже заброньовано!");
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length >= maxSeats) {
        alert(`Максимум ${maxSeats} місць за один раз`);
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Оберіть хоча б одне місце!");
      return;
    }

    const newBooked = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(storageKey, JSON.stringify(newBooked));

    onBook(selectedSeats);
    setSelectedSeats([]);
  };

  return (
    <div className="seat-picker">
      <div className="screen">ЕКРАН</div>

      <div className="legend">
        <div className="legend-item">
          <div className="seat available"></div> <span>Вільне</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div> <span>Вибрано</span>
        </div>
        <div className="legend-item">
          <div className="seat booked"></div> <span>Заброньовано</span>
        </div>
      </div>

      <div className="hall">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            <div className="row-number">{rowIndex + 1}</div>
            
            {[...Array(seatsPerRow)].map((_, seatIndex) => {
              const seatNumber = `${rowIndex + 1}-${seatIndex + 1}`;
              const isBooked = bookedSeats.includes(seatNumber);
              const isSelected = selectedSeats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  className={`seat ${isSelected ? "selected" : ""} ${isBooked ? "booked" : ""}`}
                  onClick={() => toggleSeat(seatNumber)}
                >
                  {seatIndex + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="booking-info">
        <h5>Вибрано: <strong>{selectedSeats.length}</strong> місць</h5>
        <p className="selected-list">{selectedSeats.sort().join(" • ")}</p>

        <Button 
          variant="success" 
          size="lg" 
          onClick={handleBooking}
          disabled={selectedSeats.length === 0}
        >
          Забронювати квитки
        </Button>
      </div>
    </div>
  );
};

export default SeatPicker;