import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightLeft, MapPin, Calendar, Ship } from "lucide-react";
import TicketConfirmModal from "./modal/ModalPesanTiket";

const shippingLines = [
  "PT PELNI",
  "Kapal Perintis",
  "Kapal Ferry",
  "Kapal Ferry Cepat",
  "TNI AL",
];

const priceNotes = {
  "PT PELNI": { adults: 300000, children: 200000 },
  "Kapal Perintis": { adults: 120000, children: 60000 },
  "Kapal Ferry": { adults: 30000, children: 20000 },
  "Kapal Ferry Cepat": { adults: 350000, children: 200000 },
  "TNI AL": { adults: 0, children: 0 },
};

const Jumbotron = ({ jumbotron }) => {
  const navigate = useNavigate();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [shippingLine, setShippingLine] = useState("PT PELNI");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleFindTicket = () => {
    if (!origin || !destination || !departureDate) {
      alert("Harap isi asal, tujuan, dan tanggal keberangkatan.");
      return;
    }
    if (adults === 0 && children === 0) {
      alert("Harap isi jumlah penumpang.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirm = (bookingSummary) => {
    localStorage.setItem("bookingData", JSON.stringify(bookingSummary));
    setIsModalOpen(false);
    navigate("/transaction");
  };

  const handleManageBookings = () => {
    navigate("/transaction");
  };

  const handleLearnMore = () => {
    navigate("/last-offer");
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: jumbotron
          ? `url(${jumbotron})`
          : "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <TicketConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        bookingData={{
          origin,
          destination,
          departureDate,
          shippingLine,
          adults,
          children,
          pricePerAdult: priceNotes[shippingLine].adults,
          pricePerChild: priceNotes[shippingLine].children,
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-[#0F172A]/90 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-2xl font-bold mb-1">Find Your Trip</h1>
          <p className="text-sm text-gray-400 mb-5">
            Set Your Arrival and Departure Schedule at the Port
          </p>

          <p className="text-sm mb-2 text-gray-300">Travel Destination</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-white text-black flex items-center p-2 gap-2 rounded-xl">
              <MapPin size={18} className="text-gray-400 shrink-0" />
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Enter Origin City/Port"
                className="w-full border-0 outline-0 text-sm"
              />
            </div>

            <button
              onClick={handleSwap}
              className="bg-[#C8FF53] p-2 rounded-full text-black hover:bg-[#b0e640] transition-colors shrink-0"
              title="Swap origin and destination"
            >
              <ArrowRightLeft size={18} />
            </button>

            <div className="flex-1 bg-white text-black flex items-center p-2 gap-2 rounded-xl">
              <MapPin size={18} className="text-gray-400 shrink-0" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter Destination City/Port"
                className="w-full border-0 outline-0 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1">
              <p className="text-sm mb-2 text-gray-300">Departure Date</p>
              <div className="bg-white text-black flex items-center p-2 gap-2 rounded-xl">
                <Calendar size={18} className="text-gray-400 shrink-0" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full border-0 outline-0 text-sm text-gray-600"
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm mb-2 text-gray-300">
                Select Shipping Lines
              </p>
              <div className="bg-white text-black flex items-center p-2 gap-2 rounded-xl">
                <Ship size={18} className="text-gray-400 shrink-0" />
                <select
                  value={shippingLine}
                  onChange={(e) => setShippingLine(e.target.value)}
                  className="w-full border-0 outline-0 text-sm bg-transparent cursor-pointer"
                >
                  {shippingLines.map((line) => (
                    <option key={line} value={line}>
                      {line}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="flex-1">
              <p className="text-sm font-medium">Adults</p>
              <p className="text-xs text-gray-400 mb-2">Ages 6 and over</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAdults(Math.max(0, adults - 1))}
                  className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors text-lg leading-none"
                >
                  −
                </button>
                <span className="w-4 text-center">{adults}</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">Children</p>
              <p className="text-xs text-gray-400 mb-2">2-5 years old</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors text-lg leading-none"
                >
                  −
                </button>
                <span className="w-4 text-center">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleFindTicket}
              className="bg-[#C8FF53] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#b0e640] transition-colors text-sm"
            >
              Find Your Ticket
            </button>
            <button
              onClick={handleManageBookings}
              className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-sm"
            >
              Manage My Bookings
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="border-2 border-blue-400 bg-black/60 backdrop-blur-sm text-white p-6 rounded-xl max-w-xs shadow-xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-2">
              Earn More
            </p>
            <h2 className="text-2xl font-bold leading-snug mb-4">
              MileagePlus® Cardmembers : sign in to earn up to 45,000 miles
            </h2>
            <button
              onClick={handleLearnMore}
              className="text-sm font-semibold text-white hover:text-[#C8FF53] transition-colors"
            >
              Learn more &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
