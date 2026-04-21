import { clsx } from "clsx";

/**
 * iPhone-stili telefon çerçevesi. İçine `DashboardScreen`, `CustomerListScreen`
 * gibi mock ekranlar konur. Dark seçeneği karanlık tema demolarında kullanılır.
 */
export function PhoneMockup({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-[44px] p-[14px] shadow-2xl shadow-primary/20 ring-1 ring-black/5",
        dark
          ? "bg-[#1a2b4a] shadow-black/40"
          : "bg-gradient-to-b from-[#1a2b4a] to-[#0f1626]",
        className,
      )}
      style={{ width: 300, minHeight: 620 }}
    >
      {/* Notch */}
      <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

      {/* Ekran */}
      <div
        className={clsx(
          "relative overflow-hidden rounded-[32px] w-full h-[592px]",
          dark ? "bg-dark-bg text-dark-text" : "bg-bg text-text",
        )}
      >
        {children}
      </div>

      {/* Side button */}
      <div className="absolute -right-0.5 top-32 w-1 h-16 bg-black/20 rounded-l" />
    </div>
  );
}
