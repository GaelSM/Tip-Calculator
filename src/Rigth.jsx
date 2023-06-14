export default function Rigth({calculate, amount, total, handleReset}) {
  return (
    <section className="rigth">
      <div className="header">
        <div>
          <div>
            <h3> Tip amount </h3>
            <p> / person </p>
          </div>
          <h2> ${calculate && amount !== Infinity ? amount.toFixed(2) : "0.00"} </h2>
        </div>
        <div>
          <div>
            <h3> Total </h3>
            <p> / person </p>
          </div>
          <h2> ${calculate && amount !== Infinity? total.toFixed(2) : "0.00"} </h2>
        </div>
      </div>
      <button onClick={handleReset} className={calculate ? "active" : ""}> Reset </button>
    </section>
  )
}