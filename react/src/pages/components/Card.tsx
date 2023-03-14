import "./card.css";


interface CardProps {
  title: string
  description: string
};


export default function Card({ title, description }: CardProps) {
  return (
    <div style={{
      margin: 20,
      padding: 10,
      borderRadius: 10,
      boxShadow: "0px 0px 25px #d0d0d0",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <div className="center" style={{
          width: "20%",
          background: "purple",
          color: "white",
          borderTopLeftRadius: 10,
          fontWeight: "bold"
        }}>
          <p>{title}</p>
        </div>

        <div className="center"
          style={{
            width: "100%",
            background: "#dd00dd",
            color: "white",
            fontWeight: "bold",
            borderTopRightRadius: 10,
          }}>
          <p>{description}</p>
        </div>

      </div> 

      {/* Canvas */}
      <div style={{
        width: "100%",
        height: "40vh",
        border: "1px solid #d0d0d0",
        marginTop: 10
      }}>
      </div>

    </div>
  );
}
