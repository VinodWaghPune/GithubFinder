
import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {

    const {alert} = useContext(AlertContext);
  return (
   alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type=='error' && (
            <p>
                <strong>
                {alert.msg}</strong></p>

        )}
    </p>
   )

   
  )
}

export default Alert
