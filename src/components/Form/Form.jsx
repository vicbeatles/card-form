import "./styles.css";


const Form = ({formData,setFormData}) => {

    const {name, number, month, year, cvv, submitted} = formData;

    const inputHandler = (event) => { 
        setFormData({...formData,[event.target.name]:event.target.value})
     }

  return (
    <form>
        <div className="row">
            <div className="col-100 form-group">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <input value={name} onChange={inputHandler} type="text" id="name" name="name" placeholder="e.g. Jane Appleseed" />
            </div>
        </div>
        <div className="row">
        <div className="col-100 form-group">
                <label htmlFor="number">NUMBER</label>
                <input value={number} onChange={inputHandler} type="text" id="number" name="number" placeholder="e.g.1234 5678 9123 0000" />
            </div>
        </div>
        <div className="row jc-sb">
            <div className="col-50 form-group">
                <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
                <div className="row jc-sb">
                <div className="col-50"><input value={month} onChange={inputHandler} type="text" id="month" name="month" placeholder="MM" /></div>
                <div className="col-50"><input value={year} onChange={inputHandler} type="text" id="year" name="year" placeholder="YY" /></div>
                </div> 
            </div>
            <div className="col-50 form-group">
                <label htmlFor="cvv">CVC</label>
                <input value={cvv} onChange={inputHandler} type="text" id="cvv" name="cvv" placeholder="e.g. 123" />
            </div>
        </div>
        <div className="row"><button onClick={inputHandler} name="submitted" value={true}>Confirm</button></div>
    </form>
  )
}

export default Form;