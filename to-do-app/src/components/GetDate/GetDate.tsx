import './GetDate.css'

const getDate = (nextOrPreviousDay:number = 0) => {
    const date: Date = new Date()
    const day: number = date.getDate() + nextOrPreviousDay
    const month: number = date.getMonth()+1
    return `${day}.${month<10 ? `0${month}`: month}`
  }

function GetDate(){
    return (
        <nav className='date'>
            <span className='further-side-date' >{getDate(-2)}</span>
            <span className='side-date'         >{getDate(-1)}</span>
            <span className='current-date'      >{getDate()  }</span>
            <span className='side-date'         >{getDate(1) }</span>
            <span className='further-side-date' >{getDate(2) }</span>
        </nav>
    )
}

export default GetDate