// const SizeGuide = () => <div>Size Guide</div>;

// export default SizeGuide;

// src/components/Product/SizeGuide.jsx
export default function SizeGuide() {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-bold mb-2">Size Guide</h4>
      <p className="text-sm text-gray-700">Refer to our size chart to ensure the best fit.</p>
      <table className="w-full text-sm mt-2 border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Size</th>
            <th className="border px-2 py-1">Chest</th>
            <th className="border px-2 py-1">Waist</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">S</td>
            <td className="border px-2 py-1">34"</td>
            <td className="border px-2 py-1">28"</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">M</td>
            <td className="border px-2 py-1">38"</td>
            <td className="border px-2 py-1">32"</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">L</td>
            <td className="border px-2 py-1">42"</td>
            <td className="border px-2 py-1">36"</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
