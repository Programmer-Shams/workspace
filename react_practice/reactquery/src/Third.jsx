import React from 'react'
import { useQueryClient } from 'react-query'
const Third = () => {
    const queryClient =  useQueryClient()
  return (
    <div>
        <button onClick={() => queryClient.invalidateQueries(['/users/1'])}>Refetch data</button>
    </div>
  )
}

export default Third