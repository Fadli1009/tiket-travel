import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Ship,
  Calendar,
  Users,
  Anchor,
  MapPin,
  Info,
  FileText,
  Tag,
  CheckCircle2,
} from "lucide-react";

const toRupiah = (amount) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);

const priceNotes = {
  "PT PELNI": { adults: 300000, children: 200000 },
  "Kapal Perintis": { adults: 120000, children: 60000 },
  "Kapal Ferry": { adults: 30000, children: 20000 },
  "Kapal Ferry Cepat": { adults: 350000, children: 200000 },
  "TNI AL": { adults: 0, children: 0 },
};

const portMap = {
  Surabaya: { code: "SBY", sub: "Tanjung Perak", region: "Jawa Timur" },
  Makassar: { code: "MKS", sub: "Makassar", region: "Sulawesi Selatan" },
  Jakarta: { code: "JKT", sub: "Tanjung Priok", region: "DKI Jakarta" },
  Semarang: { code: "SMG", sub: "Tanjung Emas", region: "Jawa Tengah" },
  Balikpapan: { code: "BPN", sub: "Balikpapan", region: "Kalimantan Timur" },
  Medan: { code: "MES", sub: "Belawan", region: "Sumatera Utara" },
  Bali: { code: "DPS", sub: "Benoa", region: "Bali" },
  Lombok: { code: "LBR", sub: "Lembar", region: "Nusa Tenggara Barat" },
  Kupang: { code: "KOE", sub: "Kupang", region: "Nusa Tenggara Timur" },
  Manado: { code: "MDC", sub: "Manado", region: "Sulawesi Utara" },
  Ambon: { code: "AMQ", sub: "Ambon", region: "Maluku" },
  Sorong: { code: "SOQ", sub: "Sorong", region: "Papua Barat" },
  Jayapura: { code: "DJJ", sub: "Jayapura", region: "Papua" },
  Banjarmasin: { code: "BDJ", sub: "Trisakti", region: "Kalimantan Selatan" },
  Pontianak: { code: "PNK", sub: "Pontianak", region: "Kalimantan Barat" },
  Palembang: { code: "PLM", sub: "Boom Baru", region: "Sumatera Selatan" },
};

