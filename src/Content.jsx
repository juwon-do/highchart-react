import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export function Content() {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <div>
      <h1>Welcome to React!</h1>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}