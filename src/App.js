import { useState } from "react";
import shuffle from "./utils/shuffle";
import FormComp from "./components/FormComp";
import ListKlp from "./components/ListKlp";
import swal from "sweetalert";

export default function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [newMhs, setNewMhs] = useState([]);
  const [nMhs, setNMhs] = useState(0);

  const handleNMhs = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNMhs(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setMahasiswa(value.replace(/\n/g, " ").split(" "));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomizeMhs = shuffle(mahasiswa);
    if (randomizeMhs.length > 0) {
      const result = new Array(Math.ceil(randomizeMhs.length / nMhs))
        .fill()
        .map(() => mahasiswa.splice(0, nMhs));
      setNewMhs([...result]);
    } else if (nMhs.length <= 0) {
      swal({
        title: "Jumlah Anggota Kosong!",
        text: "Isi jumlah anggota kelompok!",
        icon: "warning",
      });
    } else {
      swal({
        title: "Data Kosong!",
        text: "Isi data mahasiswa!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="">
      <div className="bg-primary p-5 mb-3 text-white">
        <h1 className="display-4 text-center">
          ILKOM <strong className="text-warning">C</strong> BAGI KELOMPOK
        </h1>
        <p className="lead text-center">
          Aplikasi keadilan sosial saat pembagian kelompok
        </p>
        <hr />
      </div>
      <div className="container">
        <FormComp
          onChange={handleChange}
          handleNMhs={handleNMhs}
          handleSubmit={handleSubmit}
          nMhsValue={nMhs}
        />
        <hr />
        <ListKlp newMhs={newMhs} />
      </div>
    </div>
  );
}
