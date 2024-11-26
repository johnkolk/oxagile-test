type Props = {
  error: string;
};

const ErrorHint: React.FC<Props> = ({ error }: Props) => {
  return (
    <div className="container mx-auto z-10 bg-gray-800 text-white text-center py-10 px-4 rounded-lg shadow-lg">
      <div className="text-4xl mb-4">⚠️</div>
      <div className="text-xl font-semibold">Something went wrong</div>
      <p className="text-gray-400 mt-2">( {error} )</p>
    </div>
  );
};

export default ErrorHint;
