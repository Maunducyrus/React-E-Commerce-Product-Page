// const AddressForm = () => <div>Address Form</div>;

// export default AddressForm;

export default function AddressForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="w-full p-2 border rounded" />
    </div>
  );
}

