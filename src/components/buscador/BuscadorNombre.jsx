

const BuscadorNombre = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label className="text-light mb-2">Buscar Pokemon:</label>
          <input className="form-control w-25 mb-2" type="text" value={""} onChange={(e) => set(e.target.value)} />
        </div>
      </form>
    </>
  )
}

export default BuscadorNombre