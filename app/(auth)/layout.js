import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-5 bg-white">
      <div
        className="col-span-3 h-screen w-full"
        style={{ backgroundImage: "url('/blue-bg.png')" }}
      >
        <div className="w-full h-full bg-linear-to-br from-accent/50 to-accent-2/50 container flex items-end">
          <div className="show-lg max-w-[40em] flex flex-col gap-1 pb-5">
            <h4 className="text-white">Welcome to Smart POS Center</h4>
            <h2 className="text-white">
              The all in one platform to manage your orders
            </h2>
            <p className="text-white max-w-2/3">
              Manage your customers and orders from one place. Login to
              continue.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 absolute top-0 left-0 lg:relative h-screen w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
