import React from "react"
import Event2 from "../../static/event2.jpeg"
import Event3 from "../../static/event3.jpeg"
import Event4 from "../../static/event4.jpeg"
import Event5 from "../../static/event5.jpeg"
import Event6 from "../../static/event6.jpeg"
import Event7 from "../../static/event7.jpeg"

const events = () => {
  return (
    <>
      <div class="card-deck">
        <div class="card">
          <img src={Event7} class="card-img-top" alt="event" />
        </div>
        <div class="card">
          <img src={Event2} class="card-img-top" alt="event" />
        </div>
        <div class="card">
          <img src={Event3} class="card-img-top" alt="event" />
        </div>
      </div>

      <div class="card-deck">
        <div class="card">
          <img src={Event4} class="card-img-top" alt="event" />
        </div>
        <div class="card">
          <img src={Event5} class="card-img-top" alt="event" />
        </div>
        <div class="card">
          <img src={Event6} class="card-img-top" alt="event" />
        </div>
      </div>
    </>
  )
}

export default events
