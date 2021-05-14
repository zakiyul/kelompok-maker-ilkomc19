import shuffle from "../utils/shuffle";

const ListKlp = ({ newMhs }) => {
  const warna = ["primary", "info", "success", "warning", "danger"];
  const warnaRandom = shuffle(warna);

  return (
    <div className="row">
      {newMhs &&
        newMhs.map((item, idx) => {
          return (
            <div className="col-6 col-md-4 mb-3">
              <div
                className={`card border shadow-sm border-5 p-3 border-start border-${warnaRandom[idx]}`}
              >
                <ol key={idx}>
                  <h5>Kelompok {idx + 1}</h5>
                  {item.map((subItem, subIdx) => {
                    return <li key={subIdx}>{subItem}</li>;
                  })}
                </ol>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListKlp;
