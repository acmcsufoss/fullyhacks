import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="mt-4 flex items-center justify-center">
      <AiOutlineLoading size={48} className="animate-spin text-[#72d6e6]" />
    </div>
  );
}
