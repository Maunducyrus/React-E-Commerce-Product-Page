// const Loader = () => <div>Loading...</div>;

// export default Loader;

export default function Loader() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}