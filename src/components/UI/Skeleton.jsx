// const Skeleton = () => <div>Skeleton Loader</div>;

// export default Skeleton;

export default function Skeleton({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
}