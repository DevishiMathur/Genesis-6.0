"use client";

interface TicketData {
  id: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  price: string;
  color: string; 
  glowColor: string; 
  ticketId: string;
}

interface TicketCardProps {
  ticket: TicketData;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  const generateClipPath = () => {
    const numNotches = 12;
    const w = 100 / numNotches;
    const bottomPoints: string[] = [];

    for (let i = 0; i < numNotches; i++) {
      const xStart = 100 - i * w;
      // Scalloped circular cutouts 
      bottomPoints.push(
        `${xStart}% 100%`,
        `${xStart - 0.25 * w}% calc(100% - 9px)`,
        `${xStart - 0.5 * w}% calc(100% - 12px)`,
        `${xStart - 0.75 * w}% calc(100% - 9px)`
      );
    }
    bottomPoints.push(`0% 100%`);

    const points = [
      "0% 0%",
      "100% 0%",
      // Right side circular cutout notch
      "100% 37.5%",
      "98% 38.2%",
      "96.5% 39.0%",
      "95% 40.0%",
      "96.5% 41.0%",
      "98% 41.8%",
      "100% 42.5%",
      // Right bottom corner
      "100% calc(100% - 12px)",
      // Bottom circular scallops
      ...bottomPoints,
      // Left bottom corner
      "0% calc(100% - 12px)",
      // Left side circular cutout notch
      "0% 42.5%",
      "2% 41.8%",
      "3.5% 41.0%",
      "5% 40.0%",
      "3.5% 39.0%",
      "2% 38.2%",
      "0% 37.5%"
    ];

    return `polygon(${points.join(", ")})`;
  };

  return (
    <div
      className={`ticket-wrapper group relative flex flex-col h-[520px] w-full max-w-[340px] mx-auto rounded-3xl ${ticket.color} text-slate-950 shadow-2xl ${ticket.glowColor} hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
      style={{
        clipPath: generateClipPath(),
      }}
    >
      {/* Top Section (White Card Logo Area) */}
      <div className="bg-white m-4 p-5 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-absans text-xl font-black tracking-tight flex items-center gap-1 text-slate-900">
              <span className="text-blue-600 font-sans">&#123;</span>
              Genesis
              <span className="text-blue-600 font-sans">&#125;</span>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1">
              {ticket.category}
            </div>
          </div>
          {/* Visual cubes representation */}
          <div className="flex gap-[2px] mt-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
          </div>
        </div>

        {/* Middle Row with Year */}
        <div className="flex justify-end items-center border-t border-slate-100 pt-4 mt-2">
          <div className="border border-rose-300 bg-rose-50 text-rose-600 px-3.5 py-0.5 rounded-full text-xs font-bold shadow-sm">
            2026
          </div>
        </div>
      </div>

      {/* Perforation Line */}
      <div className="relative my-2">
        <div className="border-t-2 border-dashed border-white/50 w-full" />
      </div>

      {/* Ticket Details (Middle Section) */}
      <div className="flex flex-col justify-between flex-grow px-7 py-4 font-sans">
        <div className="space-y-4">
          <div>
            <div className="text-slate-900/60 text-[11px] uppercase tracking-wider font-bold">
              Date
            </div>
            <div className="text-base font-extrabold text-slate-950 mt-0.5">
              {ticket.date}
            </div>
          </div>

          <div>
            <div className="text-slate-900/60 text-[11px] uppercase tracking-wider font-bold">
              Venue
            </div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 line-clamp-1">
              {ticket.venue}
            </div>
          </div>
        </div>

        {/* Price Tag */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-semibold text-slate-900/60">Price:</span>
          <span className="text-lg font-black tracking-tight text-slate-950">
            {ticket.price}
          </span>
        </div>
      </div>

      {/* Bottom Section (Barcode Area) */}
      <div className="bg-white mx-4 mb-6 p-3 rounded-2xl flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
        {/* Barcode representation */}
        <div className="flex items-stretch justify-center gap-[2px] h-10 w-full px-1">
          {[
            2, 1, 3, 1, 4, 1, 2, 3, 2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 1, 2,
            4, 1, 3, 2, 1, 2, 4, 1, 3, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1,
          ].map((w, i) => (
            <div
              key={i}
              className="bg-slate-950"
              style={{ width: `${w}px`, opacity: i % 3 === 0 ? 0.9 : 0.8 }}
            />
          ))}
        </div>
        {/* Ticket ID */}
        <div className="text-[10px] text-slate-500 font-mono tracking-wider mt-1.5 font-semibold">
          Ticket Id: {ticket.ticketId}
        </div>
      </div>
    </div>
  );
}
export type { TicketData };
