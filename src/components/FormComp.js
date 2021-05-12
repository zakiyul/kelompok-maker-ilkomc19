import { useForm } from "react-hook-form";
import { GiGears } from "react-icons/gi";

const FormComp = ({ onChange, handleNMhs, handleSubmit, nMhsValue }) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <div className="row">
        <div className="col-md-8 col-12 mb-3">
          <label>List Mahasiswa</label>
          <textarea
            onChange={onChange}
            className="form-control"
            placeholder="ex:&#10;Jokowi&#10;Prabowo&#10;SBY&#10;Soekarno"
            style={{ height: 200 }}
            name="listMhs"
          ></textarea>
        </div>

        <div className="col-md-4 col-8">
          <small className="text-muted">
            <strong>*Jumlah anggota dlm 1 kelompok</strong>
          </small>
          <input
            {...register("jmlhMhs", { required: true })}
            required
            type="number"
            className="form-control mb-3"
            name="jumlahMhs"
            value={nMhsValue}
            onChange={handleNMhs}
          />
          {errors.jmlhMhs && (
            <small className="text-danger">Isi jumlah mahasiswa</small>
          )}
          <button onClick={handleSubmit} className="btn btn-warning">
            <GiGears /> Generate
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormComp;
