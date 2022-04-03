import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchActivity } from 'services/fetchAPI'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts'

function Activity() {
    let { id } = useParams()
    const [sessions, setData] = useState({})
    useEffect(() => {
        fetchActivity(id).then((res) => {
            if (res) {
                setData(res)
            }
        })
    }, [id])
    return (
        <BarChart width={730} height={250} data={sessions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#8884d8" />
            <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
    )
}
export default Activity
