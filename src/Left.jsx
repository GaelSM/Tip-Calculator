export default function Left({bill, custom, people, handleChange, handleCustom}) {
  return (
    <section className="left">
      <div className="bill">
        <h3> Bill </h3>
        <input type="number" id="bill" placeholder="0" onChange={(e) => handleChange(e, "bill")} value={bill}/>
      </div>

      <div className="select-tip">
        <h3> Select Tip %</h3>
        <div>
          <div className="input">
            <p> 5% </p>
            <input type="radio" name="tip" onClick={(e) => handleChange(e, "tip")} value={5}/>
          </div>
          <div className="input">
            <p> 10% </p>
            <input type="radio" name="tip" onClick={(e) => handleChange(e, "tip")} value={10}/>
          </div>
          <div className="input">
            <p> 15% </p>
            <input type="radio" name="tip" onClick={(e) => handleChange(e, "tip")} value={15}/>
          </div>
          <div className="input">
            <p> 25% </p>
            <input type="radio" name="tip" onClick={(e) => handleChange(e, "tip")} value={25}/>
          </div>
          <div className="input">
            <p> 50% </p>
            <input type="radio" name="tip" onClick={(e) => handleChange(e, "tip")} value={50}/>
          </div>
          <input type="number" placeholder="Custom" onChange={(e) => handleCustom(e)} value={custom}/>
        </div>
      </div>

      <div className="people">
        <h3> Number of people </h3>
        <input type="number" placeholder="0" onChange={(e) => handleChange(e, "people")} value={people}/>
      </div>
    </section>
  )
}