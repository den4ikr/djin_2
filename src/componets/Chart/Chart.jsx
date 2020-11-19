import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';

const Chart = (props) => {
    debugger
    let data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page A', uv: 200, pv: 2400, amt: 2400}, {name: 'Page A', uv: 250, pv: 2400, amt: 2400}]

        

    return (
        <div>
            <LineChart width={600} height={300} data={ data }>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart> 
        </div>
    )
}
export default Chart;