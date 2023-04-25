import { AiTwotoneDelete, AiOutlineCreditCard } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Student(props) {
  return (
    <div className="student">
      <span>{props.student.name}</span>
      <AiOutlineCreditCard />
      <RiDeleteBinLine onClick={() => props.deleteList(props.student.id)} />
    </div>
  );
}
