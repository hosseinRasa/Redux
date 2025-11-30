import { useState } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";
import "./css/stype.css";
 

import { FaChartColumn } from "react-icons/fa6";
 
import { AiOutlineInfoCircle } from "react-icons/ai";
 
import { RiDashboardLine } from "react-icons/ri";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionItem = ({ title, icon, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        &nbsp;
 
        {icon}
        {isOpen ? <FaCaretDown /> : <FaCaretLeft />}
        &nbsp;
        {title}
      </div>
      <div
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem title="اطلاعات پایه" icon={<AiOutlineInfoCircle  />}>
        <ul>
          <li>
            <FaChartColumn /> &nbsp; hello
          </li>
          <li>
            <FaChartColumn /> &nbsp; hello
          </li>
          <li>
            <FaChartColumn /> &nbsp; hello
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem title="عملیات اصلی"  icon={<RiDashboardLine       />}>
        <p>Content 2</p>
      </AccordionItem>
    </div>
  );
}
