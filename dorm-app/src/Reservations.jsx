import ReservationsMap from "./ReservationsMap"

export default function Reservations({ reservations }) {
    return (<div className="reservations">
        { reservations.length == 0 ? 
        <div className='no-reservation'><p>You have no current reservations.</p>
        <p>Make a reservation by going into available times and scheduling a reservation.</p>
        </div>

       : <ReservationsMap />}
    </div> )
}