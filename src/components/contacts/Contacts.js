import "./Contacts.css";
// //props
// const Contacts = (props) => {
//   return (
//     <div>
//       <h2>Контакти</h2>

//       <p>
//         <strong>Телефон:</strong> {props.phone}
//       </p>

//       <p>
//         <strong>Email:</strong> {props.email}
//       </p>

//       <p>
//         <strong>Адреса:</strong> {props.address}
//       </p>
//     </div>
//   );
// };

// export default Contacts;


//деструктирізація props
const Contacts = ({ phone, email, address }) => {
  return (
    <div className="contacts-card">
      <h2>Контакти</h2>
      <p><strong>Телефон:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Адреса:</strong> {address}</p>
    </div>
  );
};

export default Contacts;