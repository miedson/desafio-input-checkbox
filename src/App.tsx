import './App.css';

function App() {
  return (
    <form>

      <fieldset>
        <legend>Choose a trial plan</legend>

        <div className="radio-wrapper">
          <div>
            <input type="radio" name="plan" id="plan1" checked/>
            <label htmlFor="plan1">Standard</label>
          </div>

          <p>
            5TB of space Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>

        <div className="radio-wrapper">
          <div>
            <input type="radio" name="plan" id="plan2" />
            <label htmlFor="plan2">Advanced</label>
          </div>

          <p>
            As much space as you Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>

        <div className="checkbox-wrapper">
          <input type="checkbox" name="terms" id="terms"/>
          <label htmlFor="terms">I agree with <a href="#">terms and conditions</a></label>
        </div>

        <div className="checkbox-wrapper">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">I like to received mailing message</label>
        </div>

        <button type="submit">Start free trial</button>
        <small>no credit card needed</small>
      </fieldset>

    </form>
  );
}

export default App;
