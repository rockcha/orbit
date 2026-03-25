const LoadingOverlay = ({ msg = "통신 확인 중..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-6 bg-black/80 text-white">
      <span className="loading loading-ring h-20 w-20"></span>
      <p className="text-xl font-semibold tracking-wide">{msg}</p>
    </div>
  );
};

export default LoadingOverlay;
