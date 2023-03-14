import Characters from "../../components/Characters";

interface HeaderProps {
  title: string,
  authors?: Array<string>
}
export default function Header({ title, authors}: HeaderProps) {
  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: "20vh",
      }}>
        <h1>{title}</h1>
        <div style={{ display: "flex", gap: 10 }}>
          {authors && authors.map((author) => {
            return (
              <p>{author}</p>
            );
          })}
        </div>

      </div>
      <div style={{
        display: "flex",
        width: "100vw",
        height: "80vh",
      }}> 
      <Characters/>
      </div>

    </div>

  );
}
