import React from 'react'
import { IoStatsChart } from "react-icons/io5"
import { EarningsCard, CardContent, Chart, EarningsText, Earning, EarningsIncrease } from './EarningElements'

const Earnings = () => {
  return (
    <EarningsCard>
        <CardContent>
          <Chart>
            <IoStatsChart />
          </Chart>
          <EarningsText>Earnings</EarningsText>
          <Earning>£980</Earning>
          <EarningsIncrease>+ 10% since last month</EarningsIncrease>
        </CardContent>
      </EarningsCard>
  )
}

export default Earnings
