import { useState } from "react"

function UseSt() {
    const [count, setCount] = useState(0)
    return (
      <div>
          The count is: {count}
          <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
  }

  export default UseSt