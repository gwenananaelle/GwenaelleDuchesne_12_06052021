import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPerformance } from 'services/fetchAPI'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

function Performance() {
    let { id } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetchPerformance(id).then((res) => {
            if (res) {
                setData(res)
            }
        })
    }, [id])
    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar
                dataKey="value"
                stroke="FF0101B2"
                fill="#FF0101B2"
                fillOpacity={0.7}
            />
        </RadarChart>
    )
}
export default Performance
