// import "./Faq.css";
// import Navbar from "../Navbar/Navbar";

// import { BeatLoader } from "react-spinners";
// import React, { useEffect, useState } from "react";

// export default function Faq() {
//   const [loading, setLoading] = useState(true);

//   const [expandedIndices, setExpandedIndices] = useState([]);

//   const toggleFaq = (index) => {
//     if (expandedIndices.includes(index)) {
//       setExpandedIndices(expandedIndices.filter((i) => i !== index));
//     } else {
//       setExpandedIndices([...expandedIndices, index]);
//     }
//   };

//   const faq = [
//     {
//       text: "How do I download the shopper app?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "I'm a retailer. How can I get 1receipt for my store?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "How does the receipt capture feature work?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "Is the app secure for storing sensitive financial information?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "Can I access my receipts from multiple devices?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "How does the app benefit retailers?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "Are there any eco-friendly features in the app?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "I'm a retailer. Can I experience a live demo of ereceipt?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//     {
//       text: "Can I still get my receipt via 1receipt if I'm paying by cash?",
//       text2: "eRexeipt app can be downloaded via App store & Google play store",
//     },
//   ];
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-spinner">
//         <BeatLoader color="#36D7B7" loading={loading} size={15} />
//       </div>
//     );
//   }
//   return (
//     <>
//       <div className="faq-main">
//         <div className="faq">
//           <Navbar />
//           <div className="faq-head">
//             <div className="faqs">
//               <p>FAQ’s</p>
//             </div>
//             <div className="faq-content">
//               {faq.map((faqs, index) => (
//                 <div key={index} className="faqs-cont">
//                   <div className="faqs-container">
//                     <div className="faq-main-text">
//                       <p>{faqs.text}</p>
//                     </div>
//                     <div
//                       className="faq-child-text"
//                       style={{
//                         display: expandedIndices.includes(index)
//                           ? "block"
//                           : "none",
//                       }}
//                     >
//                       <p>{faqs.text2}</p>
//                     </div>
//                   </div>
//                   <div className="faq-icon">
//                     <button onClick={() => toggleFaq(index)}>
//                       {expandedIndices.includes(index) ? "-" : "+"}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* <Application /> */}
//           {/* <div className="faq-footer">
//             <Footer />
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }
