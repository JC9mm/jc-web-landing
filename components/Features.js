export default function Features() {
  return (
    <section className="p-10 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-700 rounded-md">
          <h3 className="text-xl font-semibold">User Management</h3>
          <p>Full user authentication and management.</p>
        </div>
        <div className="p-6 bg-gray-700 rounded-md">
          <h3 className="text-xl font-semibold">Payments</h3>
          <p>Seamless integration with Stripe and PayPal.</p>
        </div>
        <div className="p-6 bg-gray-700 rounded-md">
          <h3 className="text-xl font-semibold">Real-Time WebSockets</h3>
          <p>Live updates for chat and gaming applications.</p>
        </div>
      </div>
    </section>
  );
}