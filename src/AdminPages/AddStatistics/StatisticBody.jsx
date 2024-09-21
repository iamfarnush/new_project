import React, { useEffect, useState } from 'react'

export default function StatisticBody() {

  const [statistics, setStatistics] = useState([])

  function getStatistics() {
    fetch("http://127.0.0.1:2020/get/statistic")
    .then(response => {
      if(response.ok) {
        return response.json()
      } 

      throw new Error()
    })
    .then(data => {
      setStatistics(data)
    })
    .catch(error => {
      console.log("Unable to get the data");
      
    })
  }

  useEffect(getStatistics, [])

  return (
    <div>

    </div>
  )
}
