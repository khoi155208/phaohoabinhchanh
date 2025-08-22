export default function Card({ name, description, price, image }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white">
      {image && <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-3" />}
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="font-bold text-red-600">{price}</p>
    </div>
  );
}
