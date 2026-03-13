import {
  X,
  Calendar,
  Ship,
  Users,
  Baby,
  Ticket,
  CheckCircle2,
} from "lucide-react";

const toRupiah = (amount) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);

const TicketConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  bookingData = {},
}) => {
  const {
    origin = "-",
    destination = "-",
    departureDate = "",
    shippingLine = "-",
    adults = 0,
    children = 0,
    pricePerAdult = 0,
    pricePerChild = 0,
  } = bookingData;

  const totalAdult = adults * pricePerAdult;
  const totalChild = children * pricePerChild;
  const serviceFee = 5000;
  const grandTotal = totalAdult + totalChild + serviceFee;

  const formattedDate = departureDate
    ? new Date(departureDate).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  const handleConfirm = () => {
    onConfirm?.({
      origin,
      destination,
      departureDate,
      shippingLine,
      adults,
      children,
      grandTotal,
    });
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0F172A] text-white px-6 pt-6 pb-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Ticket size={18} className="text-[#C8FF53]" />
            <p className="text-xs font-semibold tracking-widest text-[#C8FF53] uppercase">
              Order Summary
            </p>
          </div>
          <h2 className="text-xl font-bold mt-1">Konfirmasi Pemesanan Tiket</h2>
          <p className="text-sm text-gray-400 mt-1">
            Pastikan detail perjalanan kamu sudah benar
          </p>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Keberangkatan</p>
              <p className="text-lg font-bold">{origin}</p>
            </div>

            <div className="flex flex-col items-center gap-1 flex-1 px-3">
              <div className="flex items-center w-full gap-1">
                <div className="flex-1 border-t border-dashed border-gray-600" />
                <Ship size={18} className="text-[#C8FF53] shrink-0" />
                <div className="flex-1 border-t border-dashed border-gray-600" />
              </div>
              <p className="text-xs text-gray-500 text-center">
                {shippingLine}
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Tujuan</p>
              <p className="text-lg font-bold">{destination}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
            <Calendar size={15} className="text-[#C8FF53]" />
            <span>{formattedDate}</span>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, #1e293b 0, #1e293b 10px, transparent 10px, transparent 20px)",
            }}
          />
          <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7 rounded-full bg-gray-800" />
          <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7 rounded-full bg-gray-800" />
        </div>

        <div className="bg-[#111827] text-white px-6 pt-6 pb-6">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Rincian Penumpang
          </p>

          <div className="space-y-3 mb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Users size={15} className="text-[#C8FF53]" />
                <span>Dewasa (x{adults})</span>
              </div>
              <span className="text-sm text-gray-300">
                {toRupiah(pricePerAdult)} × {adults} ={" "}
                <span className="text-white font-semibold">
                  {toRupiah(totalAdult)}
                </span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Baby size={15} className="text-[#C8FF53]" />
                <span>Anak-anak (x{children})</span>
              </div>
              <span className="text-sm text-gray-300">
                {toRupiah(pricePerChild)} × {children} ={" "}
                <span className="text-white font-semibold">
                  {toRupiah(totalChild)}
                </span>
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Biaya Layanan</span>
              <span>{toRupiah(serviceFee)}</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 mb-5 flex items-center justify-between">
            <p className="text-sm text-gray-300 font-medium">
              Total Pembayaran
            </p>
            <p className="text-xl font-bold text-[#C8FF53]">
              {toRupiah(grandTotal)}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-gray-600 text-sm text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-2.5 rounded-xl bg-[#C8FF53] text-black text-sm font-bold hover:bg-[#b0e640] transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmModal;