const capitalize = (str = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const getPort = (name = "") => {
  const normalized = capitalize(name);
  const match = Object.keys(portMap).find((k) =>
    normalized.toLowerCase().includes(k.toLowerCase()),
  );
  return match
    ? { ...portMap[match], displayName: match }
    : {
        code: name.slice(0, 3).toUpperCase(),
        sub: name,
        region: "",
        displayName: capitalize(name),
      };
};

const tabs = ["Pricing Details", "Trip Details", "Terms and Conditions"];

const AVAILABLE_SEATS = 238;

const TransactionPage = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [activeTab, setActiveTab] = useState("Pricing Details");
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("bookingData");
    if (raw) {
      try {
        setBooking(JSON.parse(raw));
      } catch {
        setBooking(null);
      }
    }
  }, []);

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <Ship size={48} className="text-gray-300" />
        <p className="text-gray-500 text-lg">Tidak ada data pemesanan.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-2 px-6 py-2 bg-[#C8FF53] text-black font-semibold rounded-full hover:bg-[#b0e640] transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const {
    origin,
    destination,
    departureDate,
    shippingLine,
    adults,
    children,
    grandTotal,
  } = booking;

  const originPort = getPort(origin);
  const destPort = getPort(destination);
  const originDisplay = originPort.displayName;
  const destDisplay = destPort.displayName;
  const price = priceNotes[shippingLine] ?? { adults: 0, children: 0 };

  const formattedDate = departureDate
    ? new Date(departureDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "short",
      })
    : "-";

  const handleBookTicket = () => {
    // return;
    setBooked(true);
    localStorage.removeItem("bookingData");
  };

  if (booked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full text-center">
          <CheckCircle2 size={56} className="text-[#C8FF53]" />
          <h2 className="text-2xl font-bold text-gray-800">
            Pemesanan Berhasil!
          </h2>
          <p className="text-gray-500 text-sm">
            Tiket kamu dari <strong>{originDisplay}</strong> ke{" "}
            <strong>{destDisplay}</strong> sudah dikonfirmasi. Selamat berlayar!
            🚢
          </p>
          <p className="text-lg font-bold text-gray-800">
            {toRupiah(grandTotal)}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 w-full px-6 py-2.5 bg-[#C8FF53] text-black font-semibold rounded-full hover:bg-[#b0e640] transition-colors"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-36 overflow-hidden bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="absolute inset-0 flex items-end pb-0">
          <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1599687266725-0d4d52716b86?w=1200')] bg-cover bg-center" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-4 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                <span>{originDisplay}</span>
                <ArrowRight size={22} className="text-[#C8FF53]" />
                <span>{destDisplay}</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{formattedDate}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <span>{shippingLine}</span>
                <span className="text-gray-300">•</span>
                <span>{adults} Adult</span>
                {children > 0 && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{children} Children</span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors"
            >
              Find Ticket
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 pt-5 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Anchor size={14} className="text-[#C8FF53]" />
              <span>Available Seat ({AVAILABLE_SEATS})</span>
            </div>

            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-bold text-gray-800 text-base">
                      {originDisplay}, {originPort.region}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {originPort.code} - {originPort.sub.toUpperCase()}
                    </p>
                  </div>

                  <ArrowRight size={18} className="text-gray-400 shrink-0" />

                  <div>
                    <p className="font-bold text-gray-800 text-base">
                      {destDisplay}, {destPort.region}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {destPort.code} - {destPort.sub.toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">
                      Departure Date
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-gray-700">
                      <Calendar size={14} className="text-gray-400" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">
                      Shipping Lines
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-gray-700">
                      <Ship size={14} className="text-gray-400" />
                      <span>{shippingLine}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <p className="text-2xl font-bold text-red-500">
                  {toRupiah(grandTotal)}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Total semua penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 border-b border-gray-100">
            <div className="flex gap-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm pb-1 border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-[#C8FF53] text-green-600 font-semibold"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 py-5 min-h-32">
            {activeTab === "Pricing Details" && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={14} className="text-gray-400" />
                    <span>Dewasa × {adults}</span>
                  </div>
                  <span className="font-medium text-gray-800">
                    {toRupiah(price.adults)} × {adults} ={" "}
                    {toRupiah(price.adults * adults)}
                  </span>
                </div>
                {children > 0 && (
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={14} className="text-gray-400" />
                      <span>Anak-anak × {children}</span>
                    </div>
                    <span className="font-medium text-gray-800">
                      {toRupiah(price.children)} × {children} ={" "}
                      {toRupiah(price.children * children)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Biaya Layanan</span>
                  <span>{toRupiah(5000)}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-700">Total</span>
                  <span className="font-bold text-red-500 text-base">
                    {toRupiah(grandTotal)}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "Trip Details" && (
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">Rute</p>
                    <p>
                      {originDisplay} → {destDisplay}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar
                    size={15}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">Keberangkatan</p>
                    <p>{formattedDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ship size={15} className="text-[#C8FF53] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Maskapai</p>
                    <p>{shippingLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info size={15} className="text-[#C8FF53] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Penumpang</p>
                    <p>
                      {adults} Dewasa
                      {children > 0 ? `, ${children} Anak-anak` : ""}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Terms and Conditions" && (
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-start gap-2">
                  <FileText
                    size={14}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <p>Tiket tidak dapat dikembalikan setelah dikonfirmasi.</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText
                    size={14}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <p>Penumpang wajib hadir 60 menit sebelum keberangkatan.</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText
                    size={14}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <p>Batas bagasi gratis 20kg per penumpang dewasa.</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText
                    size={14}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <p>
                    Anak-anak di bawah 2 tahun tidak dikenakan biaya (tanpa
                    kursi).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText
                    size={14}
                    className="text-[#C8FF53] mt-0.5 shrink-0"
                  />
                  <p>
                    Pengelola berhak mengubah jadwal karena kondisi cuaca atau
                    teknis.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="px-5 pb-5 flex justify-end">
            <button
              onClick={handleBookTicket}
              className="px-6 py-2.5 bg-[#C8FF53] text-black font-bold rounded-full hover:bg-[#b0e640] transition-colors flex items-center gap-2 shadow-md"
            >
              <Tag size={16} />
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
