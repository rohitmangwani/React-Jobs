import { ClipLoader } from "react-spinners"
const Spinner = ({loading}) => {
    console.log("in spinner");
    const override = {
        display:'bloack',
        margin:'100px auto'

    }
  return (
   <ClipLoader 
    color='#4338ca'
    loading = {loading}
    cssOverride={override}
    size={150}
   />
  )
}

export default Spinner
