import './UserGrid.css'

const Home = () => {

    return (
        <div className="container">
            <h2 className="title">Upload CSV</h2>
            <div className='divinput'>
                <input className='input' type="file" accept="file/csv" name="csv" id="csv" />
            </div>

        </div>
    )
}

export default Home;